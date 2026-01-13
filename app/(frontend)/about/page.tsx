import AboutUsComponent from "@/components/AboutUsComponent";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About Us",
  description:
    "We are committed to excellence in health care, driven by a passion for cardiac care and innovation.",
  openGraph: {
    title: "About Us",
    description:
      "We are committed to excellence in health care, driven by a passion for cardiac care and innovation.",
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
    title: "About Us",
    description:
      "We are committed to excellence in health care, driven by a passion for cardiac care and innovation.",
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

export default function AboutPage() {
  return (
    <div className="w-full bg-green-50">
      <div className="w-full max-w-7xl mx-auto min-h-screen">
        <PageHeader
          title="About Us"
          description="We are committed to excellence in health care, driven by a passion
            for cardiac care and innovation."
        />
        <AboutUsComponent />
      </div>
    </div>
  );
}
