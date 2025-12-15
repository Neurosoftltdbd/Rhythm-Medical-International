export default function Team() {
  const team = [
    {
      name: "Dr. Amelia Stone",
      role: "Chief Medical Officer",
      bio: "Cardiologist with 15+ years of clinical experience and research in cardiac rhythm disorders.",
      initials: "AS",
      color: "from-indigo-500 to-pink-500",
    },
    {
      name: "Jacob Rivera",
      role: "Head of Engineering",
      bio: "Builds scalable health-tech platforms and leads the frontend and infra teams.",
      initials: "JR",
      color: "from-emerald-400 to-teal-600",
    },
    {
      name: "Li Wei",
      role: "Product Designer",
      bio: "Designs delightful and accessible experiences for clinicians and patients.",
      initials: "LW",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Nora Patel",
      role: "Clinical Research Lead",
      bio: "Leads clinical studies and ensures regulatory compliance across trials.",
      initials: "NP",
      color: "from-sky-400 to-indigo-600",
    },
    {
      name: "Ethan Brooks",
      role: "Data Scientist",
      bio: "Focuses on physiological signal processing and ML for predictive care.",
      initials: "EB",
      color: "from-rose-400 to-fuchsia-600",
    },
  ];
  return (
    <section className="relative bg-white dark:bg-gray-900 py-16">
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <svg
          className="relative left-1/2 -translate-x-1/2 rotate-30"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#g)"
            fillOpacity="0.3"
            d="M317 0l111 245 246 64 153-26 132 188 5 255-548 52L63 495 0 210 317 0z"
          />
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 dark:text-indigo-400">
            Our Team
          </h2>
          <h3 className="mt-2 text-3xl leading-9 font-extrabold text-gray-900 dark:text-white">
            People building better cardiac care
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            An interdisciplinary team of clinicians, engineers, and researchers
            focused on reliable rhythm monitoring and actionable insights.
          </p>

          <div className="mt-6">
            <div className="relative rounded-md shadow-sm max-w-md mx-auto">
              <input
                aria-label="Search team"
                type="search"
                placeholder="Search people, roles, skills..."
                className="block w-full rounded-full border border-gray-200 bg-white py-3 pl-4 pr-12 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {team.map((member) => (
            <article
              key={member.name}
              className="group relative rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div
                    className={`h-16 w-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-semibold text-lg`}
                  >
                    {member.initials}
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-sm text-indigo-600 font-medium mt-1">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                {member.bio}
              </p>

              <footer className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label={`Email ${member.name}`}
                    className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M3 8l7.5 5L18 8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label={`LinkedIn ${member.name}`}
                    className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5C0 2.12 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0zM7.5 8.98h4.8v2.05h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.34 6 7.67V24h-5v-7.4c0-1.77-.03-4.05-2.47-4.05-2.48 0-2.86 1.93-2.86 3.93V24H7.5V8.98z" />
                    </svg>
                  </a>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  View profile →
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 font-medium shadow-md transition"
          >
            Meet the full team
          </a>
        </div>
      </div>
    </section>
  );
}
