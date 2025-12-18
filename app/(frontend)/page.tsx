import AchivementSection from "@/components/home/AchivementSection";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import OurTeamSection from "@/components/home/OurTeamSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import VissionSection from "@/components/home/VissionSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-poppins dark:bg-black">
      <HeroSection />
      <MissionSection />
      <VissionSection />
      <OurTeamSection />
      <AchivementSection />
      <TestimonialSection />
    </div>
  );
}
