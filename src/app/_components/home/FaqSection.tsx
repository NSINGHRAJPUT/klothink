"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const categories = [
  "ALL",
  "ORDERING",
  "SHIPPING",
  "RETURNS",
  "CUSTOMER SUPPORT",
];

const faqs: FAQItem[] = [
  {
    question: "Can I modify my order after placing it?",
    answer:
      "Unfortunately, once an order is placed, it cannot be modified. You may cancel the order if it hasn't shipped yet.",
    category: "ORDERING",
  },
  {
    question: "How do I initiate a return?",
    answer:
      "To initiate a return, log into your account, go to your order history, and follow the steps to process the return.",
    category: "RETURNS",
  },
  {
    question: "How can I unsubscribe from the newsletter?",
    answer:
      "You can unsubscribe by clicking the 'Unsubscribe' link at the bottom of any newsletter email.",
    category: "CUSTOMER SUPPORT",
  },
  {
    question: "Do you offer exchanges for products?",
    answer:
      "Yes, we offer exchanges for certain products. Please visit our exchange policy page for more details.",
    category: "RETURNS",
  },
  {
    question: "How can I place an order on Klothink?",
    answer:
      "Ordering is easy! Browse our website, add items to your cart, and proceed to checkout. Follow the prompts to complete your purchase.",
    category: "ORDERING",
  },
  {
    question: "Are there any additional fees for returns?",
    answer:
      "There are no additional fees for returns, but shipping costs may not be refundable.",
    category: "RETURNS",
  },
  {
    question: "How do I create an account on Klothink?",
    answer:
      "Click on the 'Sign Up' button at the top of our homepage and fill in your details to create an account.",
    category: "CUSTOMER SUPPORT",
  },
  {
    question: "Can I change my account information?",
    answer:
      "Yes, you can change your account information by logging into your profile and editing the relevant details.",
    category: "CUSTOMER SUPPORT",
  },
  {
    question: "Are my personal details secure on Klothink?",
    answer:
      "Yes, we take privacy seriously and ensure that your personal data is securely stored and encrypted.",
    category: "CUSTOMER SUPPORT",
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const filteredFaqs =
    selectedCategory === "ALL"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <section className="py-12 mx-[1%] md:mx-[2.5%] bg-white">
      <div className="container mx-auto">
        {/* FAQ Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            QUESTIONS? WE HAVE ANSWERS.
          </h2>
          <p className="text-gray-500">
            Ease into the world of Klothink with clarity. Our FAQs cover a
            spectrum of topics, ensuring you have the information you need for a
            seamless shopping experience.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-sm bg-gray-50"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-2xl">
                  {activeIndex === index ? "✖️" : "➕"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
