import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto ">
        <div className="text-2xl font-bold text-gray-800 dark:text-white" title="Leading the Future of Medical Technology and Healthcare Solutions">
          Rhythm Medical International
        </div>
        <div className="space-x-4">
          <Link
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
