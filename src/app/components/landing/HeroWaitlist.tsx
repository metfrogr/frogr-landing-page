import { Shield, Zap, MapPin, Star, CheckCircle } from "lucide-react";
import { useWaitlistForm, type UserType } from "./hooks/useWaitlistForm";

const roleOptions: { label: string; value: UserType }[] = [
  { label: "Job Provider", value: "Employer" },
  { label: "Job Taker", value: "Tasker" },
  { label: "Broker", value: "Broker" },
];

function FloatingJobCard() {
  return (
    <div
      className="bg-white rounded-2xl shadow-2xl p-3.5 w-52 border border-neutral-100 pointer-events-none"
      style={{ animation: "floatCard 6s ease-in-out infinite" }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Home Help</span>
        <span className="text-xs font-bold text-[#22c55e] bg-green-50 px-2 py-0.5 rounded-full">Open</span>
      </div>
      <p className="text-sm font-semibold text-neutral-900 leading-tight mb-1.5">Deep clean, 2BHK flat</p>
      <div className="flex items-center gap-1 text-xs text-neutral-400 mb-2.5">
        <MapPin className="w-3 h-3" /> Koramangala, Bangalore
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-neutral-900 text-sm">₹500</span>
        <button className="px-3 py-1 rounded-full bg-[#FFD02D] text-[#0b0b0b] text-xs font-bold">
          Accept Job
        </button>
      </div>
    </div>
  );
}

function FloatingWorkerCard() {
  return (
    <div
      className="bg-[#0b0b0b] rounded-2xl shadow-2xl p-3 w-44 border border-white/10 pointer-events-none"
      style={{ animation: "floatCard 8s ease-in-out infinite 1.5s" }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
          R
        </div>
        <div>
          <p className="text-xs font-semibold text-white">Rajesh K.</p>
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-[#FFD02D] text-[#FFD02D]" />
            <span className="text-xs text-white/50">4.8 · 127 jobs</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-[#22c55e] font-medium">
        <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
        On the way
      </div>
    </div>
  );
}

function WaitlistCard() {
  const {
    userType, setUserType, phone, handlePhoneChange, handlePhoneKeyDown, handlePhonePaste,
    phoneError, formState, isLoading, errorMessage, countdown, handleSubmit, resetForm,
  } = useWaitlistForm();

  return (
    <div
      id="formContainer"
      className="relative w-full rounded-3xl p-6 md:p-8 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        backdropFilter: "blur(24px)",
      }}
    >
      {/* Subtle inner top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {formState === "success" && (
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-[#22c55e]/20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-[#22c55e]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Thanks! We'll be in touch!</h3>
          <p className="text-white/50 text-sm mb-6">
            You're on the list. We'll notify you when Frogr launches near you.
          </p>
          <button onClick={resetForm} className="text-[#FFD02D] text-sm font-medium hover:underline">
            ← Back ({countdown}s)
          </button>
        </div>
      )}

      {formState === "error" && (
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Something went wrong</h3>
          <p className="text-red-300 text-sm mb-6">{errorMessage}</p>
          <button onClick={resetForm} className="text-[#FFD02D] text-sm font-medium hover:underline">
            ← Back
          </button>
        </div>
      )}

      {formState === "form" && (
        <form onSubmit={handleSubmit} noValidate>
          <h3 className="text-lg font-bold text-white mb-1">Enter your details</h3>
          <p className="text-white/40 text-sm mb-6">Be among the first to get access.</p>

          {/* Role selector */}
          <div className="mb-5">
            <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-2.5">I am a</p>
            <div className="flex gap-2 p-1 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {roleOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setUserType(opt.value)}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
                    userType === opt.value
                      ? "bg-[#FFD02D] text-[#0b0b0b] shadow-lg shadow-[#FFD02D]/20"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="mb-5">
            <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-2.5">Mobile Number</p>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm font-medium select-none">+91</span>
              <div className="absolute left-12 top-1/2 -translate-y-1/2 w-px h-4 bg-white/10" />
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                required
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                onKeyDown={handlePhoneKeyDown}
                onPaste={handlePhonePaste}
                placeholder="10-digit number"
                className={`w-full pl-16 pr-4 py-3.5 rounded-2xl text-white placeholder-white/20 text-sm focus:outline-none transition-all ${
                  phoneError
                    ? "border-red-400/60 focus:border-red-400"
                    : "focus:border-[#FFD02D]/40"
                }`}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid ${phoneError ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.1)"}`,
                }}
              />
            </div>
            {phoneError && <p className="mt-1.5 text-xs text-red-400">{phoneError}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-2xl bg-[#FFD02D] hover:bg-[#FFC400] text-[#0b0b0b] font-bold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-[#FFD02D]/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isLoading ? "Please wait..." : "Join Waitlist →"}
          </button>

          <p className="text-center text-[11px] text-white/20 mt-3">No spam. Just launch updates.</p>
        </form>
      )}
    </div>
  );
}

export function HeroWaitlist() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ─── Background ─── */}
      <div className="absolute inset-0" style={{ background: "#080808" }} />

      {/* Single warm top-right glow — clean, not blobby */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-5%",
          width: "55%",
          height: "70%",
          background: "radial-gradient(ellipse at center, rgba(255,208,45,0.14) 0%, rgba(255,208,45,0.04) 45%, transparent 70%)",
        }}
      />

      {/* Subtle bottom-left accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-5%",
          left: "-5%",
          width: "35%",
          height: "50%",
          background: "radial-gradient(ellipse at center, rgba(34,197,94,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Fine grid overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ─── Content ─── */}
      <div className="relative z-10 flex-1 flex items-center pt-20 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-[1fr_440px] gap-10 lg:gap-16 items-center">

            {/* ── Left: Copy (no floating cards here) ── */}
            <div style={{ animation: "heroFadeUp 0.7s ease-out both" }}>
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7" style={{ background: "rgba(255,208,45,0.12)", border: "1px solid rgba(255,208,45,0.25)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFD02D]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FFD02D]">
                  No Boss. No Shift. No Limit.
                </span>
              </div>

              {/* H1 */}
              <h1
                className="text-white mb-5 tracking-tight leading-[1.0]"
                style={{ fontSize: "clamp(2.6rem, 6.5vw, 5rem)", fontWeight: 800 }}
              >
                India's{" "}
                <br className="sm:hidden" />
                <span
                  style={{
                    background: "linear-gradient(135deg, #FFD02D 0%, #fbbf24 50%, #FFD02D 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  hyperlocal
                </span>
                <br />
                gig platform
              </h1>

              {/* Sub */}
              <p className="text-white/50 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
                Post local jobs. Accept nearby work.{" "}
                <span className="text-white/70">Get it done — fast.</span>
              </p>

              {/* Trust row */}
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {[
                  { icon: Shield, label: "Verified profiles", color: "text-[#FFD02D]" },
                  { icon: Zap, label: "Instant matching", color: "text-[#22c55e]" },
                  { icon: MapPin, label: "Bengaluru", color: "text-[#FFD02D]" },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${color}`} />
                    <span className="text-white/40 text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Waitlist card + floating UI cards ── */}
            <div
              className="relative"
              style={{ animation: "heroFadeUp 0.7s ease-out 0.15s both" }}
            >
              <WaitlistCard />
            </div>
          </div>
        </div>
      </div>


      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
