import PageHeader from "@/components/PageHeader";
import { faqList } from "@/data/data";

export const metadata = {
  title: "Frequently Asked Questions (FAQ)",
  alternates: {
    canonical: "/faq",
  },
  description:
    "Find answers to common questions about our services and offerings. We're here to help!",
  openGraph: {
    title: "Frequently Asked Questions (FAQ)",
    description:
      "Find answers to common questions about our services and offerings. We're here to help!",
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
    title: "Frequently Asked Questions (FAQ)",
    description:
      "Find answers to common questions about our services and offerings. We're here to help!",
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

const faqs = faqList.map((f) => ({
  "@type": "Question",
  name: f.question,
  acceptedAnswer: {
    "@type": "Answer",
    text: f.answer,
  },
}));
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://rhythmmedicalint.com/#faqpage",
  url: "https://rhythmmedicalint.com/faq",
  inLanguage: "en-US",
  isPartOf: { "@id": "https://rhythmmedicalint.com/#website" },
  description: "Frequently Asked Questions about Rhythm Medical International",
  mainEntity: faqs,
};
export default function faq() {
  return (
    <div className="w-full bg-green-50">
      <div className="w-full max-w-7xl mx-auto min-h-screen">
        <PageHeader
          title="Frequently Asked Questions (FAQ)"
          description="Find answers to common questions about our services and offerings. We're here to help!"
        />
        <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
          {faqList &&
            faqList.map((faq, index) => {
              return (
                <div
                  key={index}
                  className="mb-4 bg-blue-200 p-8 rounded shadow-lg"
                >
                  <h2 className="text-lg font-bold ">{faq.question}</h2>
                  <p className="mt-2">{faq.answer}</p>
                </div>
              );
            })}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    </div>
  );
}
