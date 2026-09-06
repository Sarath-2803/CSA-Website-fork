export function scrollToSection(sectionId, behavior = "smooth") {
  if (!sectionId || sectionId === "home") {
    window.scrollTo({ top: 0, behavior });
    return true;
  }

  const cleanId = sectionId.replace(/^#/, "").toLowerCase();
  const element = document.getElementById(cleanId);
  if (!element) return false;

  if (cleanId === "about") {
    const isMobile = window.innerWidth <= 768;
    const navbar = document.querySelector(".topbar");
    const navH = navbar ? navbar.offsetHeight : 65;
    const topOffset = isMobile ? element.offsetTop - navH : element.offsetTop;
    window.scrollTo({ top: Math.max(0, topOffset), behavior });
  } else {
    element.scrollIntoView({ behavior, block: "start" });
  }

  return true;
}
