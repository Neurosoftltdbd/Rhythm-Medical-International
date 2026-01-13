import PageHeader from "@/components/PageHeader";
import { faqList } from "@/data/data";

export const metadata = {
  title: "Frequently Asked Questions (FAQ)",
  description:
    "Find answers to common questions about our services and offerings. We're here to help!",
  openGraph: {
    title: "Frequently Asked Questions (FAQ)",
    description:
      "Find answers to common questions about our services and offerings. We're here to help!",
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
    title: "Frequently Asked Questions (FAQ)",
    description:
      "Find answers to common questions about our services and offerings. We're here to help!",
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
    </div>
  );
}
