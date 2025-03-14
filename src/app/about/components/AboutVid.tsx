"use client";
import { useAuth } from "@/context/AuthContext";
import PlayButton from "./PlayButton";
import { useState } from "react";

export default function AboutVid() {
  const { video, setVideo } = useAuth();
  const [videoSrc, setVideoSrc] = useState("");

  const openVideo = () => {
    setVideoSrc("https://www.youtube.com/embed/sv3TXMSv6Lw");
    setVideo(true);
  };

  const closeVideo = () => {
    setVideoSrc(""); // Stops video playback
    setVideo(false);
  };

  return (
    <section className="md:h-[95vh] h-[75vh] flex flex-col items-center justify-center gap-3 bg-[url('/pizzaaboutbg.jpg')] w-screen bg-cover bg-blend-darken bg-black/70 text-white text-center px-7 bg-no-repeat">
      {/* Play Button */}
      <div onClick={openVideo}>
        <PlayButton />
      </div>

      {/* Heading */}
      <h3 className="lg:text-5xl text-3xl sm:text-4xl font-bold">
        Make the thing Anything is Possible
      </h3>
      <p className="text-xl">Enjoy our luscious dishes wherever you want</p>

      {/* Order Button */}
      <button className="bg-amber-400 text-black px-6 py-3 hover:text-white font-semibold">
        ORDER NOW
      </button>

      {/* Video Popup */}
      {video && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/80 z-[90]">
          {/* Clickable Background to Close */}
          <div className="absolute inset-0" onClick={closeVideo}></div>

          {/* Responsive Video */}
          <div className="relative z-[100] w-[80vw] max-w-[900px] h-[45vh] md:h-[60vh] aspect-video">
            {videoSrc && (
              <iframe
                src={videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg shadow-lg w-full h-full"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
