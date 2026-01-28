import { siteUrl } from "@/utility/config";

export default function sitemap() {
  const pages = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/about",
      title: "About",
    },
    {
      url: "/contact",
      title: "Contact",
    },
    {
      url: "/login",
      title: "Login",
    },
    {
      url: "/services",
      title: "Services",
    },
    {
      url: "/team",
      title: "Team",
    },
    {
      url: "/faq",
      title: "FAQ",
    },
    {
      url: "/blog",
      title: "Blog",
    },
    {
      url: "/privacy-policy",
      title: "Privacy Policy",
    },
    {
      url: "/terms-conditions",
      title: "Terms & Conditions",
    },
  ];

  const images = [
    {
      url: "/hero-image.png",
      title: "Hero Image",
      alt: "Hero Image - Rhythm Medical International",
    },
    {
      url: "/logo.png",
      title: "Logo",
      alt: "Logo - Rhythm Medical International",
    },
    {
      url: "/upload/amalaker.jpg",
      title: "Angshuman Malaker",
      alt: "Angshuman Malaker - Rhythm Medical International",
    },
    {
      url: "/upload/Banner.jpg",
      title: "Banner",
      alt: "Banner - Rhythm Medical International",
    },
    {
      url: "/upload/hasan.jpg",
      title: "Hasan",
      alt: "Hasan - Rhythm Medical International",
    },
    {
      url: "/upload/iqbal.jpeg",
      title: "Md. Iqbal Hossain Bhuiayan",
      alt: "Md. Iqbal Hossain Bhuiayan - Rhythm Medical International",
    },
    {
      url: "/upload/jahid.jpeg",
      title: "Jahidul Islam",
      alt: "Jahidul Islam - Rhythm Medical International",
    },
    {
      url: "/upload/Masudur-Rahman.png",
      title: "Md. Masudur Rahman",
      alt: "Md. Masudur Rahman - Rhythm Medical International",
    },
    {
      url: "/upload/mijan.jpg",
      title: "Md. Mijanur Rahman",
      alt: "Md. Mijanur Rahman - Rhythm Medical International",
    },
    {
      url: "/upload/mission-image.jpg",
      title: "Mission Image",
      alt: "Mission Image - Rhythm Medical International",
    },
    {
      url: "/upload/monjurul.jpeg",
      title: "Monjurul Islam",
      alt: "Monjurul Islam - Rhythm Medical International",
    },
    {
      url: "/upload/nhrepon.png",
      title: "Nur Hossain",
      alt: "Nur Hossain - Rhythm Medical International",
    },
    {
      url: "/upload/noman.jpeg",
      title: "Noman",
      alt: "Noman - Rhythm Medical International",
    },
    {
      url: "/upload/pacemaker.jpg",
      title: "Pacemaker",
      alt: "Pacemaker - Rhythm Medical International",
    },
    {
      url: "/upload/rifat.jpg",
      title: "Rifat Hossain",
      alt: "Rifat Hossain - Rhythm Medical International",
    },
    {
      url: "/upload/tasin.png",
      title: "Quazi Akram Hossain Tasin",
      alt: "Quazi Akram Hossain Tasin - Rhythm Medical International",
    },
    {
      url: "/upload/vision-image.jpg",
      title: "Vision Image",
      alt: "Vision Image - Rhythm Medical International",
    },
  ];

  const posts = [
    {
      url: "/pacemaker-installation-technique",
      title: "Pacemaker Installation Technique and Procedure",
    },
    {
      url: "/understanding-cardiac-catheterization",
      title: "Understanding Cardiac Catheterization",
    },
  ];

  // for (const path of paths) {
  //   siteMaps.push({
  //     url: `${siteUrl}/${path}`,
  //     lastModified: new Date(),
  //   });
  // }

  return [
    ...images.map((image) => ({
      url: `${siteUrl}${image.url}`,
      lastModified: new Date(),
    })),
    ...pages.map((page) => ({
      url: `${siteUrl}${page.url}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}${post.url}`,
      lastModified: new Date(),
    })),
  ];
}
