import { useEffect, useRef } from "react";
import deliveryImg from "../../../imports/categories/delivery.jpg";
import errandsImg from "../../../imports/categories/errands.jpg";
import shoppingImg from "../../../imports/categories/shopping.jpg";
import homeHelpImg from "../../../imports/categories/home-help.jpg";
import movingHelpImg from "../../../imports/categories/moving-help.jpg";
import officeTasksImg from "../../../imports/categories/office-tasks.jpg";
import eventHelpImg from "../../../imports/categories/event-help.jpg";
import petCareImg from "../../../imports/categories/pet-care.jpg";
import personalHelpImg from "../../../imports/categories/personal-help.jpg";

const categories = [
  {
    name: "Delivery",
    desc: "Local parcel, document, and item delivery within your neighbourhood.",
    img: deliveryImg,
  },
  {
    name: "Errands",
    desc: "Quick tasks like picking up items, dropping off packages, or running local errands.",
    img: errandsImg,
  },
  {
    name: "Shopping",
    desc: "Grocery shopping, market runs, and picking up essentials on your behalf.",
    img: shoppingImg,
  },
  {
    name: "Home Help",
    desc: "Cleaning, cooking, repairs, and general household assistance.",
    img: homeHelpImg,
  },
  {
    name: "Moving Help",
    desc: "Packing, loading, unloading, and furniture moving assistance.",
    img: movingHelpImg,
  },
  {
    name: "Office Tasks",
    desc: "Admin, data entry, courier, and general office support tasks.",
    img: officeTasksImg,
  },
  {
    name: "Event Help",
    desc: "Event setup, catering support, crowd management, and cleanup.",
    img: eventHelpImg,
  },
  {
    name: "Pet Care",
    desc: "Dog walking, pet sitting, grooming assistance, and vet trips.",
    img: petCareImg,
  },
  {
    name: "Personal & General Help",
    desc: "Any task that doesn't fit neatly into a category — we've got you covered.",
    img: personalHelpImg,
  },
];

function CategoryCard({ cat }: { cat: typeof categories[0] }) {
  return (
    <div className="flex-none w-64 rounded-2xl overflow-hidden border border-neutral-100 shadow-lg shadow-black/5 bg-white group">
      <div className="h-36 overflow-hidden">
        <img
          src={cat.img}
          alt={cat.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[#0b0b0b] text-sm mb-1">{cat.name}</h3>
        <p className="text-xs text-neutral-500 leading-relaxed">{cat.desc}</p>
      </div>
    </div>
  );
}

export function PopularCategories() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const speed = 0.5; // px per frame

    function animate() {
      if (!pausedRef.current && track) {
        offsetRef.current += speed;
        const half = track.scrollWidth / 2;
        if (offsetRef.current >= half) offsetRef.current = 0;
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    const handlePause = () => { pausedRef.current = true; };
    const handleResume = () => { pausedRef.current = false; };

    track.addEventListener("mouseenter", handlePause);
    track.addEventListener("mouseleave", handleResume);
    track.addEventListener("touchstart", handlePause, { passive: true });
    track.addEventListener("touchend", handleResume);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      track.removeEventListener("mouseenter", handlePause);
      track.removeEventListener("mouseleave", handleResume);
    };
  }, []);

  const doubled = [...categories, ...categories];

  return (
    <section id="categories" className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b0b0b] mb-3">Popular Categories</h2>
          <p className="text-neutral-600 text-lg">
            These are the categories available for you to post or accept jobs.
          </p>
        </div>
      </div>

      {/* Auto-scroll track */}
      <div className="relative overflow-hidden">
        <div ref={trackRef} className="flex gap-5 w-max px-4">
          {doubled.map((cat, i) => (
            <CategoryCard key={i} cat={cat} />
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
