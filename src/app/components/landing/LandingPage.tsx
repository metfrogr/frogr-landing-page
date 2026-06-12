import { Header } from "./Header";
import { HeroWaitlist } from "./HeroWaitlist";
import { WhatsAppCommunity } from "./WhatsAppCommunity";
import { ForJobPosters } from "./ForJobPosters";
import { ForWorkers } from "./ForWorkers";
import { HowItWorks } from "./HowItWorks";
import { PopularCategories } from "./PopularCategories";
import { PlatformFeatures } from "./PlatformFeatures";
import { LiveJobTracking } from "./LiveJobTracking";
import { TrustAndSafety } from "./TrustAndSafety";
import { DisputeSupport } from "./DisputeSupport";
import { BrandManifesto } from "./BrandManifesto";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
      <Header />
      <main>
        <HeroWaitlist />
        <WhatsAppCommunity />
        <ForJobPosters />
        <ForWorkers />
        <HowItWorks />
        <PopularCategories />
        <PlatformFeatures />
        <LiveJobTracking />
        <TrustAndSafety />
        <DisputeSupport />
        <BrandManifesto />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
