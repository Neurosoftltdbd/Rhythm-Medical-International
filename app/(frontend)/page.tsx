import AchivementSection from "@/components/home/AchivementSection";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import OurTeamSection from "@/components/home/OurTeamSection";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import VissionSection from "@/components/home/VissionSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rhythm Medical International - Home",
  description:
    "Leading the Future of Medical Technology and Healthcare Solutions",
  keywords: [
    "Rhythm Medical International",
    "Rhythm Medical",
    "Medical Devices",
    "Rhythm",
    "Pacemakers",
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
    title: "Rhythm Medical International",
    description:
      "Leading the Future of Medical Technology and Healthcare Solutions",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Rhythm Medical International",
      },
    ],
    siteName: "Rhythm Medical International",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhythm Medical International",
    description:
      "Leading the Future of Medical Technology and Healthcare Solutions",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Rhythm Medical International",
      },
    ],
  },
};

const schemaMarkup = {
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
      "@id": "https://rhythmmedicalint.com/#homepage",
      url: "https://rhythmmedicalint.com/",
      name: "Rhythm Medical International - Home",
      isPartOf: { "@id": "https://rhythmmedicalint.com/#website" },
      breadcrumb: { "@id": "https://rhythmmedicalint.com/#breadcrumb" },
      inLanguage: "en-US",
      description:
        "Leading the Future of Medical Technology and Healthcare Solutions",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Contact",
          item: "https://rhythmmedicalint.com/contact",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "About",
          item: "https://rhythmmedicalint.com/about",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Team",
          item: "https://rhythmmedicalint.com/team",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Blog",
          item: "https://rhythmmedicalint.com/blog",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "FAQ",
          item: "https://rhythmmedicalint.com/faq",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Privacy Policy",
          item: "https://rhythmmedicalint.com/privacy-policy",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Terms of Service",
          item: "https://rhythmmedicalint.com/terms-conditions",
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://rhythmmedicalint.com/#localbusiness",
      name: "Rhythm Medical International",
      url: "https://rhythmmedicalint.com",
      logo: "https://rhythmmedicalint.com/logo.png",
      image: "https://rhythmmedicalint.com/logo.png",
      description:
        "Leading the Future of Medical Technology and Healthcare Solutions",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "House- 10/81/3, Modern Road, Dogair Notun Para, Word-66, South City Corporation, Demra",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka Division",
        postalCode: "1361",
        addressCountry: "BD",
      },
      telephone: "+8801819227038",
      email: "rhythmmedicalint@gmail.com",
      sameAs: [
        "https://www.facebook.com/rhythmmedicalinternational",
        "https://www.twitter.com/rhythmmedical",
        "https://www.linkedin.com/company/rhythm-medical-international",
        "https://www.instagram.com/rhythmmedicalinternational",
      ],
      priceRange: "1000-2000000 BDT",
    },
    {
      "@type": "ContactPage",
      "@id": "https://rhythmmedicalint.com/#contactpage",
      url: "https://rhythmmedicalint.com/contact",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://rhythmmedicalint.com/#website" },
      description:
        "Leading the Future of Medical Technology and Healthcare Solutions",
      contactType: "customer service",
      contactOption: [
        {
          "@type": "ContactPoint",
          telephone: "+880 1829-938427",
          contactType: "customer service",
          areaServed: "BD",
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://rhythmmedicalint.com/#professionalservice",
      name: "Rhythm Medical International",
      url: "https://rhythmmedicalint.com",
      logo: "https://rhythmmedicalint.com/logo.png",
      description:
        "Leading the Future of Medical Technology and Healthcare Solutions",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "House- 10/81/3, Modern Road, Dogair Notun Para, Word-66, South City Corporation, Demra",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka Division",
        postalCode: "1361",
        addressCountry: "BD",
      },
      telephone: "+8801819227038",
      email: "rhythmmedicalint@gmail.com",
      sameAs: [
        "https://www.facebook.com/rhythmmedicalinternational",
        "https://www.twitter.com/rhythmmedical",
        "https://www.linkedin.com/company/rhythm-medical-international",
        "https://www.instagram.com/rhythmmedicalinternational",
      ],
      priceRange: "1000-2000000 BDT",
      image: "https://rhythmmedicalint.com/logo.png",
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://rhythmmedicalint.com/#medicalbusiness",
      name: "Rhythm Medical International",
      url: "https://rhythmmedicalint.com",
      logo: "https://rhythmmedicalint.com/logo.png",
      description:
        "Leading the Future of Medical Technology and Healthcare Solutions",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "House- 10/81/3, Modern Road, Dogair Notun Para, Word-66, South City Corporation, Demra",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka Division",
        postalCode: "1361",
        addressCountry: "BD",
      },
      telephone: "+8801819227038",
      email: "rhythmmedicalint@gmail.com",
      sameAs: [
        "https://www.facebook.com/rhythmmedicalinternational",
        "https://www.twitter.com/rhythmmedical",
        "https://www.linkedin.com/company/rhythm-medical-international",
        "https://www.instagram.com/rhythmmedicalinternational",
      ],
      priceRange: "1000-2000000 BDT",
      image: "https://rhythmmedicalint.com/logo.png",
    },
    {
      "@type": "FAQPage",
      "@id": "https://rhythmmedicalint.com/#faqpage",
      url: "https://rhythmmedicalint.com/faq",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://rhythmmedicalint.com/#website" },
      description:
        "Frequently Asked Questions about Rhythm Medical International",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Rhythm Medical International a Medical Service provider Company?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Rhythm Medical International is a Medical Service provider Company.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact Rhythm Medical International?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact Rhythm Medical International by phone at +880 1819-227038 or email at rhythmmedicalint@gmail.com.",
          },
        },
        {
          "@type": "Question",
          name: "What are the services offered by Rhythm Medical International?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rhythm Medical International offers a wide range of medical services, including pacemaker implantation, coronary stents, wires, heart devices, and medical equipment.",
          },
        },
        {
          "@type": "Question",
          name: "What is the location of Rhythm Medical International?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rhythm Medical International is located in Dhaka, Bangladesh.",
          },
        },
        {
          "@type": "Question",
          name: "What is the contact information for Rhythm Medical International?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact Rhythm Medical International by phone at +880 1819-227038 or email at rhythmmedicalint@gmail.com.",
          },
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://rhythmmedicalint.com/#person",
      name: "Nur Hossain",
      jobTitle: "IT Specialist",
      url: "https://rhythmmedicalint.com/nur-hossain",
      sameAs: [
        "https://www.facebook.com/nurhossain.repon.501",
        "https://www.linkedin.com/in/nhrepon/",
        "https://github.com/nhrepon",
        "https://www.instagram.com/nhrepon/",
        "https://twitter.com/nhrepon",
        "https://www.tiktok.com/@nhrepon",
        "https://www.youtube.com/@nhrepon",
      ],
      description:
        "Nur Hossain is an IT Specialist at Rhythm Medical International.",
    },
    {
      "@type": "Person",
      "@id": "https://rhythmmedicalint.com/#ceo",
      name: "Engr. Md. Masudur Rahman",
      url: "https://rhythmmedicalint.com/ceo",
      jobTitle: "Chief Executive Officer",
      sameAs: [
        "https://www.facebook.com/masudur.rahman.923488",
        "https://www.linkedin.com/in/masudur-rahman-3b4b6215a/",
      ],
      description:
        "Engr. Md. Masudur Rahman is the Chief Executive Officer at Rhythm Medical International.",
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-poppins dark:bg-black">
      <HeroSection />
      <MissionSection />
      <VissionSection />
      <OurTeamSection />
      <ServiceSection />
      <AchivementSection />
      <TestimonialSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    </div>
  );
}
