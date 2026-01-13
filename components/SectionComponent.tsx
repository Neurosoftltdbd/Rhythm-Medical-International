"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SectionComponent({
  sectionTitle,
  sectionContent,
  sectionImage,
  isReversed,
}: {
  sectionTitle: string;
  sectionContent: string;
  sectionImage: string[];
  isReversed?: boolean;
}) {
  const [imageSrc, setImageSrc] = useState(sectionImage[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * sectionImage.length);
      setImageSrc(sectionImage[randomIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [sectionImage]);

  return (
    <section
      id={sectionTitle.trim().toLowerCase().replace(/\s+/g, "-")}
      className={`w-full py-12 ${[
        isReversed ? "bg-blue-100" : "bg-green-100",
      ]}`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col-reverse ${
            isReversed ? "md:flex-row-reverse" : "md:flex-row"
          } gap-12 py-8 items-center px-4 md:px-0`}
        >
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold">{sectionTitle}</h2>
            </div>
            <p className="mb-6 text-justify whitespace-pre-line">
              {sectionContent}
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={imageSrc}
              alt={sectionTitle}
              width={600}
              height={600}
              loading="lazy"
              className="aspect-square object-cover rounded-lg shadow-lg transition-opacity duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
