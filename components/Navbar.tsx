import Link from "next/link";

export default function Navbar() {
  const navigationBarItem = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Team", href: "/team" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto ">
        <div
          className="text-2xl font-bold text-gray-800 dark:text-white"
          title="Leading the Future of Medical Technology and Healthcare Solutions"
        >
          Rhythm Medical International
        </div>
        <div className="space-x-4">
          {navigationBarItem.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
