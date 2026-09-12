/**
 * render.js — Hiển thị nội dung PROFILE (js/data.js) vào các khu vực của index.html
 * -----------------------------------------------------------------------------
 * Mỗi hàm render một khu vực. Khu vực không có dữ liệu sẽ được ẩn
 * (và ui.js sẽ không tạo mục điều hướng cho khu vực đó).
 */
const Render = (() => {
  "use strict";

  const { $, createElement: el, createIcon: icon, createLink: link, toTelHref, getInitials, withLineBreaks, copyText, showToast } =
    Utils;

  const CONTACT_SECTION_ID = "lien-he";
  const COPY_FEEDBACK_MS = 1600;

  /* ---------------------------------------------------------------------------
   * Helpers
   * ------------------------------------------------------------------------- */
  function setText(node, value) {
    if (value) node.textContent = value;
    else node.hidden = true;
  }

  /** Thêm phần tử vào danh sách; ẩn `wrapper` (mặc định là chính danh sách) khi rỗng. */
  function fillList(listNode, items = [], renderItem, wrapper = listNode) {
    items.filter(Boolean).forEach((item) => {
      const node = renderItem(item);
      if (node) listNode.append(node);
    });
    const count = listNode.children.length;
    wrapper.hidden = count === 0;
    return count;
  }

  /** Như fillList, đồng thời ẩn cả section chứa danh sách khi không có phần tử nào. */
  function fillSectionList(listNode, items, renderItem) {
    const count = fillList(listNode, items, renderItem);
    listNode.closest("section").hidden = count === 0;
    return count;
  }

  function createList(className, items = [], renderItem) {
    const listNode = el("ul", { className });
    return fillList(listNode, items, renderItem) ? listNode : null;
  }

  const createChips = (items) => createList("chips", items, (text) => el("li", { className: "chip", text }));
  const createTags = (items, variant) =>
    createList(variant ? `tags tags--${variant}` : "tags", items, (text) => el("li", { className: "tag", text }));
  const createBullets = (items) => createList("bullets", items, (text) => el("li", { text }));

  function createButton({ label, iconName, url, variant = "primary", size }) {
    const className = ["button", `button--${variant}`, size && `button--${size}`].filter(Boolean).join(" ");
    return link(url, { className }, [iconName && icon(iconName), el("span", { text: label })]);
  }

  function createIconLink({ icon: iconName, label, url }) {
    const anchor = link(url, { className: "icon-button icon-button--outline", attrs: { title: label } }, [icon(iconName)]);
    if (!anchor) return null;
    const hint = anchor.target === "_blank" ? ` (${STRINGS.newTab})` : "";
    anchor.setAttribute("aria-label", label + hint);
    return anchor;
  }

  function createCopyButton(value, { label, successMessage }) {
    const button = el("button", { className: "icon-button", attrs: { type: "button", "aria-label": label, title: label } }, [
      icon("copy"),
    ]);
    button.addEventListener("click", async () => {
      const copied = await copyText(value);
      showToast(copied ? successMessage : STRINGS.copyFailed);
      if (!copied) return;
      button.replaceChildren(icon("check"));
      setTimeout(() => button.replaceChildren(icon("copy")), COPY_FEEDBACK_MS);
    });
    return button;
  }

  /* ---------------------------------------------------------------------------
   * Khu vực: meta, header, hero
   * ------------------------------------------------------------------------- */
  function renderMeta({ name, tagline, experience = [] }) {
    const currentJob = experience.find((item) => item.current);
    document.title = STRINGS.pageTitle(name, currentJob?.role);
    if (tagline) $('meta[name="description"]').setAttribute("content", tagline);
  }

  function renderHeader({ name, cv }) {
    $("#brand-mark").textContent = getInitials(name);
    $("#brand-name").textContent = name;
    fillList($("#header-actions"), [cv && { label: STRINGS.viewCv, iconName: "fileText", url: cv, size: "sm" }], createButton);
  }

  function renderAvatar(name, avatar) {
    const figure = $("#hero-photo");
    const img = $("#hero-avatar");
    if (!avatar) {
      figure.hidden = true;
      return;
    }
    img.alt = STRINGS.avatarAlt(name);
    img.addEventListener("error", () => (figure.hidden = true), { once: true });
    img.src = avatar;
  }

  function renderHero({ name, tagline, avatar, cv, contact = {}, socials = [], experience = [], education = [] }) {
    const currentJob = experience.find((item) => item.current);
    const currentStudy = education.find((item) => item.current);

    setText($("#hero-role"), currentJob && STRINGS.currentRole(currentJob.role, currentJob.organization));
    $("#hero-name").textContent = name;
    setText($("#hero-tagline"), tagline);

    fillList(
      $("#hero-meta"),
      [
        contact.location && { iconName: "mapPin", text: contact.location },
        currentStudy && { iconName: "graduationCap", text: STRINGS.currentStudy(currentStudy.degree, currentStudy.school) },
      ],
      ({ iconName, text }) => el("li", { className: "hero__meta-item" }, [icon(iconName), el("span", { text })])
    );

    const contactVisible = !document.getElementById(CONTACT_SECTION_ID).hidden;
    fillList(
      $("#hero-actions"),
      [
        cv && { label: STRINGS.viewCv, iconName: "fileText", url: cv },
        contactVisible && { label: STRINGS.contact, iconName: "mail", url: `#${CONTACT_SECTION_ID}`, variant: "secondary" },
        ...socials.map((social) => ({ ...social, iconOnly: true })),
      ],
      (item) => (item.iconOnly ? createIconLink(item) : createButton(item))
    );

    renderAvatar(name, avatar);
  }

  function renderHighlights(items) {
    fillList($("#highlights"), items, ({ value, label }) =>
      el("li", { className: "highlight" }, [
        el("span", { className: "highlight__value", text: value }),
        el("span", { className: "highlight__label", text: label }),
      ])
    );
  }

  /* ---------------------------------------------------------------------------
   * Khu vực nội dung
   * ------------------------------------------------------------------------- */
  function renderAbout({ summary = [], interests = [], focus = [], research = [] } = {}) {
    const summaryNode = $("#about-summary");
    const paragraphs = fillList(summaryNode, summary, (text) => el("p", { text }));

    const chip = (text) => el("li", { className: "chip", text });
    const researchItem = ({ name, note }) =>
      el("li", { className: "research-item" }, [
        icon("microscope"),
        el("div", {}, [
          el("span", { className: "research-item__name", text: name }),
          note && el("span", { className: "research-item__note", text: note }),
        ]),
      ]);
    const fillGroup = (selector, items, renderItem) => {
      const listNode = $(selector);
      return fillList(listNode, items, renderItem, listNode.closest(".about__group"));
    };

    const asideCount =
      fillGroup("#about-interests", interests, chip) +
      fillGroup("#about-focus", focus, chip) +
      fillGroup("#about-research", research, researchItem);

    $("#about-aside").hidden = asideCount === 0;
    summaryNode.closest("section").hidden = paragraphs + asideCount === 0;
  }

  function renderSkills(groups) {
    fillSectionList($("#skill-groups"), groups, ({ group, icon: iconName, items }) => {
      const chips = createChips(items);
      if (!chips) return null;
      return el("li", { className: "card skill-card" }, [
        el("div", { className: "skill-card__head" }, [
          el("span", { className: "skill-card__icon" }, [icon(iconName)]),
          el("h3", { className: "skill-card__title", text: group }),
        ]),
        chips,
      ]);
    });
  }

  function createTimelineItem({ period, current, title, subtitle, meta, bullets, tags, extra }) {
    return el("li", { className: current ? "timeline__item is-current" : "timeline__item" }, [
      el("p", { className: "timeline__period", text: period }),
      el("article", { className: "card timeline__card" }, [
        el("header", { className: "timeline__head" }, [
          el("h3", { className: "timeline__title", text: title }),
          subtitle && el("p", { className: "timeline__subtitle", text: subtitle }),
          meta && el("p", { className: "timeline__meta", text: meta }),
        ]),
        createBullets(bullets),
        extra,
        createTags(tags),
      ]),
    ]);
  }

  function renderExperience(items) {
    fillSectionList($("#experience-list"), items, ({ role, organization, period, current, bullets, tags }) =>
      createTimelineItem({ period, current, title: role, subtitle: organization, bullets, tags })
    );
  }

  function renderEducation(items) {
    fillSectionList($("#education-list"), items, ({ school, degree, location, period, current, highlights, coursework }) => {
      const courses = createTags(coursework, "neutral");
      const extra =
        courses && el("div", { className: "coursework" }, [el("p", { className: "coursework__label", text: STRINGS.coursework }), courses]);
      return createTimelineItem({ period, current, title: school, subtitle: degree, meta: location, bullets: highlights, extra });
    });
  }

  function createProjectDetails(items) {
    const bullets = createBullets(items);
    if (!bullets) return null;
    const label = el("span", { text: STRINGS.showDetails });
    const details = el("details", { className: "project-card__details" }, [
      el("summary", { className: "project-card__toggle" }, [label, icon("chevronDown")]),
      bullets,
    ]);
    details.addEventListener("toggle", () => {
      label.textContent = details.open ? STRINGS.hideDetails : STRINGS.showDetails;
    });
    return details;
  }

  function renderProjects(projects) {
    fillSectionList($("#project-list"), projects, ({ id, title, badge, summary, details, tags }) =>
      el("li", {}, [
        el("article", { className: "card project-card", attrs: { id } }, [
          badge && el("span", { className: "badge badge--award" }, [icon("award"), el("span", { text: badge })]),
          el("h3", { className: "project-card__title", text: title }),
          summary && el("p", { className: "project-card__summary", text: summary }),
          createTags(tags),
          createProjectDetails(details),
        ]),
      ])
    );
  }

  function renderAwards(awards) {
    fillSectionList($("#award-list"), awards, ({ title, subtitle, period, description, project }) => {
      const hasProject = project && document.getElementById(project);
      return el("li", { className: "card award-card" }, [
        el("span", { className: "award-card__icon" }, [icon("award")]),
        el("div", { className: "award-card__body" }, [
          el("div", { className: "award-card__head" }, [
            el("h3", { className: "award-card__title", text: title }),
            period && el("span", { className: "award-card__period", text: period }),
          ]),
          subtitle && el("p", { className: "award-card__subtitle", text: subtitle }),
          description && el("p", { className: "award-card__description", text: description }),
          hasProject && link(`#${project}`, { className: "text-link" }, [el("span", { text: STRINGS.viewProject }), icon("arrowRight")]),
        ]),
      ]);
    });
  }

  function createContactCard({ iconName, label, value, url, copyable }) {
    const anchor = link(url, { className: "contact-card__link", attrs: { title: value } }, withLineBreaks(value));
    if (!anchor) return null;
    const opensNewTab = anchor.target === "_blank";
    anchor.setAttribute("aria-label", `${label}: ${value}${opensNewTab ? ` (${STRINGS.newTab})` : ""}`);

    return el("li", { className: "card contact-card" }, [
      el("span", { className: "contact-card__icon" }, [icon(iconName)]),
      el("div", { className: "contact-card__body" }, [el("span", { className: "contact-card__label", text: label }), anchor]),
      copyable
        ? createCopyButton(value, { label: STRINGS.copyEmail, successMessage: STRINGS.emailCopied })
        : icon(opensNewTab ? "arrowUpRight" : "arrowRight", "icon contact-card__arrow"),
    ]);
  }

  function renderContact({ contact = {}, socials = [], cv }) {
    const locationNode = $("#contact-location");
    if (contact.location) locationNode.append(icon("mapPin"), el("span", { text: contact.location }));
    else locationNode.hidden = true;

    const grid = $("#contact-list");
    const count = fillList(
      grid,
      [
        contact.email && { iconName: "mail", label: STRINGS.email, value: contact.email, url: `mailto:${contact.email}`, copyable: true },
        contact.phone && { iconName: "phone", label: STRINGS.phone, value: contact.phone, url: toTelHref(contact.phone) },
        ...socials.map(({ icon: iconName, label, handle, url }) => ({ iconName, label, value: handle || url, url })),
        cv && { iconName: "fileText", label: STRINGS.cvLabel, value: STRINGS.cvValue, url: cv },
      ],
      createContactCard
    );
    grid.closest("section").hidden = count === 0 && !contact.location;
  }

  function renderFooter({ name }) {
    $("#footer-copy").textContent = STRINGS.copyright(new Date().getFullYear(), name);
  }

  /* ---------------------------------------------------------------------------
   * Render toàn bộ trang
   * ------------------------------------------------------------------------- */
  function renderAll(profile) {
    renderMeta(profile);
    renderHeader(profile);
    renderHighlights(profile.highlights);
    renderAbout(profile.about);
    renderSkills(profile.skills);
    renderExperience(profile.experience);
    renderProjects(profile.projects);
    renderEducation(profile.education);
    renderAwards(profile.awards); // Sau renderProjects: cần biết dự án được liên kết có tồn tại không
    renderContact(profile);
    renderHero(profile); // Sau renderContact: nút "Liên hệ" chỉ hiện khi section Liên hệ hiển thị
    renderFooter(profile);
  }

  return { renderAll };
})();
