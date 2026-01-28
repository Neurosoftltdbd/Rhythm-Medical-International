import AddressComponent from "@/components/contact/AddressComponent";
import ContactForm from "@/components/contact/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Contact Us",
  alternates: {
    canonical: "/contact",
  },
  description:
    "We are committed to excellence in health care, driven by a passion for cardiac care and innovation. Contact us today to learn more about our services and how we can help you.",
  openGraph: {
    title: "Contact Us",
    description:
      "We are committed to excellence in health care, driven by a passion for cardiac care and innovation. Contact us today to learn more about our services and how we can help you.",
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
    title: "Contact Us",
    description:
      "We are committed to excellence in health care, driven by a passion for cardiac care and innovation. Contact us today to learn more about our services and how we can help you.",
    images: [
      {
        url: "/upload/Banner.jpg",
        width: 1200,
        height: 800,
      },
    ],
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://rhythmmedicalint.com/#contactpage",
  url: "https://rhythmmedicalint.com/contact",
  inLanguage: "en-US",
  isPartOf: { "@id": "https://rhythmmedicalint.com/#website" },
  description:
    "Leading the Future of Medical Technology and Healthcare Solutions in Bangladesh. Contact us today to learn more about our services and how we can help you.",
};
export default function ContactPage() {
  return (
    <div className="w-full bg-blue-50">
      <div className="w-full max-w-7xl mx-auto min-h-screen">
        <PageHeader
          title="Contact Us"
          description="We are committed to excellence in health care, driven by a passion for cardiac care and innovation."
        />
        <div className="flex md:flex-row flex-col gap-24 p-4 md:p-0">
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <AddressComponent />
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    </div>
  );
}
