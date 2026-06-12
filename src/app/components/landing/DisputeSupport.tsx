import { MessageCircle, Mail, AlertCircle, Clock, FileText, RefreshCcw, Headphones } from "lucide-react";

const points = [
  { icon: AlertCircle, text: "Raise a dispute from within the app on any active or completed job." },
  { icon: Clock, text: "Our support team reviews all disputes promptly and fairly." },
  { icon: FileText, text: "Both parties can share evidence — photos, chat history, and job details." },
  { icon: RefreshCcw, text: "Resolution is communicated to both sides with a clear explanation." },
  { icon: Headphones, text: "For urgent issues, reach us directly via WhatsApp or email." },
];

export function DisputeSupport() {
  return (
    <section id="support" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b0b0b] mb-3">
              Dispute & Support
            </h2>
            <p className="text-neutral-600 text-lg mb-8">Help when something goes wrong</p>

            <ul className="space-y-4 mb-8">
              {points.map((p, i) => {
                const Icon = p.icon;
                return (
                  <li key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FFD02D]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#FFD02D]" />
                    </div>
                    <p className="text-neutral-700 text-sm leading-relaxed">{p.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: Contact */}
          <div className="space-y-4">
            <a
              href="https://wa.me/918217689905"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-100 hover:border-[#25D366]/30 hover:shadow-lg hover:shadow-black/5 transition-all group bg-white"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <p className="font-semibold text-[#0b0b0b] text-sm">WhatsApp Support</p>
                <p className="text-neutral-500 text-sm">+91 82176 89905</p>
              </div>
            </a>

            <a
              href="mailto:support@frogr.in"
              className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-100 hover:border-[#FFD02D]/30 hover:shadow-lg hover:shadow-black/5 transition-all group bg-white"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FFD02D]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFD02D]/20 transition-colors">
                <Mail className="w-6 h-6 text-[#FFD02D]" />
              </div>
              <div>
                <p className="font-semibold text-[#0b0b0b] text-sm">Email Support</p>
                <p className="text-neutral-500 text-sm">metfrogr@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
