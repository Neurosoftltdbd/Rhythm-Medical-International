import AboutUsComponent from "@/components/AboutUsComponent";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About Us",
  alternates: {
    canonical: "/about",
  },
  description:
    "We are committed to excellence in health care, driven by a passion for cardiac care and innovation.",
  openGraph: {
    title: "About Us",
    description:
      "We are committed to excellence in health care, driven by a passion for cardiac care and innovation.",
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
    title: "About Us",
    description:
      "We are committed to excellence in health care, driven by a passion for cardiac care and innovation.",
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

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://rhythmmedicalint.com/#aboutpage",
  url: "https://rhythmmedicalint.com/about",
  inLanguage: "en-US",
  isPartOf: { "@id": "https://rhythmmedicalint.com/#website" },
  description: `Rhythm Medical International is a leading provider of
        innovative cardiac solutions, specializing in high-quality coronary
        stents, wires, and a wide range of heart-related medical devices. Based
        in Chattogram, we are proud to be the region's leading provider of
        advanced cardiac products, including coronary stents, wires, and a
        comprehensive range of heart-related medical devices. Rhythm Medical
        works with Elixir Medical Corporation USA, offering the DesyneX2
        coronary stents, and Asahi Intecc Products, including PTCA Guide Wires
        and Guiding Catheters and others Cath lab accessories.`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    </div>
  );
}
