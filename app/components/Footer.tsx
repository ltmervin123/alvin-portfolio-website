"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-6 md:px-8 bg-[var(--paper-deep)] border-t border-[var(--line)] text-[var(--ink)]">
      <div className="max-w-7xl mx-auto  font-mono text-[0.68rem] text-[var(--ash)] uppercase tracking-wider">
        <p className="text-center">
          © {currentYear} ALVINCENT SANGCO. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
