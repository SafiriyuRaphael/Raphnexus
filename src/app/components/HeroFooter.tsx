import React from 'react'

export default function HeroFooter() {
  return (
    <section 
      className="flex px-7 py-9 md:py-16 items-center md:justify-between xl:max-w-[90vw] h-full lg:gap-3 lg:flex-row flex-col gap-10 justify-center"
      role="contentinfo"
      aria-label="Website footer"
    >
      {/* Contact Information Section */}
      <div className="flex md:justify-between xl:gap-26 lg:gap-14 md:gap-10 lg:w-fit w-full md:pr-46 justify-center md:flex-row flex-col items-center lg:pr-0 text-center md:text-start">
        <article className="flex flex-col gap-4">
          <h1 className="text-green-600 font-extrabold whitespace-nowrap text-2xl" aria-label="Brand name">
            RaphNexus
          </h1>
          
          <p className="text-gray-600">
            We believe it has the power to do <br /> 
            amazing things
          </p>

          <address className="not-italic">
            <div>
              <h2 className="sr-only">Contact Information</h2>
              <a 
                href="tel:+23480000000" 
                className="text-amber-400 text-xl hover:text-amber-500 transition-colors"
                aria-label="Call us at +234 80-000-000"
              >
                +234 80-000-000
              </a>
              <br />
              <a 
                href="mailto:customer_support@example.com" 
                className="text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Email customer support"
              >
                customer_support@example.com
              </a>
            </div>
          </address>
        </article>

        {/* Address and Hours Section */}
        <article className="md:self-end">
          <div className="flex flex-col gap-4">
            <h2 className="sr-only">Location and Hours</h2>
            <p className="text-gray-600">
              <strong className="text-black">Address: </strong>
              570 8th Ejigbo, <br /> 
              Lagos 10001 Nigeria
            </p>
            <p className="text-gray-600">
              <strong className="text-black">Hours: </strong>
              <time dateTime="09:30">9.30am</time>-<time dateTime="18:30">6.30pm</time> <br /> 
              Monday to Friday
            </p>
          </div>
        </article>
      </div>

      {/* Navigation Links Section */}
      <nav 
        className="flex md:gap-16 lg:w-fit justify-between w-full lg:px-0 px-12 md:flex-row flex-col items-center text-center md:text-start gap-5"
        aria-label="Useful links"
      >
        {/* Useful Links */}
        <section aria-labelledby="useful-links-heading">
          <h3 id="useful-links-heading" className="font-bold">USEFUL LINKS</h3>
          <ul className="text-gray-600 space-y-2">
            {['New Products', 'Best Sellers', 'Bundle & Save', 'Online Gift Card', 'Discount'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-gray-800 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* Account Links */}
        <section aria-labelledby="account-links-heading">
          <h3 id="account-links-heading" className="font-bold">MY ACCOUNT</h3>
          <ul className="text-gray-600 space-y-2">
            {['My Profile', 'My Order History', 'My Wish List', 'Order Tracking', 'Shopping Cart'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-gray-800 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* Information Links */}
        <section aria-labelledby="information-links-heading">
          <h3 id="information-links-heading" className="font-bold">INFORMATION</h3>
          <ul className="text-gray-600 space-y-2">
            {['Privacy policy', 'Refund policy', 'Shipping & Return', 'Term of Use', 'Advertise'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-gray-800 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </section>
  )
}