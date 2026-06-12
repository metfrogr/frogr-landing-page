import { CheckCircle, Star, MapPin } from "lucide-react";

const features = [
  {
    title: "Post in 3 steps",
    desc: "Add title and photo, pick date and location on the map, and set your budget with Frogr AI price suggestion.",
  },
  {
    title: "Worker accepts nearby",
    desc: "A nearby worker accepts your job. Review their profile before confirming.",
  },
  {
    title: "Confirm your worker",
    desc: "Confirm within minutes to activate the job and get work started.",
  },
  {
    title: "Track live progress",
    desc: "Follow every update: on the way → reached → work started → completed.",
  },
  {
    title: "Pay directly",
    desc: "Pay via Cash or UPI at completion. Rate your worker after payment. No hidden fees shown when you post.",
  },
];

function WorkerCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-black/8 p-5 border border-neutral-100 w-56">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">R</div>
        <div>
          <p className="font-semibold text-neutral-900 text-sm">Rajesh Kumar</p>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-[#FFD02D] text-[#FFD02D]" />
            <span className="text-xs text-neutral-600">4.8 · 127 reviews</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs text-[#22c55e] font-medium mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
        Available
      </div>
      <div className="flex items-center gap-1 text-xs text-neutral-500 mb-4">
        <MapPin className="w-3 h-3" /> Koramangala, 1.2km away
      </div>
      <button className="w-full py-2 rounded-xl bg-[#FFD02D] hover:bg-[#FFC400] text-[#0b0b0b] text-xs font-bold transition-all">
        Confirm Worker
      </button>
    </div>
  );
}

export function ForJobPosters() {
  return (
    <section id="for-employers" className="py-16 md:py-20 lg:py-24 bg-[#FFF6D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFD02D] text-[#0b0b0b] text-xs font-bold uppercase tracking-wider mb-5">
              For Job Posters
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b0b0b] mb-4">
              Trusted help for everyday tasks
            </h2>
            <p className="text-neutral-600 text-lg mb-8">
              Connect with verified workers near you — post, confirm, track, and pay directly.
            </p>
            <ul className="space-y-5">
              {features.map((f, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0b0b0b] text-sm">{f.title} — </span>
                    <span className="text-neutral-600 text-sm">{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-black/10">
                <img
                  src="https://images.unsplash.com/photo-1758876023053-3aa541a0935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Person posting a job on their smartphone at home"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating worker card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8">
                <WorkerCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
