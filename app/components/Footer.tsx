"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 74;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <footer className="py-14 px-4 sm:px-6 md:px-8 bg-[var(--paper-deep)] border-t border-[var(--line)] text-[var(--ink)]">
      <div className=" mx-auto border-[var(--line)] flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-[0.65rem] text-[var(--ash)] uppercase tracking-wider">
        <span>© {currentYear} ALVINCENT SANGCO. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}
