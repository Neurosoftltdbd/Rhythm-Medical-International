import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Latest Blog",
  alternates: {
    canonical: "/blog",
  },
  description:
    "Welcome to our blog page where we share the latest updates and insights.",
  openGraph: {
    title: "Latest Blog",
    description:
      "Welcome to our blog page where we share the latest updates and insights.",
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
    title: "Latest Blog",
    description:
      "Welcome to our blog page where we share the latest updates and insights.",
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

export default function blog() {
  return (
    <div className="w-full bg-green-50">
      <div className="w-full max-w-7xl mx-auto min-h-screen">
        <PageHeader
          title="Blog Page"
          description="Welcome to our blog page where we share the latest updates and insights."
        />
        <div></div>
      </div>
    </div>
  );
}
