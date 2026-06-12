import { Bell, DollarSign, Clock } from "lucide-react";

const bullets = [
  { icon: Bell, text: "Get notified of nearby jobs the moment they're posted." },
  { icon: DollarSign, text: "No hidden fees at post time — what you see is what you pay." },
  { icon: Clock, text: "Work when you want. Post when you need. No subscriptions, no lock-ins." },
];

export function BrandManifesto() {
  return (
    <section id="manifesto" className="py-16 md:py-20 lg:py-24 bg-[#0b0b0b] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFD02D 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#FFD02D]/30 bg-[#FFD02D]/10 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FFD02D]">
              No Boss. No Shift. No Limit.
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Take control of your time.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FFD02D, #22c55e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Earn what you deserve.
            </span>
          </h2>

          <p className="text-neutral-400 text-lg mb-10">
            Work on your terms — whether you're posting a job or accepting one nearby.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {bullets.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#FFD02D]/20 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[#FFD02D]" />
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
