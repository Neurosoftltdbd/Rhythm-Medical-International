import OurTeamSection from "@/components/home/OurTeamSection";

export const metadata = {
  title: "Our Team",
  description: "Rhythm Medical International Team Members",
  openGraph: {
    title: "Our Team",
    description: "Rhythm Medical International Team Members",
    images: [
      {
        url: "https://rhythmmedicalinternational.com/logo.png",
        width: 800,
        height: 600,
      },
    ],
    siteName: "Rhythm Medical International",
  },
  twitter: {
    title: "Our Team",
    description: "Rhythm Medical International Team Members",
    images: [
      {
        url: "https://rhythmmedicalinternational.com/logo.png",
        width: 800,
        height: 600,
      },
    ],
    card: "summary_large_image",
  },
};
export default function TeamPage() {
  return (
    <div className="w-full bg-green-100">
      <div className="w-full mx-auto min-h-screen">
        <OurTeamSection />
      </div>
    </div>
  );
}
