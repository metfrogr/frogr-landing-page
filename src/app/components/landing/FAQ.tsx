import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What kind of jobs can be posted on Frogr?",
    a: "Short-term local tasks: delivery, errands, shopping, home help, moving, office tasks, events, pet care, and general help.",
  },
  {
    q: "How does posting a job work?",
    a: "Tap Post a Job and follow 3 simple steps — add a title and photo, pick a date and location on the map, and set your budget with Frogr AI price suggestion. Workers nearby get notified and can accept your job.",
  },
  {
    q: "How do workers get jobs on Frogr?",
    a: "Workers browse a location-based job feed and can filter by category and price. When they find a match, they tap Accept Job. No bidding. The job poster reviews the worker's profile and confirms them to get started.",
  },
  {
    q: "How does payment work?",
    a: "Payment is direct between the job poster and the worker — via Cash or UPI at completion. The transaction is recorded in the app for transparency. No hidden fees are shown at the time of posting.",
  },
  {
    q: "Is there a subscription or long-term contract?",
    a: "No. Frogr is built for flexibility. Post or accept one-time jobs with no subscription, no commitment, and no lock-in.",
  },
  {
    q: "How do you ensure trust and safety?",
    a: "Workers complete a live selfie verification and can optionally link Aadhaar or PAN. After every job, both sides rate each other. Our admin team reviews flagged profiles and jobs, and disputes are handled through our Help & Support system.",
  },
  {
    q: "Why might a job need admin approval?",
    a: "Some jobs go through a quick review by our team to ensure they meet community guidelines. This usually takes just a few minutes, after which you'll be notified and your job will go live.",
  },
  {
    q: "Where is Frogr available?",
    a: "We're launching neighbourhood by neighbourhood to maintain quality. Join the waitlist for your area and we'll notify you when Frogr is live near you.",
  },
  {
    q: "What is the Broker option on the waitlist?",
    a: "The Broker option is for people who manage worker pools and refer them to jobs. Brokers connect available workers with job opportunities in their network.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [allOpen, setAllOpen] = useState(false);

  function toggleAll() {
    setAllOpen((v) => {
      if (!v) setOpenIdx(null);
      return !v;
    });
  }

  function toggle(i: number) {
    if (allOpen) {
      setAllOpen(false);
      setOpenIdx(openIdx === i ? null : i);
    } else {
      setOpenIdx(openIdx === i ? null : i);
    }
  }

  function isOpen(i: number) {
    return allOpen || openIdx === i;
  }

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-24 bg-[#FFD02D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b0b0b]">
              Frequently Asked Questions
            </h2>
          </div>
          <button
            onClick={toggleAll}
            className="text-sm font-semibold text-[#0b0b0b]/60 hover:text-[#0b0b0b] underline underline-offset-4 shrink-0 transition-colors"
          >
            {allOpen ? "Close All" : "Open All"}
          </button>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm">
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                aria-expanded={isOpen(i)}
              >
                <span className="font-semibold text-[#0b0b0b] text-sm leading-relaxed">{faq.q}</span>
                {isOpen(i) ? (
                  <ChevronUp className="w-5 h-5 text-neutral-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                )}
              </button>
              {isOpen(i) && (
                <div className="px-6 pb-5">
                  <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-[#0b0b0b]/70 mb-4">Still have questions? Join our waitlist and connect with the Frogr team.</p>
          <button
            onClick={() => {
              const el = document.querySelector("#formContainer");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#0b0b0b] text-white font-semibold text-sm hover:bg-neutral-800 transition-all hover:scale-105 shadow-lg"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
