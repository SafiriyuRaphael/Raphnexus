import { Smartphone, MapPinCheckInside, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="px-7 py-20 flex flex-col gap-8 md:gap-12 lg:text-start text-center">
      <div className="flex flex-col gap-2.5">
        <h3 className="lg:text-5xl md:text-4xl text-3xl font-extrabold">
          Call us or visit place
        </h3>
        <p className="text-gray-500">
          Contact us anytime! We&apos;re here to assist you with any inquiries.
        </p>
      </div>
      <div className="flex md:flex-row flex-col lg:gap-48 lg:justify-start items-center justify-center gap-9 md:gap-24 lg:items-start">
        <div className="flex flex-col md:gap-5.5 gap-4">
          <Smartphone className="size-14 text-amber-400 lg:self-start self-center" />
          <h3 className="text-xl font-bold">Phone:</h3>
          <div>
            <p className="text-gray-500 whitespace-nowrap">
              + 234 800 000 0000
            </p>
            <p className="text-gray-500 whitespace-nowrap">
              + 234 810 488 9413
            </p>
          </div>
        </div>
        <div className="flex flex-col md:gap-5.5 gap-4">
          <MapPinCheckInside className="size-14 text-amber-400 lg:self-start self-center" />
          <h3 className="text-xl font-bold">Address</h3>
          <p className="text-gray-500 whitespace-nowrap">
            27, Success Avenue,{" "}
            <span className="lg:inline block">Oshodi/Isolo,</span>{" "}
            <span className="block">Lagos, Nigeria</span>
          </p>
        </div>
        <div className="flex flex-col md:gap-5.5 gap-4">
          <Mail className="size-14 text-amber-400 lg:self-start self-center" />
          <h3 className="text-xl font-bold">Email:</h3>
          <div>
            <p className="text-gray-500 whitespace-nowrap">
              contact@example.com
            </p>
            <p className="text-gray-500 whitespace-nowrap">info@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
