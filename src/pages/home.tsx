import CtaForDevs from "../components/ctaForDevs";
import OurFocus from "../components/focus";
import HeroSection from "../components/heroSection";
import WhoWeAre from "../components/whoWeAre";
import PublicLayout from "../layouts/public";

function LandingPageComponents() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <OurFocus />
      <CtaForDevs />
    </>
  );
}

export default function HomePage() {
  return <PublicLayout children={LandingPageComponents()} />;
}
