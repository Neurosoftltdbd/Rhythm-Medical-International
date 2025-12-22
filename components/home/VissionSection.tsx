import Image from "next/image";

export default function VissionSection() {
  return (
    <section className="bg-blue-100 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          {/* Right: Vision */}
          <div className="w-full md:w-6/12">
            <div>
              <Image
                src="/vision-image.jpg"
                alt="Rhythm Medical International"
                width={1200}
                height={1200}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
          {/* Left: Mission */}
          <div className="w-full md:w-6/12">
            <div className="flex gap-4 items-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-emerald-50 text-emerald-600">
                <Image
                  src="/vision.svg"
                  alt="Rhythm Medical International"
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Our Vision
              </h2>
            </div>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our vision is to be the most trusted and recognized name in the
              cardiac industry by continuously developing cutting-edge products
              and dominating the market. We envision a future where Rhythm
              Medical International sets the standard for excellence in cardiac
              care, driving progress and improving patient outcomes globally.
              With a relentless focus on innovation, quality, and customer
              satisfaction, we aim to lead the way in every segment of the
              cardiac solutions market, creating lasting value and becoming the
              number one provider of heart health products worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
