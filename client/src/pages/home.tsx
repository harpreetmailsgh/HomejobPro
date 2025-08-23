import Header from "../components/header";
import Hero from "../components/hero";
import StatsSection from "../components/stats-section";
import FeaturedServices from "../components/featured-services";
import HowItWorks from "../components/how-it-works";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <StatsSection />
      <FeaturedServices />
      <HowItWorks />
      <Footer />
    </div>
  );
}
