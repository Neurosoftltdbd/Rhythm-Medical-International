import Image from "next/image";
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
    <nav className="w-full flex items-center justify-between p-4 bg-green-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto ">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          <h2
            className="flex items-center justify-center"
            title="Leading the Future of Medical Technology and Healthcare Solutions"
          >
            <Link className="flex items-center gap-4" href="/">
              <Image
                src="/RMI-Logo.png"
                alt="RMI Logo"
                width={150}
                height={50}
                className="object-contain w-24 md:w-12"
              />
              <span>Rhythm Medical International</span>
            </Link>
          </h2>
        </div>
        <div className="space-x-4 hidden md:flex">
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
      <div className="w-screen md:hidden fixed bottom-0 left-0 right-0 z-50">
        <ul className="flex bg-green-50 dark:bg-gray-900 w-screen justify-around py-2 border-t border-gray-200 dark:border-gray-700">
          {navigationBarItem.map((item, index) => (
            <li
              key={index}
              className="bg-green-600 hover:bg-green-700 text-gray-100 "
            >
              <Link key={index} href={item.href} className="px-4 py-2 block">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
