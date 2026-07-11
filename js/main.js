(() => {
  const links = Array.from(document.querySelectorAll(".nav a"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setActive = () => {
    const offset = window.scrollY + 120;
    let current = sections[0];

    for (const section of sections) {
      if (section.offsetTop <= offset) current = section;
    }

    links.forEach((link) => {
      const match = current && link.getAttribute("href") === `#${current.id}`;
      link.classList.toggle("active", Boolean(match));
    });
  };

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
})();
