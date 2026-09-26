"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-6 md:px-8 bg-[var(--paper-deep)] border-t border-[var(--line)] text-[var(--ink)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[0.68rem] text-[var(--ash)] uppercase tracking-wider">
        <span>© {currentYear} ALVINCENT SANGCO. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}
