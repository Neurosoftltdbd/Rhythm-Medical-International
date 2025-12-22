import { experience, leadership, satisfaction } from "./animationData";

export const footerQuickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const team = [
  {
    name: "Md. Masudur Rahman",
    role: "Chief Executive Officer",
    imageUrl: "/Masudur-Rahman.png",
    phone: "+880 1819-227038",
    email: "masud@rhythmmedicalint.com",
    bio: "",
  },
  {
    name: "Angshuman Malaker",
    role: "Chief Consultant",
    imageUrl: "/amalaker.jpg",
    phone: "+880 1819-244779",
    email: "amalaker@rhythmmedicalint.com",
    bio: "Angshuman is a seasoned consultant with expertise in healthcare management and strategy, helping us navigate complex challenges.",
  },
  {
    name: "Md. Mijanur Rahman",
    role: "Chief Technical Officer",
    imageUrl: "/mijan.jpg",
    phone: "+880 1710-189756",
    email: "mijan@rhythmmedicalint.com",
    bio: "Mijan is responsible for leading our technical team and ensuring that we stay up-to-date with the latest advancements in healthcare technology.",
  },
  {
    name: "Nur Hossain",
    role: "It Officer",
    imageUrl: "/nhrepon.png",
    phone: "+880 1829-938427",
    email: "nurhossain@rhythmmedicalint.com",
    bio: "Nur Hossain is responsible for managing our IT infrastructure and ensuring our systems run smoothly.",
  },
];

export const achivements = [
  {
    title: "Client Satisfaction",
    description:
      "Leading the Future of Medical Technology and Healthcare Solutions",
    animation: satisfaction,
  },
  {
    title: "15+ Years of Experience",
    description:
      "Leading the Future of Medical Technology and Healthcare Solutions",
    animation: experience,
  },
  {
    title: "Market Leadership and Sustainability",
    description:
      "Leading the Future of Medical Technology and Healthcare Solutions",
    animation: leadership,
  },
];


export const testimonials = [
  {
    id: 1,
    name: "Dr. Ayesha Rahman",
    role: "Chief Medical Officer",
    message:
      "Rhythm Medical International provided outstanding support and high-quality equipment — our clinical outcomes improved noticeably.",
    rating: 5,
    imageUrl: "/Masudur-Rahman.png",
  },
  {
    id: 2,
    name: "Mr. Kamal Hossain",
    role: "Hospital Administrator",
    message:
      "The team was professional, responsive, and delivered on time. Their training session for our staff was excellent.",
    rating: 5,
    imageUrl: "/amalaker.jpg",
  },
  {
    id: 3,
    name: "Ms. Farida Khan",
    role: "Procurement Lead",
    message:
      "Competitive pricing and reliable after-sales service. We continue to trust Rhythm for our medical supply needs.",
    rating: 4,
    imageUrl: "/mijan.jpg",
  },
];

export type Testimonial = (typeof testimonials)[number];
