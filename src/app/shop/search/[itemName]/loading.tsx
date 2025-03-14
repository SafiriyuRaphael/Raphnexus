"use client";
import animationData from "../../../../assets/animations/Animation - 1741106153416.json";
import dynamic from "next/dynamic";


const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Loading() {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true}
        className="h-[60vh] w-screen"
      />
    </div>
  );
}
