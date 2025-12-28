import { footerQuickLinks } from "@/data/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-blue-300 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto mb-4 gap-16">
        <div className="w-full md:w-1/3">
          <h3 className="text-xl ">About</h3>
          <hr className="mb-4" />
          <p className="text-gray-600 dark:text-gray-300">
            Rhythm Medical International is dedicated to providing innovative
            medical solutions that enhance patient care and improve healthcare
            outcomes worldwide.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl ">Quick Links</h3>
          <hr className="mb-4" />
          <ul className="list-none grid grid-cols-2 w-full ">
            {footerQuickLinks.map((link) => (
              <li key={link.name} className="mb-2 ">
                <Link
                  href={link.href}
                  className="hover:underline hover:text-green-600 transition-all ease-in-out duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl ">Contact Us</h3>
          <hr className="mb-4" />
          <p>Email: rhythmmedicalint@gmail.com</p>
          <p>Phone: +8801819227038</p>
          <p className="my-4 text-sm">
            Head Office: House- 10/81/3, Modern Road, Dogair Notun Para, Word-
            66, South City Corporation, Demra, Dhaka-1361
          </p>
          <p className="text-sm">
            Regional Office: Hill View Society R/A, House- 27, Road- 1, Word-15,
            Panchlaish, Chattogram-4203
          </p>
        </div>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
        <p className="text-center text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Rhythm Medical International. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
