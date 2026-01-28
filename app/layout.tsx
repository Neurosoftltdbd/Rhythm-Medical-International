import type { Metadata } from "next";
import {
  Merriweather,
  Playfair_Display,
  Poppins,
  Racing_Sans_One,
} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair-display",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

const racingSansOne = Racing_Sans_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-racing-sans-one",
  display: "swap",
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL("https://rhythmmedicalint.com"),
  alternates: {
    canonical: "./",
    languages: {
      "en-US": "/",
    },
  },

  title: {
    default: "Rhythm Medical International",
    template: "%s - Rhythm Medical International",
  },
  description: `Rhythm Medical International is a leading provider of innovative cardiac solutions, specializing in high-quality coronary stents, wires, and a wide range of heart-related medical devices.`,
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
    {
      name: "Rhythm Medical International",
      url: "https://rhythmmedicalint.com",
    },
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
      "Leading the Future of Medical Technology and Healthcare Solutions in Bangladesh. Contact us today to learn more about our services and how we can help you. ",
    url: "https://rhythmmedicalint.com",
    siteName: "Rhythm Medical International",
    images: [
      {
        url: "/upload/Banner.jpg",
        width: 1200,
        height: 800,
        alt: "Rhythm Medical International",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhythm Medical International",
    description:
      "Leading the Future of Medical Technology and Healthcare Solutions in Bangladesh. Contact us today to learn more about our services and how we can help you. ",
    images: [
      {
        url: "/upload/Banner.jpg",
        width: 1200,
        height: 800,
        alt: "Rhythm Medical International",
      },
    ],
    creator: "@rhythmmedicalint",
    site: "@rhythmmedicalint",
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
          telephone: "+880 1819227038",
          contactType: "customer service",
          areaServed: "BD",
          availableLanguage: ["English"],
        },
      ],
      description:
        "Leading the Future of Medical Technology and Healthcare Solutions in Bangladesh. Contact us today to learn more about our services and how we can help you. ",
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
      name: "Home",
      isPartOf: { "@id": "https://rhythmmedicalint.com/#website" },
      breadcrumb: { "@id": "https://rhythmmedicalint.com/#breadcrumb" },
      inLanguage: "en-US",
      description:
        "Leading the Future of Medical Technology and Healthcare Solutions in Bangladesh. Contact us today to learn more about our services and how we can help you. ",
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
      description:
        "Leading the Future of Medical Technology and Healthcare Solutions in Bangladesh.",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "House- 10/81/3, Modern Road, Dogair Notun Para, Word-66, South City Corporation, Demra",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka Division",
        postalCode: "1361",
        addressCountry: "BD",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+880 1829-938427",
        contactType: "customer service",
        areaServed: "BD",
        availableLanguage: ["English"],
      },
      email: "rhythmmedicalint@gmail.com",
      sameAs: [
        "https://www.facebook.com/rhythmmedicalinternational",
        "https://www.twitter.com/rhythmmedical",
        "https://www.linkedin.com/company/rhythm-medical-international",
        "https://www.instagram.com/rhythmmedicalinternational",
      ],
      priceRange: "1,000.00-20,00,000.00 BDT",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://rhythmmedicalint.com/#professionalservice",
      name: "Rhythm Medical International",
      url: "https://rhythmmedicalint.com",
      logo: "https://rhythmmedicalint.com/logo.png",
      description:
        "Leading the Future of Medical Technology and Healthcare Solutions in Bangladesh.",
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
      priceRange: "1,000.00-20,00,000.00 BDT",
      image: "https://rhythmmedicalint.com/logo.png",
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://rhythmmedicalint.com/#medicalbusiness",
      name: "Rhythm Medical International",
      url: "https://rhythmmedicalint.com",
      logo: "https://rhythmmedicalint.com/logo.png",
      description:
        "Leading the Future of Medical Technology and Healthcare Solutions in Bangladesh.",
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
      "@type": "Person",
      "@id": "https://rhythmmedicalint.com/#person",
      name: "Md. Nur Hossain Repon",
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
      image: "/upload/nhrepon.png",
      email: "nurhossain@rhythmmedicalint.com",
      telephone: "+880 1829-938427",
      address: {
        "@type": "PostalAddress",
        streetAddress: "BSEC Babon, level-9, Kawran Bazar",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka Division",
        postalCode: "1205",
        addressCountry: "BD",
      },
      nationality: { "@type": "Country", name: "Bangladesh" },
      birthDate: "1993-06-08",
      birthPlace: "Noakhali, Bangladesh",
      gender: "Male",
      height: "5'5\"",
      weight: "68kg",
      knowsLanguage: ["Bengali", "English"],
      worksFor: {
        "@type": "Organization",
        name: "Rhythm Medical International",
        url: "https://rhythmmedicalint.com",
      },
      memberOf: {
        "@type": "Organization",
        name: "Rhythm Medical International",
        url: "https://rhythmmedicalint.com",
      },
      knowsAbout: [
        "Information Technology",
        "Networking",
        "Software Development",
        "Web Development",
        "Mobile App Development",
        "Account Management",
        "Digital Marketing",
        "SEO",
        "Content Creation",
        "Graphic Design",
      ],
      parents: [
        {
          "@type": "Person",
          name: "Md. Nur Alam",
        },
        {
          "@type": "Person",
          name: "Rahima Begum",
        },
      ],
      children: [
        {
          "@type": "Person",
          name: "Mohammad Shehraj",
        },
      ],
      spouse: {
        "@type": "Person",
        name: "Sharmin Akter",
      },
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "Prisma",
        "Tailwind CSS",
        "Bootstrap",
        "Dart",
        "Flutter",
        "Firebase",
        "Git",
        "GitHub",
        "Adobe Photoshop",
        "Adobe Illustrator",
      ],
      taxID: "595993572108",
      workLocation: {
        "@type": "Place",
        name: "Rhythm Medical International",
        address: {
          "@type": "PostalAddress",
          streetAddress: "BSEC Babon, level-9, Kawran Bazar",
          addressLocality: "Dhaka",
          addressRegion: "Dhaka Division",
          postalCode: "1205",
          addressCountry: "BD",
        },
      },
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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} ${merriweather.variable} ${racingSansOne.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </body>
    </html>
  );
}
