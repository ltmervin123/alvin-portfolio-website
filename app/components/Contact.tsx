"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, LucideIcon } from "lucide-react";

interface ContactItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  colorClass: string;
  external?: boolean;
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    id: "email",
    label: "ELECTRONIC MAIL",
    value: "alvincentsangco@gmail.com",
    href: "mailto:alvincentsangco@gmail.com",
    icon: Mail,
    colorClass: "text-[var(--sun)] border-[var(--sun)]/30 bg-[var(--sun)]/10",
    external: false,
  },
  {
    id: "linkedin",
    label: "PROFESSIONAL NETWORK",
    value: "LINKEDIN // ALVINCENT",
    href: "https://www.linkedin.com/in/alvincent-sangco-8a4085290/",
    icon: Linkedin,
    colorClass: "text-[var(--sun)] border-[var(--sun)]/30 bg-[var(--sun)]/10",
    external: true,
  },
  {
    id: "github",
    label: "SOURCE CODE REPOSITORY",
    value: "GITHUB // LTMERVIN123",
    href: "https://github.com/ltmervin123",
    icon: Github,
    colorClass: "text-[var(--sun)] border-[var(--sun)]/30 bg-[var(--sun)]/10",
    external: true,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ca1d514a-e19b-4f01-b40b-509cd64d8709",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus(null);
        }, 2200);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 md:px-8 border-b border-[var(--line)] bg-[var(--paper)]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 border-b border-[var(--line)] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--sun)] mb-1">
              [ TRANSMISSION 05 // INITIATE CONTACT ]
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[var(--ink)]">
              INITIATE COLLABORATION
            </h2>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[var(--paper-deep)] border border-[var(--line)] p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="hanko-seal text-base px-3 py-2 bg-[var(--paper)]">
              <span>通</span>
              <span>信</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--sun-deep)] block">
                DIRECT INQUIRY
              </span>
              <h3 className="font-display text-2xl text-[var(--ink)] uppercase tracking-wide mt-1">
                SEND A DIRECT DISPATCH
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="ticket-pill cursor-pointer"
          >
            <span>LEAVE A MESSAGE</span>
            <span className="ticket-pill-icon" aria-hidden="true">
              →
            </span>
          </button>
        </motion.div>


        <div className="mt-12 pt-8  grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-[var(--ink)]">
          {CONTACT_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3.5 p-3.5 bg-[var(--paper-soft)] border border-[var(--line)] hover:border-[var(--sun)] transition-all duration-200"
              >
                <div
                  className={`p-2 border rounded-xs flex items-center justify-center transition-colors group-hover:bg-[var(--sun)] group-hover:text-[var(--rice)] group-hover:border-[var(--sun)] ${item.colorClass}`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[0.62rem] text-[var(--ash)] tracking-wider">
                    {item.label}
                  </span>
                  <span className="font-semibold text-xs text-[var(--ink)] truncate group-hover:text-[var(--sun)] transition-colors">
                    {item.value}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>


      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--night)]/70 backdrop-blur-xs flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--paper)] border border-[var(--line)] shadow-2xl max-w-lg w-full p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="flex justify-between items-center pb-4 mb-6 border-b border-[var(--line)]">
                <div>
                  <h3 className="font-display text-2xl text-[var(--ink)] uppercase">
                    SEND A MESSAGE
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center font-mono text-sm text-[var(--ink)] hover:bg-[var(--sun)] hover:text-[var(--rice)] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>


              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block uppercase tracking-wider text-[var(--ink)] mb-1 font-semibold"
                  >
                    YOUR NAME / IDENTIFIER
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3.5 py-2.5 bg-[var(--paper-soft)] border border-[var(--line)] text-[var(--ink)] font-serif text-sm focus:border-[var(--sun)] focus:outline-none transition-colors"
                    placeholder="Jane Doe / Acme Corp"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block uppercase tracking-wider text-[var(--ink)] mb-1 font-semibold"
                  >
                    ELECTRONIC MAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3.5 py-2.5 bg-[var(--paper-soft)] border border-[var(--line)] text-[var(--ink)] font-serif text-sm focus:border-[var(--sun)] focus:outline-none transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block uppercase tracking-wider text-[var(--ink)] mb-1 font-semibold"
                  >
                    MESSAGE / PROJECT BRIEF
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3.5 py-2.5 bg-[var(--paper-soft)] border border-[var(--line)] text-[var(--ink)] font-serif text-sm focus:border-[var(--sun)] focus:outline-none transition-colors resize-none"
                    placeholder="Details about your timeline, role, or system specifications..."
                  />
                </div>


                {submitStatus === "success" && (
                  <div className="p-3.5 bg-emerald-950/10 border border-emerald-600/40 text-emerald-800 font-mono text-xs flex items-center gap-2">
                    <span className="font-bold">✓</span>
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-3.5 bg-rose-950/10 border border-rose-600/40 text-rose-800 font-mono text-xs flex items-center gap-2">
                    <span className="font-bold">✕</span>
                    <span>Something went wrong while sending your message.</span>
                  </div>
                )}


                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ticket-pill w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span>{isSubmitting ? "TRANSMITTING..." : "DISPATCH TRANSMISSION"}</span>
                    <span className="ticket-pill-icon">→</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
