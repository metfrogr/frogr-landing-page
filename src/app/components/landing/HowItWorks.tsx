import { useState } from "react";
import { Phone, Briefcase, UserCheck, CheckCircle, CreditCard, User, MapPin, Zap, Star } from "lucide-react";

const posterSteps = [
  { icon: Phone, title: "Sign up with phone", desc: "Create your account in seconds using your mobile number." },
  { icon: Briefcase, title: "Post your job", desc: "Add title and photo, pick date and location, set your budget with AI price suggestion." },
  { icon: UserCheck, title: "Worker accepts", desc: "A nearby worker accepts your job. Review their profile before confirming." },
  { icon: CheckCircle, title: "Confirm your worker", desc: "Confirm within minutes to activate the job and get work started." },
  { icon: CreditCard, title: "Track, pay, rate", desc: "Follow live updates, pay via Cash or UPI at completion, then rate your worker." },
];

const workerSteps = [
  { icon: User, title: "Sign up & set up profile", desc: "Create your account, complete live selfie verification, and add your skills." },
  { icon: MapPin, title: "Browse nearby jobs", desc: "See a location-based feed of jobs near you with category and price filters." },
  { icon: Zap, title: "Accept a job", desc: "Tap Accept Job. No bidding. The job poster confirms you to get started." },
  { icon: Briefcase, title: "Do the work", desc: "Update your status as you go — on the way, reached, started, done. Add completion photos." },
  { icon: Star, title: "Confirm payment & rate", desc: "Receive Cash or UPI from the job poster. Confirm payment and leave a rating." },
];

export function HowItWorks() {
  const [active, setActive] = useState<"poster" | "worker">("poster");
  const steps = active === "poster" ? posterSteps : workerSteps;

  return (
    <section id="how-it-works" className="py-16 md:py-20 lg:py-24 bg-[#FFF6D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b0b0b] mb-3">How it works</h2>
          <p className="text-neutral-600 text-lg">Two paths, one platform</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-sm border border-neutral-100">
            {(["poster", "worker"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  active === tab
                    ? "bg-[#FFD02D] text-[#0b0b0b] shadow-md shadow-[#FFD02D]/20"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                {tab === "poster" ? "For Job Posters" : "For Workers"}
              </button>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-neutral-200 mx-16" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center relative">
                  {/* Number + Icon */}
                  <div className="relative mb-5 z-10">
                    <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#FFD02D] shadow-lg shadow-[#FFD02D]/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#0b0b0b]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#FFD02D] text-[#0b0b0b] text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-[#0b0b0b] mb-1.5">{step.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
