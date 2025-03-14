"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

// Dynamically import MapContainer and its components
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const position: LatLngExpression = [6.5512, 3.3087]; // Ejigbo, Lagos

export default function ContactForm() {
  return (
    <section className="px-7 lg:py-10 lg:text-start text-center">
      <div className="py-2 grid grid-cols-1 lg:grid-cols-2 md:ring-1 rounded-md ring-gray-300 md:px-7 md:gap-12">
        <div className="lg:place-self-start place-self-center w-full h-full z-10">
          <MapContainer center={position} zoom={12} className="lg:h-full h-[400px] rounded-md w-full">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>Ejigbo, Lagos, Nigeria</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="flex flex-col gap-10 py-5 lg:place-self-start place-self-center">
          <div className="flex flex-col gap-3 sm:px-0 px-6">
            <h3 className="font-bold md:text-4xl text-3xl lg:text-5xl max-w-md lg:place-self-start place-self-center ">
              Send us a message
            </h3>
            <p>Got questions or need assistance? Drop us a message, and we&apos;ll get back to you ASAP!</p>
          </div>
          <form action="post" className="flex flex-col gap-1 lg:place-self-start place-self-center w-full">
            <input
              className="ring-1 ring-gray-300 rounded-xl pl-5 sm:w-full w-[90vw] py-2.5"
              type="text"
              id="fullname"
              placeholder="Your name"
              autoComplete="on"
            />
            <input
              className="ring-1 ring-gray-300 rounded-xl pl-5 sm:w-full w-[90vw] py-2.5"
              type="email"
              id="email"
              placeholder="Email"
              required
              autoComplete="on"
            />
            <input
              className="ring-1 ring-gray-300 rounded-xl pl-5 sm:w-full w-[90vw] py-2.5"
              type="text"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="ring-1 ring-gray-300 rounded-xl sm:w-full w-[90vw] pl-5 h-40"
              name="comment"
              id="comment"
              placeholder="Comment"
            ></textarea>
            <button className="bg-amber-400 py-3.5 px-8 lg:self-start self-center font-bold hover:text-white" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
