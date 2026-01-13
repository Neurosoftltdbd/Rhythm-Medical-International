import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Carefully review our privacy policy to understand how we handle your information.",
  openGraph: {
    title: "Privacy Policy",
    description:
      "Carefully review our privacy policy to understand how we handle your information.",
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
    title: "Privacy Policy",
    description:
      "Carefully review our privacy policy to understand how we handle your information.",
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
export default function privacyPolicy() {
  return (
    <div className="w-full bg-green-50">
      <div className="w-full max-w-7xl mx-auto min-h-screen">
        <PageHeader
          title="Privacy Policy Page"
          description="Welcome to our privacy policy page where we explain how we collect and use your information."
        />
        <div>
          <div className="mb-4">
            <p>
              We take your privacy seriously and are committed to protecting
              your personal information. This privacy policy outlines how we
              collect, use, and disclose your information.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email
              address, and phone number.
            </p>
          </div>
          <div className="mb-4  ">
            <h2 className="text-lg font-semibold">
              How We Use Your Information
            </h2>
            <p>
              We use the collected information for various purposes, including
              to process your orders, provide customer support, and improve our
              services.
            </p>
          </div>
          <div className="mb-4  ">
            <h2 className="text-lg font-semibold">Information Sharing</h2>
            <p>
              We do not share your personal information with third parties,
              except as required by law.
            </p>
          </div>
          <div className="mb-4 not-[]:">
            <h2 className="text-lg font-semibold">Children&#39;s Privacy</h2>
            <p>
              Our services are not intended for children under the age of 13. We
              do not knowingly collect personal information from children.
            </p>
          </div>
          <div className="mb-4  ">
            <h2 className="text-lg font-semibold">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes
              will be posted on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
