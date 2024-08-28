import HeroSection from "../components/heroSection";
import PublicLayout from "../layouts/public";

function LandingPageComponents() {
  return (
    <>
      <HeroSection />
    </>
  );
}

export default function HomePage() {
  return <PublicLayout children={LandingPageComponents()} />;
}
