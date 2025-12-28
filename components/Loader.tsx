"use client";
import { loadingWaveAnimationData } from "@/data/animation/animationData";
import Lottie from "lottie-react";
export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/0">
      <div className="w-32 h-32">
        <Lottie
          animationData={loadingWaveAnimationData}
          loop={true}
          autoPlay={true}
        />
      </div>
    </div>
  );
}
