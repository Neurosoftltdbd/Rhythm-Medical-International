import AchivementSection from "@/components/AchivementSection";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import OurTeamSection from "@/components/OurTeamSection";
import TestimonialSection from "@/components/TestimonialSection";
import VissionSection from "@/components/VissionSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-poppins dark:bg-black">
      <HeroSection />
      <MissionSection />
      <VissionSection />
      <OurTeamSection />
      <AchivementSection/>
      <TestimonialSection/>
    </div>
  );
}
