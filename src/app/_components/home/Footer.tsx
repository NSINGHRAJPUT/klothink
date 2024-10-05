import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className=" mx-[1%] md:mx-[2.5%] text-white py-8">
      {/* Top Section */}
      <div className="container mx-auto text-black flex flex-wrap justify-center items-center gap-8 md:space-y-0 text-center md:text-left">
        {/* Section 1: Logo and Subscribe */}
        <div className="w-full md:w-1/5 space-y-4">
          <h3 className="text-lg font-semibold">Klothink</h3> {/* Logo */}
          <div className="flex justify-center md:justify-start space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 w-full outline-none border-[1px] rounded text-gray-900"
            />
            <button className="bg-yellow-500 px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>

        {/* Section 2: Home Links */}
        <div className="w-full md:w-1/5">
          <h3 className="text-lg font-semibold mb-3">Home</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/feature">
                <span className="hover:underline">Feature</span>
              </Link>
            </li>
            <li>
              <Link href="/popular-products">
                <span className="hover:underline">Popular Products</span>
              </Link>
            </li>
            <li>
              <Link href="/testimonials">
                <span className="hover:underline">Testimonial</span>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <span className="hover:underline">FAQ</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Menswear Links */}
        <div className="w-full md:w-1/5">
          <h3 className="text-lg font-semibold mb-3">Menswear</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/menswear/casual">
                <span className="hover:underline">Casual</span>
              </Link>
            </li>
            <li>
              <Link href="/menswear/formal">
                <span className="hover:underline">Formal</span>
              </Link>
            </li>
            <li>
              <Link href="/menswear/party">
                <span className="hover:underline">Party</span>
              </Link>
            </li>
            <li>
              <Link href="/menswear/business">
                <span className="hover:underline">Business</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 4: Womenswear Links */}
        <div className="w-full md:w-1/5">
          <h3 className="text-lg font-semibold mb-3">Womenswear</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/womenswear/casual">
                <span className="hover:underline">Casual</span>
              </Link>
            </li>
            <li>
              <Link href="/womenswear/formal">
                <span className="hover:underline">Formal</span>
              </Link>
            </li>
            <li>
              <Link href="/womenswear/party">
                <span className="hover:underline">Party</span>
              </Link>
            </li>
            <li>
              <Link href="/womenswear/business">
                <span className="hover:underline">Business</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 5: Kidswear Links */}
        <div className="w-full md:w-1/5">
          <h3 className="text-lg font-semibold mb-3">Kidswear</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/kidswear/casual">
                <span className="hover:underline">Casual</span>
              </Link>
            </li>
            <li>
              <Link href="/kidswear/formal">
                <span className="hover:underline">Formal</span>
              </Link>
            </li>
            <li>
              <Link href="/kidswear/party">
                <span className="hover:underline">Party</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container text-black mx-auto flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0 text-center md:text-left">
        {/* Left Section: Links */}
        <div className="text-sm space-x-4">
          <Link href="/terms-and-conditions">
            <span className="hover:underline">Terms & Conditions</span>
          </Link>
          <Link href="/privacy-policy">
            <span className="hover:underline">Privacy Policy</span>
          </Link>
        </div>

        {/* Center Section: Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4 text-xl">
          <Link href="https://facebook.com">
            <span rel="noreferrer">
              <FaFacebookF />
            </span>
          </Link>
          <Link href="https://github.com">
            <span rel="noreferrer">
              <FaGithub />
            </span>
          </Link>
          <Link href="https://linkedin.com">
            <span rel="noreferrer">
              <FaLinkedinIn />
            </span>
          </Link>
        </div>

        {/* Right Section: Empty (No copyright) */}
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
