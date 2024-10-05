import Image from "next/image";
import c1 from "../../../assets/c1.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-around items-center px-4 md:px-10 py-10 md:py-20 bg-white">
      {/* Left Section - Heading and Description */}
      <div className="flex flex-col space-y-4 md:space-y-6 max-w-full md:max-w-lg">
        <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
          Elevate Your Style with Klothink
        </h1>
        <p className="text-gray-500 text-center md:text-left">
          Explore a world of fashion at Klothink, where trends meet
          affordability. Immerse yourself in the latest styles and seize
          exclusive promotions.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-full shadow hover:bg-yellow-600">
            Shop Now
          </button>
          <button className="border border-black text-black px-6 py-2 rounded-full hover:bg-gray-100">
            Contact Us
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 md:gap-4 mt-6">
          <div className="text-center border p-2 md:p-4 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-bold">OVER 1000+</h3>
            <p className="text-gray-500 text-sm md:text-base">
              Trendsetting Styles
            </p>
          </div>
          <div className="text-center border p-2 md:p-4 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-bold">99%</h3>
            <p className="text-gray-500 text-sm md:text-base">
              Customer Satisfaction Rate
            </p>
          </div>
          <div className="text-center border p-2 md:p-4 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-bold">24/7</h3>
            <p className="text-gray-500 text-sm md:text-base">
              Shopping Convenience
            </p>
          </div>
          <div className="text-center border p-2 md:p-4 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-bold">30-DAY</h3>
            <p className="text-gray-500 text-sm md:text-base">
              Hassle-Free Returns
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Image and Details */}
      <div className="relative mt-10 md:mt-0 max-w-[400px] max-h-[500px]">
        <Image
          src={c1}
          alt="Yellow Jacket"
          width={400}
          height={500}
          className="object-cover w-full md:w-auto"
        />
        {/* Labels
        <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-full shadow-sm text-xs">
          Best Seller
        </div>
        <div className="absolute top-20 left-4 bg-white px-2 py-1 rounded-full shadow-sm text-xs">
          Casual Jacket
        </div>
        <div className="absolute top-36 left-4 bg-white px-2 py-1 rounded-full shadow-sm text-xs">
          Hoodie
        </div>
        <div className="absolute bottom-20 left-4 bg-white px-2 py-1 rounded-full shadow-sm text-xs">
          Full Sleeve
        </div> */}

        {/* Uncomment the below sections if you want to add color swatches, sizes, and navigation buttons */}
        {/* 
        <div className="flex space-x-2 absolute bottom-10 left-4">
          <span className="block w-4 h-4 bg-yellow-500 rounded-full"></span>
          <span className="block w-4 h-4 bg-blue-500 rounded-full"></span>
          <span className="block w-4 h-4 bg-gray-500 rounded-full"></span>
        </div>

        <div className="absolute bottom-10 right-4 space-x-2">
          <span className="px-2 py-1 bg-gray-200 rounded">S</span>
          <span className="px-2 py-1 bg-gray-200 rounded">M</span>
          <span className="px-2 py-1 bg-gray-200 rounded">L</span>
          <span className="px-2 py-1 bg-gray-200 rounded">XL</span>
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button className="bg-black text-white rounded-full p-2">❮</button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button className="bg-black text-white rounded-full p-2">❯</button>
        </div>
        */}
      </div>
    </div>
  );
};

export default Hero;
