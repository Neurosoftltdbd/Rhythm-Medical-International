import OurTeamSection from "@/components/home/OurTeamSection";

export const metadata = {
  title: "Our Team",
    alternates: {
    canonical: "/team",
  },
  description: "Rhythm Medical International Team Members",
  openGraph: {
    title: "Our Team",
    description: "Rhythm Medical International Team Members",
    images: [
      {
        url: "/upload/Banner.jpg",
        width: 1200,
        height: 800,
      },
    ],
    siteName: "Rhythm Medical International",
  },
  twitter: {
    title: "Our Team",
    description: "Rhythm Medical International Team Members",
    images: [
      {
        url: "/upload/Banner.jpg",
        width: 1200,
        height: 800,
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
