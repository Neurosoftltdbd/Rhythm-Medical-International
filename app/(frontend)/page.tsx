import HeroSection from "@/components/HeroSection";
import MissionVission from "@/components/MissionVission";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-poppins dark:bg-black">
      <HeroSection />
      <MissionVission />
      <Team />
    </div>
  );
}
