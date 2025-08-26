import Header from "../components/header";
import Hero from "../components/hero";
import StatsSection from "../components/stats-section";
import FeaturedServices from "../components/featured-services";
import HowItWorks from "../components/how-it-works";
import Footer from "../components/footer";
import { useSEO } from "../hooks/use-seo";

export default function Home() {
  useSEO({
    title: "Find Local Home Service Professionals | Plumbers, Electricians, HVAC | Homejobspro.com",
    description: "Connect with verified local home service professionals. Find trusted plumbers, electricians, HVAC technicians, and more in your area. Read reviews, compare prices, and book services today.",
    keywords: "home services near me, local plumber, electrician near me, HVAC technician, home repair services, emergency plumbing, electrical repair, heating cooling repair, verified professionals",
    canonical: "https://homejobspro.com",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Homejobspro.com",
      "url": "https://homejobspro.com",
      "logo": "https://homejobspro.com/logo.png",
      "description": "Connect with verified local home service professionals. Find trusted plumbers, electricians, HVAC technicians, and more in your area.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://facebook.com/homejobspro",
        "https://twitter.com/homejobspro"
      ]
    }
  });

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
