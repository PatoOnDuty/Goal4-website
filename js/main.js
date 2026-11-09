/* ==========================================================================
   Goal4 Initiative — shared site script
   Header, footer and icon sprite are rendered here so every page stays in
   sync: edit NAV / CONTACT below and all pages update.
   ========================================================================== */

const CONTACT = {
  email: "elimu@goal4initiative.com",
  phone: "+254 700 000 000", // TODO: replace with the real phone number
  location: "Nairobi, Kenya", // TODO: confirm office location
  paybill: "891300",
  account: "101531",
  socials: { facebook: "#", instagram: "#", linkedin: "#" } // TODO: real links
};

const NAV = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About Us" },
  { href: "programs.html", label: "Our Programs" },
  { href: "stories.html", label: "Stories & Gallery" },
  { href: "news.html", label: "News & Partners" },
  { href: "get-involved.html", label: "Get Involved" }
];

/* Lucide-style icons (MIT) — referenced with <svg class="icon"><use href="#i-name"/></svg> */
const ICONS = {
  // Hand-drawn heart: one sketchy loop that overshoots, plus a little highlight stroke
  heart: '<g filter="url(#rough-sm)"><path d="M12 20.4C7.2 17 3.2 13.7 3.5 9.3 3.8 6.1 6.9 4.3 9.5 5.6c1.2.6 2 1.6 2.5 2.8.6-1.4 1.7-2.6 3.1-3.1 2.8-1 5.5 1 5.4 4.1-.2 4.4-4.3 7.8-8.2 11.1-.7-.5-1.4-.9-2-1.3"/><path d="M6.6 9.6c.2-1.1.9-1.9 1.9-2.2" stroke-width="1.6" opacity=".7"/></g>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  access: '<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/>',
  cap: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  sprout: '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
  hands: '<path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/>',
  phoneapp: '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  star: '<path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z"/>',
  quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  news: '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z"/>',
  school: '<path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M18 5v17"/><path d="m4 6 8-4 8 4"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>'
};

const icon = (name, extra = "") => `<svg class="icon ${extra}" aria-hidden="true"><use href="#i-${name}"/></svg>`;

/* Hand-drawn doodles — wobbly, uneven strokes with a pencil "roughen" filter.
   Use: <span class="doodle ..."><svg><use href="#d-sun"/></svg></span> */
const DOODLES = {
  sun: '<g stroke="#ffc627" stroke-width="4.5" fill="none" stroke-linecap="round" filter="url(#rough)"><path d="M41 6c.6 4 .2 8.5-1.2 13"/><path d="M59 13c-1.8 3.6-4.6 7-7.8 9.6"/><path d="M71 31c-4.6.4-8.8 1.8-12.4 3.8"/><path d="M72 50c-4.2-1.6-8.4-2.2-12.6-2.4"/><path d="M61 66c-2.4-3.6-5.4-6.6-8.6-8.8"/><path d="M22 12c2.6 3 4.6 6.8 6 10.6"/><path d="M9 30c4.4.8 8.4 2.4 12 4.6"/></g>',
  heart: '<g stroke="#e5157b" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#rough)"><path stroke-width="4" d="M40 67C23 54 9 42 12 27c2.4-11 17-15 26-2 7-13 24-11 27 2 4 15-10 28-25 40-2-2-4.6-3.6-7-5"/><path stroke-width="2" opacity=".55" d="M38 63C24 52 13 41 15 29c2-9 14-12 22-1"/></g>',
  marks: '<g stroke="#4ba543" stroke-width="4.5" fill="none" stroke-linecap="round" filter="url(#rough)"><path d="M14 58c-3-8-4-17-2-25"/><path d="M26 48c-1-9 1-18 6-26"/><path d="M40 44c3-7 8-13 15-17"/></g>',
  swirl: '<g stroke="#0d2187" stroke-width="3.5" fill="none" stroke-linecap="round" filter="url(#rough)"><path d="M6 52c8-16 24-26 32-14 5 8-6 16-10 7-4-10 12-22 26-16 8 3 12 10 20 9"/></g>',
  quote: '<g fill="currentColor" filter="url(#rough)"><path d="M12 50c0-13 7-24 20-29l3 5.5c-7.5 3.4-11 8.6-11 13.5 6.4 0 10.6 4.2 10.6 9.6 0 5.6-4.4 9.6-10.4 9.6C16.6 59.2 12 55.2 12 50z"/><path d="M43 50c0-13 7-24 20-29l3 5.5c-7.5 3.4-11 8.6-11 13.5 6.4 0 10.6 4.2 10.6 9.6 0 5.6-4.4 9.6-10.4 9.6C47.6 59.2 43 55.2 43 50z"/></g>',
  underline: '<g fill="none" stroke-linecap="round" filter="url(#rough)"><path stroke-width="5" d="M3 10C46 4 112 3 197 7"/><path stroke-width="2.6" opacity=".7" d="M24 13c50-4 104-4 160-2"/></g>'
};

function injectSprite() {
  const symbols = Object.entries(ICONS)
    .map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`)
    .join("");
  const doodles = Object.entries(DOODLES)
    .map(([k, v]) => `<symbol id="d-${k}" viewBox="${k === "underline" ? "0 0 200 16" : "0 0 80 80"}" overflow="visible">${v}</symbol>`)
    .join("");
  // Not display:none — filters inside a hidden SVG don't render in Chrome.
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
      <filter id="rough-sm" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="2" seed="9"/><feDisplacementMap in="SourceGraphic" scale="0.9"/></filter>
      <filter id="rough" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="5"/><feDisplacementMap in="SourceGraphic" scale="2.6"/></filter>
      ${symbols}${doodles}</svg>`
  );
}

function renderHeader() {
  const slot = document.querySelector("[data-header]");
  if (!slot) return;
  const page = location.pathname.split("/").pop() || "index.html";
  const dots = ["#f7941d", "#4ba543", "#2a8ff7", "#e5157b", "#ffc627", "#0d2187"];
  const links = NAV.map(
    (n, i) => `<li><a href="${n.href}"${n.href === page ? ' aria-current="page"' : ""}><span class="nav__dot" style="background:${dots[i % dots.length]}"></span><span class="nav__label">${n.label}</span></a></li>`
  ).join("");
  slot.outerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="Main">
        <a class="brand" href="index.html" aria-label="Goal4 Initiative home">
          <img src="assets/img/logo.jpg" alt="" width="52" height="52">
          <span class="brand__text">
            <span class="brand__name">Goal<span>4</span>Initiative</span>
            <span class="brand__tag">Foundations that shape the Future</span>
          </span>
        </a>
        <div class="nav__panel" id="nav-panel">
          <p class="nav__panel-title" aria-hidden="true">Let’s explore!</p>
          <ul class="nav__links">${links}</ul>
          <div class="nav__panel-foot">
            <a class="btn btn--orange btn--block" href="get-involved.html#donate">${icon("heart")}Donate</a>
            <a class="btn btn--ghost btn--block" href="get-involved.html#pledge">Make a pledge</a>
            <a class="nav__mail" href="mailto:${CONTACT.email}">${icon("mail")}${CONTACT.email}</a>
          </div>
        </div>
        <div class="nav__cta">
          <a class="btn btn--orange btn--sm nav__donate" href="get-involved.html#donate">${icon("heart")}Donate</a>
          <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-panel" aria-label="Open menu">${icon("menu")}</button>
        </div>
      </nav>
    </div>
    <div class="nav__scrim" hidden></div>
  </header>
  <div class="mobile-donate" aria-label="Quick give">
    <a class="mobile-donate__btn mobile-donate__btn--donate" href="get-involved.html#donate">${icon("heart")}<span>Donate</span></a>
    <a class="mobile-donate__btn" href="get-involved.html#pledge">${icon("hands")}<span>Pledge</span></a>
  </div>`;
}

function renderFooter() {
  const slot = document.querySelector("[data-footer]");
  if (!slot) return;
  const year = new Date().getFullYear();
  slot.outerHTML = `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <img src="assets/img/logo.jpg" alt="Goal4 Initiative logo" width="72" height="72">
        <p>Accelerating learning outcomes for early childhood learners and children with disabilities in rural Kenya.</p>
        <span class="script">for every child who dares to dream</span>
        <div class="socials">
          <a href="${CONTACT.socials.facebook}" aria-label="Facebook">${icon("facebook")}</a>
          <a href="${CONTACT.socials.instagram}" aria-label="Instagram">${icon("instagram")}</a>
          <a href="${CONTACT.socials.linkedin}" aria-label="LinkedIn">${icon("linkedin")}</a>
        </div>
      </div>
      <div>
        <h3>Explore</h3>
        <ul class="footer-links">${NAV.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h3>Get in touch</h3>
        <ul class="footer-contact">
          <li>${icon("mail")}<a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
          <li>${icon("phone")}<a href="tel:${CONTACT.phone.replace(/\s/g, "")}">${CONTACT.phone}</a></li>
          <li>${icon("pin")}<span>${CONTACT.location}</span></li>
        </ul>
      </div>
      <div>
        <h3>Donate via M-Pesa</h3>
        <p>Every shilling goes towards learning materials, teacher support and inclusive classrooms.</p>
        <div class="footer-pay">
          <div>Paybill: <strong>${CONTACT.paybill}</strong></div>
          <div>Account: <strong>${CONTACT.account}</strong></div>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>&copy; ${year} Goal4 Initiative. Promoting quality education for all.</span>
      <span>Inspired by UN Sustainable Development Goal 4</span>
    </div>
  </footer>
  <div class="toast" role="status" aria-live="polite"></div>`;
}

/* ---------- Behaviour ---------- */
function toast(msg) {
  const el = document.querySelector(".toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("is-show");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove("is-show"), 3000);
}

function initNav() {
  const btn = document.querySelector(".nav__toggle");
  const panel = document.getElementById("nav-panel");
  const scrim = document.querySelector(".nav__scrim");
  if (!btn || !panel) return;
  const mobile = matchMedia("(max-width: 1020px)");
  const setOpen = (open) => {
    panel.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    scrim.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    btn.innerHTML = icon(open ? "x" : "menu");
    if (open) panel.querySelector("a")?.focus();
  };
  btn.addEventListener("click", () => setOpen(!panel.classList.contains("is-open")));
  scrim.addEventListener("click", () => setOpen(false));
  panel.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && panel.classList.contains("is-open")) { setOpen(false); btn.focus(); } });
  mobile.addEventListener("change", () => setOpen(false));

  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initCopy() {
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    const value = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = Object.assign(document.createElement("textarea"), { value });
      document.body.append(ta); ta.select(); document.execCommand("copy"); ta.remove();
    }
    toast(`Copied ${value} to clipboard`);
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal, [data-count], .progress__bar");
  if (!("IntersectionObserver" in window)) {
    els.forEach(show);
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { show(en.target); io.unobserve(en.target); }
    });
  }, { threshold: 0.2 });
  els.forEach((el) => io.observe(el));

  function show(el) {
    if (el.classList.contains("reveal")) el.classList.add("is-visible");
    if (el.classList.contains("progress__bar")) el.style.width = el.dataset.value + "%";
    if (el.dataset.count) countUp(el);
  }
}

function countUp(el) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { el.textContent = target.toLocaleString() + suffix; return; }
  const start = performance.now();
  const dur = 1400;
  const tick = (now) => {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initSliders() {
  document.querySelectorAll("[data-slider]").forEach((slider) => {
    const track = slider.querySelector(".slider__track");
    const step = () => track.querySelector(":scope > *").getBoundingClientRect().width + 24;
    slider.querySelector("[data-prev]")?.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    slider.querySelector("[data-next]")?.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
  });
}

function initGallery() {
  const gallery = document.querySelector("[data-gallery]");
  if (!gallery) return;

  // Filters
  document.querySelectorAll("[data-filter]").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      const f = chip.dataset.filter;
      gallery.querySelectorAll("[data-cat]").forEach((item) => {
        item.hidden = f !== "all" && item.dataset.cat !== f;
      });
    });
  });

  // Lightbox
  const box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Photo viewer");
  box.innerHTML = `<button class="lightbox__close" type="button" aria-label="Close photo">${icon("x")}</button><figure style="margin:0"><img alt=""><p></p></figure>`;
  document.body.append(box);
  const img = box.querySelector("img");
  const cap = box.querySelector("p");
  const closeBtn = box.querySelector(".lightbox__close");
  let opener = null;

  const close = () => { box.classList.remove("is-open"); opener?.focus(); };
  gallery.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-cat]");
    if (!btn) return;
    opener = btn;
    const thumb = btn.querySelector("img");
    img.src = thumb.src.replace(/w=\d+/, "w=1400");
    img.alt = thumb.alt;
    cap.textContent = thumb.alt;
    box.classList.add("is-open");
    closeBtn.focus();
  });
  closeBtn.addEventListener("click", close);
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && box.classList.contains("is-open")) close(); });
}

/* Pledge form — mirrors the Founders' Circle form in the brochure.
   No backend yet: on submit it opens the visitor's email app with the
   pledge pre-filled to elimu@goal4initiative.com. */
function initPledge() {
  const form = document.getElementById("pledge-form");
  if (!form) return;
  const fmt = (n) => "KES " + n.toLocaleString("en-KE");
  const totalEl = form.querySelector("[data-total]");
  const steppers = form.querySelectorAll(".stepper");

  const recalc = () => {
    let total = 0;
    steppers.forEach((s) => {
      const input = s.querySelector("input");
      const v = Math.max(0, Math.min(99, parseInt(input.value, 10) || 0));
      input.value = v;
      s.querySelector("[data-dec]").disabled = v === 0;
      total += v * Number(input.dataset.price);
    });
    totalEl.textContent = fmt(total);
    return total;
  };

  steppers.forEach((s) => {
    const input = s.querySelector("input");
    s.querySelector("[data-dec]").addEventListener("click", () => { input.value = (+input.value || 0) - 1; recalc(); });
    s.querySelector("[data-inc]").addEventListener("click", () => { input.value = (+input.value || 0) + 1; recalc(); });
    input.addEventListener("input", recalc);
  });

  // Preselect from links like get-involved.html?support=inuka#pledge
  const pre = new URLSearchParams(location.search).get("support");
  if (pre) {
    const input = form.querySelector(`input[name="${pre === "inuka" ? "inuka" : "ecde"}"]`);
    if (input) input.value = 1;
  }
  recalc();

  const validate = (field) => {
    const input = field.querySelector("input");
    const ok = input.checkValidity();
    field.classList.toggle("has-error", !ok);
    input.setAttribute("aria-invalid", String(!ok));
    return ok;
  };
  form.querySelectorAll(".field[data-validate]").forEach((f) => {
    f.querySelector("input").addEventListener("blur", () => validate(f));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = form.querySelector(".form-status");
    const fields = [...form.querySelectorAll(".field[data-validate]")];
    const bad = fields.filter((f) => !validate(f));
    const total = recalc();
    if (bad.length) {
      status.className = "form-status is-error";
      status.textContent = "Please check the highlighted fields.";
      bad[0].querySelector("input").focus();
      return;
    }
    if (total === 0) {
      status.className = "form-status is-error";
      status.textContent = "Please choose at least one learner to support.";
      form.querySelector('input[name="ecde"]').focus();
      return;
    }
    const d = new FormData(form);
    const engage = d.getAll("engage");
    const body = [
      "Founders' Circle pledge for 2026",
      "",
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Email: ${d.get("email")}`,
      "",
      `ECDE learners (KES 10,000 each): ${d.get("ecde")}`,
      `Learners with disabilities (KES 15,000 each): ${d.get("inuka")}`,
      `Total pledge: ${fmt(total)}`,
      `Payment plan: ${d.get("installments")}`,
      "",
      `Stay engaged: ${engage.length ? engage.join("; ") : "-"}`,
      d.get("message") ? `\nMessage: ${d.get("message")}` : ""
    ].join("\n");
    location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Founders' Circle pledge - " + d.get("name"))}&body=${encodeURIComponent(body)}`;
    status.className = "form-status is-success";
    status.textContent = `Asante sana! Your email app should open with your ${fmt(total)} pledge ready to send. You can pay any time via M-Pesa Paybill ${CONTACT.paybill}, Account ${CONTACT.account}.`;
  });
}

function initNewsletter() {
  document.querySelectorAll("[data-newsletter]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector("input[type=email]");
      if (!email.checkValidity()) { email.focus(); toast("Please enter a valid email address"); return; }
      location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Please add me to Goal4 updates")}&body=${encodeURIComponent("Email: " + email.value)}`;
      toast("Thanks! We'll keep you posted.");
      form.reset();
    });
  });
}

document.documentElement.classList.remove("no-js");
injectSprite();
renderHeader();
renderFooter();
initNav();
initCopy();
initReveal();
initSliders();
initGallery();
initPledge();
initNewsletter();
