import { MapPin, Sparkles, Bell, MessageSquare, Globe, Monitor } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Hyperlocal matching",
    desc: "Jobs and workers are matched within your neighbourhood — fast, relevant, nearby.",
    color: "text-[#FFD02D]",
    bg: "bg-[#FFD02D]/10",
  },
  {
    icon: Sparkles,
    title: "Frogr AI pricing",
    desc: "Get a smart budget suggestion based on job type, location, and market data.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Bell,
    title: "Real-time updates",
    desc: "Both parties stay in sync at every stage — open, reserved, active, and completed.",
    color: "text-[#22c55e]",
    bg: "bg-[#22c55e]/10",
  },
  {
    icon: MessageSquare,
    title: "Live job chat",
    desc: "Communicate directly with the job poster or worker within the platform.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Globe,
    title: "Multilingual",
    desc: "Available in English, Hindi, Kannada, and Tamil — more languages coming.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Monitor,
    title: "Works in your browser",
    desc: "No app download needed. Start posting or accepting jobs from any device, right now.",
    color: "text-[#FFD02D]",
    bg: "bg-[#FFD02D]/10",
  },
];

export function PlatformFeatures() {
  return (
    <section id="platform-features" className="py-16 md:py-20 lg:py-24 bg-[#FFF6D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b0b0b] mb-3">
            Built for hyperlocal work
          </h2>
          <p className="text-neutral-600 text-lg max-w-xl mx-auto">
            Everything you need to post, accept, and complete local jobs — in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-lg hover:shadow-black/5 transition-shadow"
              >
                <div className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="font-bold text-[#0b0b0b] mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
