import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";

const timeline = [
  { label: "Open", desc: "Job posted and awaiting a worker" },
  { label: "Reserved", desc: "Worker has accepted, poster reviewing" },
  { label: "Active", desc: "Worker confirmed, job is live" },
  { label: "On the way", desc: "Worker is travelling to the location" },
  { label: "Reached", desc: "Worker has arrived at the location" },
  { label: "Work started", desc: "Job work is underway" },
  { label: "Completed", desc: "Work done — time to pay and rate" },
];

export function LiveJobTracking() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateActiveStep = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (sectionRect.bottom < 0 || sectionRect.top > viewportHeight) {
        return;
      }

      const triggerY = viewportHeight * 0.45;
      let nextActive = 0;

      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const { top } = el.getBoundingClientRect();
        if (top <= triggerY) {
          nextActive = i;
        }
      });

      setActiveIndex(nextActive);
    };

    updateActiveStep();
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);

    return () => {
      window.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, []);

  return (
    <section ref={sectionRef} id="live-tracking" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b0b0b] mb-3">
            Track every step in real time
          </h2>
          <p className="text-neutral-600 text-lg">
            From open job to completed work — both sides stay in sync.
          </p>
        </div>

        {/* Timeline — mobile: left rail with numbers; desktop: alternating center line */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[1.125rem] top-0 bottom-0 w-px bg-neutral-200 sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-4 sm:space-y-6">
            {timeline.map((step, i) => {
              const isActive = i === activeIndex;

              return (
                <div
                  key={step.label}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className={`relative flex items-start gap-3 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  {/* Mobile step number */}
                  <div
                    className={`flex sm:hidden shrink-0 w-9 h-9 rounded-full border-2 items-center justify-center z-10 shadow-md transition-colors duration-500 ${
                      isActive
                        ? "bg-[#FFD02D] border-[#FFD02D]"
                        : "bg-white border-[#FFD02D]"
                    }`}
                  >
                    <span className="text-xs font-bold text-[#0b0b0b]">{i + 1}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 min-w-0 sm:w-[calc(50%-2.5rem)] sm:flex-none ${
                      i % 2 === 0 ? "sm:text-right sm:pr-6" : "sm:text-left sm:pl-6 sm:ml-auto"
                    }`}
                  >
                    <div
                      className={`w-full sm:w-auto sm:inline-block rounded-2xl px-5 py-4 border shadow-sm transition-colors duration-500 ${
                        isActive
                          ? "bg-[#FFD02D] border-[#FFD02D] shadow-[#FFD02D]/20"
                          : "bg-white border-neutral-100"
                      }`}
                    >
                      <p className={`font-bold text-sm mb-0.5 ${isActive ? "text-[#0b0b0b]" : "text-neutral-800"}`}>
                        {step.label}
                      </p>
                      <p className={`text-xs ${isActive ? "text-[#0b0b0b]/70" : "text-neutral-500"}`}>{step.desc}</p>
                    </div>
                  </div>

                  {/* Desktop step number */}
                  <div
                    className={`hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 items-center justify-center z-10 shadow-md transition-colors duration-500 ${
                      isActive
                        ? "bg-[#FFD02D] border-[#FFD02D]"
                        : "bg-white border-[#FFD02D]"
                    }`}
                  >
                    <span className="text-xs font-bold text-[#0b0b0b]">{i + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Callout */}
        <div className="mt-12 max-w-2xl mx-auto bg-[#FFF6D6] border border-[#FFD02D]/30 rounded-2xl p-5 flex gap-3">
          <TrendingUp className="w-5 h-5 text-[#FFD02D] shrink-0 mt-0.5" />
          <p className="text-sm text-neutral-700 leading-relaxed">
            <span className="font-semibold">Need faster uptake?</span> Job posters can increase the price by ₹50, ₹100, or ₹200 if a job isn't accepted quickly.
          </p>
        </div>
      </div>
    </section>
  );
}
