"use client";

import React, { useState } from "react";
import { StaticImageData } from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import c1 from "../../../assets/c1.png";
import c2 from "../../../assets/c2.png";
import c3 from "../../../assets/c3.png";
import c4 from "../../../assets/c4.png";
import c5 from "../../../assets/c5.png";
import Slider from "./Slider";
import "../css/Slider.css";
import "../css/base.css";

interface Product {
  id: number;
  name: string;
  price: string;
  image: StaticImageData;
  category: "Menswear" | "Womenswear" | "Kidswear";
  tag: "Casual" | "Formal" | "Party";
}

// Updated products data for each category and tag
const products: Product[] = [
  {
    id: 1,
    name: "Classic Denim Jeans",
    price: "$49.99",
    image: c1,
    category: "Menswear",
    tag: "Casual",
  },
  {
    id: 2,
    name: "Cozy Comfort Hoodie",
    price: "$39.99",
    image: c2,
    category: "Menswear",
    tag: "Casual",
  },
  {
    id: 3,
    name: "Classic Polo Shirt",
    price: "$29.99",
    image: c3,
    category: "Menswear",
    tag: "Casual",
  },
  {
    id: 4,
    name: "Chino Pants",
    price: "$44.99",
    image: c4,
    category: "Menswear",
    tag: "Casual",
  },
  {
    id: 5,
    name: "Slim Fit Suit",
    price: "$79.99",
    image: c5,
    category: "Menswear",
    tag: "Party",
  },

  {
    id: 6,
    name: "Floral Summer Dress",
    price: "$59.99",
    image: c3,
    category: "Womenswear",
    tag: "Casual",
  },
  {
    id: 7,
    name: "Elegant Evening Gown",
    price: "$99.99",
    image: c5,
    category: "Womenswear",
    tag: "Party",
  },
  {
    id: 8,
    name: "Professional Blazer",
    price: "$89.99",
    image: c1,
    category: "Womenswear",
    tag: "Formal",
  },
  {
    id: 9,
    name: "Casual Tank Top",
    price: "$19.99",
    image: c2,
    category: "Womenswear",
    tag: "Casual",
  },
  {
    id: 10,
    name: "Office Skirt",
    price: "$49.99",
    image: c4,
    category: "Womenswear",
    tag: "Formal",
  },

  {
    id: 11,
    name: "Kids Denim Jacket",
    price: "$34.99",
    image: c1,
    category: "Kidswear",
    tag: "Casual",
  },
  {
    id: 12,
    name: "Kids Party Dress",
    price: "$44.99",
    image: c3,
    category: "Kidswear",
    tag: "Party",
  },
  {
    id: 13,
    name: "Kids T-shirt",
    price: "$24.99",
    image: c4,
    category: "Kidswear",
    tag: "Casual",
  },
  {
    id: 14,
    name: "Kids Suit",
    price: "$54.99",
    image: c5,
    category: "Kidswear",
    tag: "Formal",
  },
  {
    id: 15,
    name: "Kids Sweater",
    price: "$29.99",
    image: c2,
    category: "Kidswear",
    tag: "Casual",
  },
];

const OPTIONS: EmblaOptionsType = { loop: true };

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    "Menswear" | "Womenswear" | "Kidswear"
  >("Menswear");
  const [activeTag, setActiveTag] = useState<"Casual" | "Formal" | "Party">(
    "Casual"
  );

  // Filter products based on active category and active tag
  const filteredProducts = products.filter(
    (product) =>
      product.category === activeCategory && product.tag === activeTag
  );

  return (
    <section className="mx-[1%] md:mx-[2.5%] py-10 md:py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Discover Fashion.</h1>
        <p className="text-gray-500 max-w-xl mx-auto mt-2">
          Dive into a world of fashion innovation at Klothink. Our carefully
          curated collections bring together the latest trends and timeless
          classics, ensuring you find the perfect pieces for every occasion.
        </p>
        <button className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-full shadow hover:bg-yellow-600">
          View All Products
        </button>
      </div>

      {/* Categories Filter */}
      <div className="flex justify-center space-x-6 mb-6 border-b pb-4">
        <button
          onClick={() => setActiveCategory("Menswear")}
          className={`${
            activeCategory === "Menswear"
              ? "text-black font-bold"
              : "text-gray-400"
          }`}
        >
          Menswear
        </button>
        <button
          onClick={() => setActiveCategory("Womenswear")}
          className={`${
            activeCategory === "Womenswear"
              ? "text-black font-bold"
              : "text-gray-400"
          }`}
        >
          Womenswear
        </button>
        <button
          onClick={() => setActiveCategory("Kidswear")}
          className={`${
            activeCategory === "Kidswear"
              ? "text-black font-bold"
              : "text-gray-400"
          }`}
        >
          Kidswear
        </button>
      </div>

      {/* Tags Filter */}
      <div className="flex justify-center space-x-4 mb-10">
        <button
          onClick={() => setActiveTag("Casual")}
          className={`px-4 py-2 rounded-full border ${
            activeTag === "Casual"
              ? "border-black text-black"
              : "border-gray-300 text-gray-400"
          }`}
        >
          Casual
        </button>
        <button
          onClick={() => setActiveTag("Formal")}
          className={`px-4 py-2 rounded-full border ${
            activeTag === "Formal"
              ? "border-black text-black"
              : "border-gray-300 text-gray-400"
          }`}
        >
          Formal
        </button>
        <button
          onClick={() => setActiveTag("Party")}
          className={`px-4 py-2 rounded-full border ${
            activeTag === "Party"
              ? "border-black text-black"
              : "border-gray-300 text-gray-400"
          }`}
        >
          Party
        </button>
      </div>

      {/* Product Carousel */}
      <div className="flex w-full justify-center items-center ">
        {/* Product List */}
        <div className="flex w-full">
          <Slider slides={filteredProducts} options={OPTIONS} />
          {/* {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-48 bg-white p-4 rounded-lg shadow-md"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={250}
                className="object-contain w-full"
              />
              <h3 className="mt-4 text-sm font-bold">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
              <button className="bg-yellow-500 text-white mt-4 w-full py-2 rounded-full shadow hover:bg-yellow-600">
                🛒
              </button>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
