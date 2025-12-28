"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { notFoundAnimationData } from "@/data/animation/notFound";
import Lottie from "lottie-react";
import Link from "next/link";
export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
        <Lottie animationData={notFoundAnimationData} />

        <Link
          className="hover:underline hover:text-green-800 transition-all ease-in-out duration-500"
          href="/"
        >
          Return Home
        </Link>
      </div>
      <Footer />
    </>
  );
}
