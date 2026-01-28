import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions",
  alternates: {
    canonical: "/terms-conditions",
  },
  description:
    "Welcome to our terms and conditions page where we explain how we collect and use your information.",
  openGraph: {
    title: "Terms and Conditions",
    description:
      "Welcome to our terms and conditions page where we explain how we collect and use your information.",
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
    title: "Terms and Conditions",
    description:
      "Welcome to our terms and conditions page where we explain how we collect and use your information.",
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

export default function terms() {
  return (
    <div className="w-full bg-green-50">
      <div className="w-full max-w-7xl mx-auto min-h-screen">
        <PageHeader
          title="Terms and Conditions Page"
          description="Welcome to our terms and conditions page where we explain how we collect and use your information."
        />
        <div>
          <div className="mb-4">
            <p>
              By accessing or using our services, you agree to be bound by these
              terms and conditions. Please read them carefully.
            </p>
          </div>
          <div className="mb-4  ">
            <h2 className="text-lg font-semibold">Use of Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in
              accordance with these terms.
            </p>
          </div>
          <div className="mb-4  ">
            <h2 className="text-lg font-semibold">Intellectual Property</h2>
            <p>
              All content on this site, including text, graphics, logos, and
              images, is the property of Rhythm Medical International and is
              protected by copyright laws.
            </p>
          </div>
          <div className="mb-4  ">
            <h2 className="text-lg font-semibold">Limitation of Liability</h2>
            <p>
              Rhythm Medical International shall not be liable for any damages
              arising from the use or inability to use our services.
            </p>
          </div>
          <div className="mb-4  ">
            <h2 className="text-lg font-semibold">Changes to Terms</h2>
            <p>
              We may update these terms and conditions from time to time. Any
              changes will be posted on this page.
            </p>
          </div>
          <div className="mb-4  ">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p>
              If you have any questions or concerns about these terms and
              conditions, please contact us at{" "}
              <Link href="mailto:rhythmmedicalint@gmail.com">
                rhythmmedicalint@gmail.com
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
