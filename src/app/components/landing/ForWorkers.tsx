import { CheckCircle, TrendingUp, Star, Briefcase } from "lucide-react";

const features = [
  {
    title: "See jobs near you",
    desc: "Location-based job feed with category and price filters.",
  },
  {
    title: "Accept instantly",
    desc: "Tap Accept Job. No bidding. The job poster confirms you to get started.",
  },
  {
    title: "Complete with proof",
    desc: "Update your status: on the way, reached, started, and done. Add optional completion photos.",
  },
  {
    title: "Get paid directly",
    desc: "Receive Cash or UPI from the job poster. Confirm payment received in the app.",
  },
  {
    title: "Build your reputation",
    desc: "Ratings and a verified profile (live selfie + optional Aadhaar/PAN) help you win more jobs.",
  },
];

function StatsCard() {
  return (
    <div className="bg-[#0b0b0b] rounded-2xl p-5 text-white shadow-2xl w-56">
      <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Today's stats</p>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#FFD02D]/20 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-[#FFD02D]" />
          </div>
          <div>
            <p className="text-lg font-bold">₹1,250</p>
            <p className="text-xs text-white/40">Avg. Daily</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#22c55e]/20 flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-[#22c55e]" />
          </div>
          <div>
            <p className="text-lg font-bold">127</p>
            <p className="text-xs text-white/40">Jobs Today</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-400/20 flex items-center justify-center">
            <Star className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <p className="text-lg font-bold">4.8★</p>
            <p className="text-xs text-white/40">Avg. Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ForWorkers() {
  return (
    <section id="for-workers" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-sm">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-black/10">
                <img
                  src="https://images.unsplash.com/photo-1697305592218-d5d0c1bab2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Confident gig worker in urban India"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-4 md:-left-8">
                <StatsCard />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#22c55e]/15 text-[#22c55e] text-xs font-bold uppercase tracking-wider mb-5">
              For Workers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b0b0b] mb-4">
              Earn on your schedule
            </h2>
            <p className="text-neutral-600 text-lg mb-8">
              Browse hyperlocal gigs and accept jobs that fit your skills and timing.
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
        </div>
      </div>
    </section>
  );
}
