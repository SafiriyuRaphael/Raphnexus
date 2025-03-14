import { Truck, Store } from "lucide-react";
import { GiHamburger } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";

export default function BottomHero() {
  return (
    <section 
      className="bg-green-600 py-11 flex items-center px-7 md:justify-between text-white md:gap-5 lg:gap-2 gap-12 md:flex-row flex-col sm:text-start text-center"
      role="region"
      aria-label="Service features"
    >
      {/* Free Shipping Feature */}
      <div 
        className="flex flex-col gap-1"
        role="article"
        aria-label="Free Shipping feature"
      >
        <div className="flex gap-2.5 items-center md:flex-row flex-col">
          <Truck 
            className="size-10 text-amber-400" 
            aria-hidden="true" // Decorative icon
          />
          <h3 className="text-xl font-bold">Free Shipping</h3>
        </div>
        <p>Sign up for updates and get free shipping</p>
      </div>

      {/* Fast Delivery Feature */}
      <div 
        className="flex flex-col gap-1"
        role="article"
        aria-label="Fast Delivery feature"
      >
        <div className="flex gap-2.5 items-center md:flex-row flex-col">
          <GiHamburger 
            className="size-9 text-amber-400 mb-1" 
            aria-hidden="true" // Decorative icon
          />
          <h3 className="text-xl font-bold">Fast Delivery</h3>
        </div>
        <p>We deliver goods around the world</p>
      </div>

      {/* Food Quality Feature */}
      <div 
        className="flex flex-col gap-1"
        role="article"
        aria-label="Food Quality feature"
      >
        <div className="flex gap-2.5 items-center md:flex-row flex-col">
          <IoFastFoodSharp 
            className="size-10 text-amber-400 mb-1" 
            aria-hidden="true" // Decorative icon
          />
          <h3 className="text-xl font-bold">Best Quality</h3>
        </div>
        <p>We are international chain of restaurants</p>
      </div>

      {/* Store Information Feature */}
      <div 
        className="flex flex-col gap-1"
        role="article"
        aria-label="Store Information feature"
      >
        <div className="flex gap-2.5 items-center md:flex-row flex-col">
          <Store 
            className="size-10 text-amber-400" 
            aria-hidden="true" // Decorative icon
          />
          <h3 className="text-xl font-bold">Our Store</h3>
        </div>
        <p>You can see our &quot;here and now&quot; products</p>
      </div>
    </section>
  );
}