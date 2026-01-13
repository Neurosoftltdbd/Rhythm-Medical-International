"use client";
import { handShakeingAnimationData } from "@/data/animation/animationData";
import Lottie from "lottie-react";
import Image from "next/image";
import PageHeader from "../PageHeader";
export default function ServiceSection() {
  return (
    <section className="w-full bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="Our Services"
          description="We provide a wide range of medical services tailored to meet the
            needs of our patients and healthcare providers."
        />
        <div className="flex flex-col-reverse md:flex-row gap-12 py-8 items-center px-4 md:px-0 ">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <Lottie
                id="hand-shake"
                animationData={handShakeingAnimationData}
                className="w-32 h-32"
              />
              <h3 className="text-2xl font-semibold">
                Pacemaker Implantation and Post Implant Follow-up service
              </h3>
            </div>
            <p className="mb-6 text-justify">
              We offer comprehensive pacemaker implantation services, ensuring
              that patients receive the best care before, during, and after the
              procedure. Our post-implant follow-up services include regular
              check-ups and device monitoring to ensure optimal performance and
              patient well-being.
            </p>
            <p className="text-justify">
              Our services are designed to provide a comprehensive solution for
              patients seeking pacemaker implantation and follow-up care.
              Whether you are a patient seeking pacemaker implantation or a
              healthcare provider providing follow-up care, we are here to
              support you every step of the way.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/upload/pacemaker.jpg"
              alt="Service 1"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
