import AchivementSection from "@/components/home/AchivementSection";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import OurTeamSection from "@/components/home/OurTeamSection";
import PartnerSection from "@/components/home/PartnerSection";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import VissionSection from "@/components/home/VissionSection";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://rhythmmedicalint.com/#website",
  url: "https://rhythmmedicalint.com",
  name: "Rhythm Medical International",
  description:
    "Leading the Future of Medical Technology and Healthcare Solutions in Bangladesh. Contact us today to learn more about our services and how we can help you.",
  publisher: {
    "@type": "Organization",
    "@id": "https://rhythmmedicalint.com/#organization",
    name: "Rhythm Medical International",
    url: "https://rhythmmedicalint.com",
    logo: "https://rhythmmedicalint.com/logo.png",
    sameAs: [
      "https://www.facebook.com/rhythmmedicalinternational",
      "https://www.twitter.com/rhythmmedical",
      "https://www.linkedin.com/company/rhythm-medical-international",
      "https://www.instagram.com/rhythmmedicalinternational",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+880 1829-938427",
        contactType: "Customer Service",
        areaServed: "BD",
        availableLanguage: ["English"],
      },
    ],
    description:
      "Leading the Future of Medical Technology and Healthcare Solutions in Bangladesh. Contact us today to learn more about our services and how we can help you.",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://rhythmmedicalint.com/#homepage",
    url: "https://rhythmmedicalint.com/",
    name: "Home",
    isPartOf: { "@id": "https://rhythmmedicalint.com/#website" },
    breadcrumb: { "@id": "https://rhythmmedicalint.com/#breadcrumb" },
    inLanguage: "en-US",
    description:
      "Leading the Future of Medical Technology and Healthcare Solutions in Bangladesh. Contact us today to learn more about our services and how we can help you.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-poppins dark:bg-black">
      <HeroSection />
      <MissionSection />
      <VissionSection />
      <OurTeamSection />
      <ServiceSection />
      <AchivementSection />
      <PartnerSection />
      <TestimonialSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    </div>
  );
}
