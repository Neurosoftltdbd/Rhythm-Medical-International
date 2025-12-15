export default function MissionVission() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Mission */}
          <div>
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-emerald-50 text-emerald-600 mb-4">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v8m0-8l3 3m-3-3-3 3"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              To deliver reliable, clinically-validated rhythm monitoring and
              actionable insights that empower clinicians and patients to
              prevent adverse cardiac events.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex gap-3 items-start">
                <span className="flex-shrink-0 mt-1 inline-flex items-center justify-center h-8 w-8 rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  High-sensitivity monitoring with minimal false alarms.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="flex-shrink-0 mt-1 inline-flex items-center justify-center h-8 w-8 rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Seamless integrations with clinical workflows and EHRs.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="flex-shrink-0 mt-1 inline-flex items-center justify-center h-8 w-8 rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Protect patient data with enterprise-grade security and
                  privacy.
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                Get in Touch
                <svg
                  className="ml-3 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Vision card */}
          <div>
            <div className="bg-emerald-50 dark:bg-gray-800 rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                A future where every heartbeat is monitored with context-aware
                intelligence, enabling proactive, personalized care and
                dramatically reducing cardiac risk worldwide.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Clinically Driven
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Evidence-based algorithms validated in clinical studies.
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Patient-Centered
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Intuitive tools that support patients and clinicians alike.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <img
                  src="/heart-rate.json"
                  alt="wave"
                  className="w-full h-36 object-contain opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
