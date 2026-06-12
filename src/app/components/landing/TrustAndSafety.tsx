import { ShieldCheck, Star, Eye, MapPin } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Identity verification",
    desc: "Workers complete live selfie verification and can optionally link Aadhaar or PAN for additional trust.",
    color: "text-[#22c55e]",
    bg: "bg-[#22c55e]/10",
  },
  {
    icon: Star,
    title: "Ratings & reviews",
    desc: "After every job, both workers and posters rate each other. Transparent track records build accountability.",
    color: "text-[#FFD02D]",
    bg: "bg-[#FFD02D]/10",
  },
  {
    icon: Eye,
    title: "Admin moderation",
    desc: "Our team reviews flagged jobs and profiles. Some posts go through a quick review before going live.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: MapPin,
    title: "Expanding service areas",
    desc: "We grow neighbourhood by neighbourhood — ensuring quality before scale in every new area.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

export function TrustAndSafety() {
  return (
    <section id="trust" className="py-16 md:py-20 lg:py-24 bg-[#FFF6D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b0b0b] mb-3">
            Verified workers. Transparent jobs.
          </h2>
          <p className="text-neutral-600 text-lg max-w-xl mx-auto">
            Your safety matters. We combine verification, ratings, and moderation to build trust over time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-lg hover:shadow-black/5 transition-shadow">
                <div className={`w-12 h-12 rounded-2xl ${card.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${card.color}`} />
                </div>
                <h3 className="font-bold text-[#0b0b0b] mb-2">{card.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
