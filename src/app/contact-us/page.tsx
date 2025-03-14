import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ContactForm from "./components/ContactForm"
import ContactUs from "./components/ContactUs"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "Contact Us - RaphNexus",
  description: "Get in touch with RaphNexus for inquiries, support, or collaborations. We're here to help!",
  openGraph: {
    title: "Contact Us - RaphNexus",
    description: "Get in touch with RaphNexus for inquiries, support, or collaborations. We're here to help!",
    url: "https://raphnexus.vercel.app/contact",
    type: "website",
    images: [
      {
        url: "https://raphnexus.vercel.app/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Contact Us - RaphNexus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - RaphNexus",
    description: "Get in touch with RaphNexus for inquiries, support, or collaborations. We're here to help!",
    images: ["https://raphnexus.vercel.app/og-image.jpg"], 
  },
};


export default function page() {
  return (
    <main>
    <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
     <h1 className="font-bold text-5xl">Contact Us</h1>
     <div className=" flex flex-row gap-1 items-center">
         <Link href="/" className="text-gray-500">Home</Link> <p className="text-md font-extrabold"><ChevronRight className="size-4"/></p> <p>Contact us</p>
     </div>
   </div>
   <ContactUs/>
   <ContactForm/>

 </main>
  )
}
