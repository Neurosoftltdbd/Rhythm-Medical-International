import PageHeader from "@/components/PageHeader";
import SectionComponent from "@/components/SectionComponent";
import { serviceList } from "@/data/data";

export const metadata = {
  title: "Our Services",
    alternates: {
    canonical: "/services",
  },
  description:
    "Explore the Medical Services Offered by Rhythm Medical International",
  authors: [
    { name: "Rhythm Medical International", url: "https://rhythmmedical.com" },
  ],
  openGraph: {
    title: "Our Services",
    description:
      "Explore the Medical Services Offered by Rhythm Medical International",
    url: "https://rhythmmedical.com/services",
    siteName: "Rhythm Medical International",
    images: [
      {
        url: "/upload/Banner.jpg",
        width: 1200,
        height: 800,
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
    images: [
      {
        url: "/upload/Banner.jpg",
        width: 1200,
        height: 800,
      },
    ],
  },
};

export const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://rhythmmedicalint.com/services#service-list",
  itemListElement: [
    {
      "@type": "Service",
      "@id": "https://rhythmmedicalint.com/services/pacemaker-implantation",
      name: "Pacemaker Implantation and Post Implant Follow-up service",
      serviceType: "Pacemaker Implantation and Post Implant Follow-up service",
      description:
        "Pacemaker Implantation and Post Implant Follow-up service Offered by Rhythm Medical International.",
      provider: { "@id": "https://rhythmmedicalint.com/#organization" },
      url: "https://rhythmmedicalint.com/services#pacemaker-implantation-and-post-implant-follow-up-service",
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
      name: "Accessories for Interventional Cardiology",
      serviceType: "Accessories for Interventional Cardiology",
      description:
        "Supply and technical support for accessories for interventional cardiology devices.",
      provider: { "@id": "https://rhythmmedicalint.com/#organization" },
      url: "https://rhythmmedicalint.com/services#accessories-for-interventional-cardiology",
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-blue-50">
      <PageHeader
        title="Our Services"
        description="Explore the Medical Services Offered by Rhythm Medical International"
      />
      {serviceList &&
        serviceList.map((item, index) => {
          return (
            <SectionComponent
              key={index}
              sectionTitle={item.title}
              sectionContent={item.description}
              sectionImage={item.imageUrl}
              isReversed={index % 2 != 0}
            />
          );
        })}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    </div>
  );
}
