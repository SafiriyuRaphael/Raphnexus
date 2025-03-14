"use client"
import{ useState,ChangeEvent } from "react";
import OrderPlacement from "./OrderPlacement";

export default function Details() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    company: "",
    country: "",
    street: "",
    street2: "",
    town: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    recipient: false,
    note: "",
  });

  // Regex Patterns
  const nameRegex = /^[A-Za-z\s]+$/; // Only letters & spaces
  const zipRegex = /^[0-9]{4,10}$/; // 4-10 digit ZIP code
  const phoneRegex = /^[+\d][0-9\s-]{6,15}$/; // International format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email pattern

  // Handle Input Change
  const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <form action="" className="flex justify-between gap-8 flex-col md:flex-row mt-5">
    <section>
      <h3 className="text-2xl font-bold pb-6">Billing Details</h3>
      <div className="space-y-4">
        {/* Name Fields */}
        <div className="flex w-full gap-4">
          <div>
            <label htmlFor="fname">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              className="border w-full outline-amber-400 px-5 rounded-lg py-2"
              type="text"
              name="fname"
              id="fname"
              value={formData.fname}
              onChange={handleChange}
              required
              pattern={nameRegex.source}
              title="Only letters and spaces allowed"
            />
          </div>
          <div>
            <label htmlFor="lname">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              className="border w-full outline-amber-400 px-5 rounded-lg py-2"
              type="text"
              name="lname"
              id="lname"
              value={formData.lname}
              onChange={handleChange}
              required
              pattern={nameRegex.source}
              title="Only letters and spaces allowed"
            />
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company">Company Name (Optional)</label>
          <input
            className="border w-full outline-amber-400 px-5 rounded-lg py-2"
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        {/* Country Dropdown */}
        <div>
          <label htmlFor="country">
            Country / Region <span className="text-red-500">*</span>
          </label>
          <select
            className="border w-full outline-amber-400 px-5 rounded-lg py-2"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="NG">Nigeria</option>
            <option value="UK">United Kingdom</option>
            <option value="IN">India</option>
          </select>
        </div>

        {/* Address Fields */}
        <div>
          <label htmlFor="street">
            Street Address <span className="text-red-500">*</span>
          </label>
          <input
            className="border w-full outline-amber-400 px-5 rounded-lg py-2"
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
            placeholder="House number and street name"
          />
          <input
            className="border w-full outline-amber-400 px-5 rounded-lg py-2 mt-2"
            type="text"
            id="street2"
            name="street2"
            value={formData.street2}
            onChange={handleChange}
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="town">
            Town / City <span className="text-red-500">*</span>
          </label>
          <input
            className="border w-full outline-amber-400 px-5 rounded-lg py-2"
            type="text"
            id="town"
            name="town"
            value={formData.town}
            onChange={handleChange}
            required
          />
        </div>

        {/* State Dropdown */}
        <div>
          <label htmlFor="state">
            State / Province <span className="text-red-500">*</span>
          </label>
          <select
            className="border w-full outline-amber-400 px-5 rounded-lg py-2"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            <option value="CA">California</option>
            <option value="NY">New York</option>
            <option value="LAG">Lagos</option>
            <option value="KAN">Kano</option>
          </select>
        </div>

        {/* ZIP Code */}
        <div>
          <label htmlFor="zip">
            Postcode / ZIP <span className="text-red-500">*</span>
          </label>
          <input
            className="border w-full outline-amber-400 px-5 rounded-lg py-2"
            type="text"
            name="zip"
            id="zip"
            value={formData.zip}
            onChange={handleChange}
            required
            pattern={zipRegex.source}
            title="ZIP code should be 4-10 digits"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            className="border w-full outline-amber-400 px-5 rounded-lg py-2"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern={phoneRegex.source}
            title="Enter a valid phone number"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            className="border w-full outline-amber-400 px-5 rounded-lg py-2"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern={emailRegex.source}
          />
        </div>
        <div  className=" flex flex-col gap-7">
        
          <div className="flex items-center gap-2 justify-between">
            <label htmlFor="recipient" className="text-xl">Ship to a different address?</label>
            <input
              type="checkbox"
              id="recipient"
              name="recipient"
              checked={formData.recipient}
              onChange={handleChange}
              className="size-4"
            />
          </div>

          <div>
            
              <label htmlFor="note">Order notes (optional)</label>
              <textarea
                className="border w-full outline-amber-400 px-5 rounded-lg py-2"
                id="note"
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="Notes about your order, e.g. special notes for delivery"
              />
          
          </div>
        </div>

      </div>
    </section>
    <div className="w-full md:w-[50vw] lg:w-[40vw]">
    <OrderPlacement/></div>
    </form>
  );
}
