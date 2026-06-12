import { useState } from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { PrivacyTermsModal } from "./PrivacyTermsModal";
import whiteLogoImg from "../../../imports/white-logo.png";

const socials = [
  { icon: Twitter, href: "https://x.com/frogr_in?s=20", label: "X (Twitter)" },
  { icon: Facebook, href: "https://www.facebook.com/metfrogr/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/frogr.in?igsh=Y3l0dnI1MTVjeThz", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/frogr/posts/?feedView=all", label: "LinkedIn" },
];

const links = [
  { label: "For Workers", href: "#for-workers" },
  { label: "Support", href: "#support" },
  { label: "Verification", href: "#trust" },
];

export function Footer() {
  const [modal, setModal] = useState<"privacy" | "terms" | null>(null);

  function scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <footer className="bg-[#0b0b0b] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top section */}
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {/* Brand */}
            <div>
              <img
                src={whiteLogoImg}
                alt="Frogr"
                className="h-10 w-auto object-contain mb-4"
              />
              {/* Badge */}
              <div className="inline-flex flex-wrap gap-2 mb-5">
                {["Verified Profiles", "Direct Payments", "Hyperlocal Matching"].map((b) => (
                  <span key={b} className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-medium">
                    {b}
                  </span>
                ))}
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-md">
                No Boss. No Shift. No Limit. Empowering people to work freely and get things done faster. From daily jobs to local tasks, Frogr connects trusted workers with real opportunities nearby.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8 md:justify-end">
              <div>
                <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-3">Platform</p>
                <ul className="space-y-2">
                  {links.map((l) => (
                    <li key={l.label}>
                      <button
                        onClick={() => scrollTo(l.href)}
                        className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-3">Legal</p>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setModal("privacy")}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setModal("terms")}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      Terms of Service
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              © 2026 Metfrogr Technologies Pvt. Ltd. Made with ❤️ in India
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4 text-white/60" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>

      <PrivacyTermsModal type={modal} onClose={() => setModal(null)} />
    </>
  );
}
