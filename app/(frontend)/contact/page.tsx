import AddressComponent from "@/components/contact/AddressComponent";
import ContactForm from "@/components/contact/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Contact Us",
  description:
    "We are committed to excellence in health care, driven by a passion for cardiac care and innovation.",
  openGraph: {
    title: "Contact Us",
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
    title: "Contact Us",
    description:
      "We are committed to excellence in health care, driven by a passion for cardiac care and innovation.",
    images: [
      {
        url: "https://rhythmmedicalinternational.com/logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
};
export default function ContactPage() {
  
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto min-h-screen">
        <PageHeader
          title="Contact Us"
          description="We are committed to excellence in health care, driven by a passion for cardiac care and innovation."
        />
        <div className="flex md:flex-row flex-col gap-24 p-4 md:p-0">
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
          <div className="w-full md:w-1/2">
            <AddressComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
