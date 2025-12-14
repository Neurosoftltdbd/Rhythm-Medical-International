export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-between max-w-7xl mx-auto mb-4 gap-8">
        <div className="w-1/3">
          <h3 className="text-xl ">About</h3>
          <hr className="mb-4" />
          <p className="text-gray-600 dark:text-gray-300">
            Rhythm Medical International is dedicated to providing innovative
            medical solutions that enhance patient care and improve healthcare
            outcomes worldwide.
          </p>
        </div>
        <div className="w-1/3">
          <h3 className="text-xl ">Quick Links</h3>
          <hr className="mb-4" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-1/3">
          <h3 className="text-xl ">Contact Us</h3>
          <hr className="mb-4" />
          <p>Email: Rhythmmedicalinternational@gmail.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Medical St, Health City, Country</p>
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
