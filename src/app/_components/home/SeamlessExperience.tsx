import React from "react";

const SeamlessExperience: React.FC = () => {
  return (
    <section className="py-12 mx-[1%] md:mx-[2.5%] bg-white">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">SEAMLESS EXPERIENCE.</h2>
        <p className="text-gray-500 mb-6">
          At Klothink, we&apos;ve designed a straightforward shopping experience
          to make fashion accessible. Explore the journey from discovering the
          latest trends to receiving your handpicked styles with ease.
        </p>

        {/* How it Works Steps */}
        <div className="flex flex-wrap gap-8 justify-between mx-auto">
          <div className="bg-gray-50 mx-auto p-6 rounded-lg shadow-md w-[300px]">
            <div className="text-5xl font-extrabold text-gray-200 mb-4">01</div>
            <h3 className="text-xl font-semibold mb-2">Discover Trends</h3>
            <p className="text-gray-500">
              Explore our curated collection of over 1000 styles.
            </p>
          </div>

          <div className="bg-gray-50 mx-auto p-6 rounded-lg shadow-md w-[300px]">
            <div className="text-5xl font-extrabold text-gray-200 mb-4">02</div>
            <h3 className="text-xl font-semibold mb-2">Secure Checkout</h3>
            <p className="text-gray-500">
              Add your items to the cart and proceed to our secure checkout.
            </p>
          </div>

          <div className="bg-gray-50 mx-auto p-6 rounded-lg shadow-md w-[300px]">
            <div className="text-5xl font-extrabold text-gray-200 mb-4">03</div>
            <h3 className="text-xl font-semibold mb-2">Swift Dispatch</h3>
            <p className="text-gray-500">
              Experience 95% same-day dispatch on orders.
            </p>
          </div>

          <div className="bg-gray-50 mx-auto p-6 rounded-lg shadow-md w-[300px]">
            <div className="text-5xl font-extrabold text-gray-200 mb-4">04</div>
            <h3 className="text-xl font-semibold mb-2">Unbox Happiness</h3>
            <p className="text-gray-500">
              Receive your carefully packaged Klothink order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeamlessExperience;
