import ServiceSection from "@/components/home/ServiceSection";

export const metadata = {
  title: "Our Services",
  description:
    "Explore the Medical Services Offered by Rhythm Medical International",
  keywords: [
    "Rhythm Medical International Services",
    "Medical Services",
    "Pacemaker Implantation",
    "Coronary Stents",
    "Wires",
    "Heart Devices",
    "Medical Equipment",
  ],
  authors: [
    { name: "Rhythm Medical International", url: "https://rhythmmedical.com" },
  ],
  robots: "index, follow",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Rhythm Medical International",
  },
  openGraph: {
    title: "Our Services",
    description:
      "Explore the Medical Services Offered by Rhythm Medical International",
    url: "https://rhythmmedical.com/services",
    siteName: "Rhythm Medical International",
    images: [
      {
        url: "https://rhythmmedical.com/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services",
    description:
      "Explore the Medical Services Offered by Rhythm Medical International",
  },
};

export const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://rhythmmedicalint.com/#organization",
      name: "Rhythm Medical International",
      url: "https://rhythmmedicalint.com",
      logo: "https://rhythmmedicalint.com/logo.png",
      sameAs: [
        "https://www.facebook.com/rhythmmedicalinternational",
        "https://www.twitter.com/rhythmmedical",
        "https://www.linkedin.com/company/rhythm-medical-international",
        "https://www.instagram.com/rhythmmedicalinternational",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+880 1829-938427",
          contactType: "customer service",
          areaServed: "BD",
          availableLanguage: ["English"],
        },
      ],
      description:
        "Leading the Future of Medical Technology and Healthcare Solutions",
    },
    {
      "@type": "WebSite",
      "@id": "https://rhythmmedicalint.com/#website",
      url: "https://rhythmmedicalint.com",
      name: "Rhythm Medical International",
      publisher: { "@id": "https://rhythmmedicalint.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://rhythmmedicalint.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://rhythmmedicalint.com/services#webpage",
      url: "https://rhythmmedicalint.com/services",
      name: "Our Services - Rhythm Medical International",
      isPartOf: { "@id": "https://rhythmmedicalint.com/#website" },
      breadcrumb: { "@id": "https://rhythmmedicalint.com/#breadcrumb" },
      inLanguage: "en-US",
      description:
        "Explore the Medical Services Offered by Rhythm Medical International",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rhythmmedicalint.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://rhythmmedicalint.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://rhythmmedicalint.com/services",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://rhythmmedicalint.com/services/pacemaker-implantation",
      name: "Pacemaker Implantation",
      serviceType: "Pacemaker Implantation",
      description:
        "Comprehensive pacemaker implantation services and device support.",
      provider: { "@id": "https://rhythmmedicalint.com/#organization" },
      url: "https://rhythmmedicalint.com/services#pacemaker-implantation",
    },
    {
      "@type": "Service",
      "@id": "https://rhythmmedicalint.com/services/coronary-stents",
      name: "Coronary Stents",
      serviceType: "Coronary Stents",
      description:
        "Supply and technical support for coronary stents and interventional cardiology devices.",
      provider: { "@id": "https://rhythmmedicalint.com/#organization" },
      url: "https://rhythmmedicalint.com/services#coronary-stents",
    },
    {
      "@type": "Service",
      "@id": "https://rhythmmedicalint.com/services/wires",
      name: "Guide Wires",
      serviceType: "Guide Wires",
      description:
        "High-quality guide wires for interventional procedures and device support.",
      provider: { "@id": "https://rhythmmedicalint.com/#organization" },
      url: "https://rhythmmedicalint.com/services#wires",
    },
    {
      "@type": "Service",
      "@id": "https://rhythmmedicalint.com/services/heart-devices",
      name: "Heart Devices",
      serviceType: "Heart Devices",
      description:
        "Medical devices for cardiac care including pacemakers and monitoring equipment.",
      provider: { "@id": "https://rhythmmedicalint.com/#organization" },
      url: "https://rhythmmedicalint.com/services#heart-devices",
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      <ServiceSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    </div>
  );
}
