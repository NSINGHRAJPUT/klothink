import React from "react";

const features = [
  {
    title: "Passionate Craftsmanship",
    description:
      "Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.",
    icon: "🧵", // You can replace these with actual icons
  },
  {
    title: "Fashion Forward",
    description:
      "We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence.",
    icon: "👗",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "At Klothink, our customers are at the heart of everything we do. Your satisfaction is our measure of success.",
    icon: "❤️",
  },
  {
    title: "Global Inspiration",
    description:
      "Influenced by global trends, we bring you a diverse and dynamic collection.",
    icon: "🌍",
  },
  {
    title: "Empowering Your Style",
    description:
      "Beyond clothing, Klothink is a lifestyle. Join us on a journey of self-expression.",
    icon: "🌟",
  },
  {
    title: "Sustainable Practices",
    description:
      "Klothink is committed to sustainability, integrating eco-friendly practices into our production process.",
    icon: "🌱",
  },
];

const KlothinkExperience: React.FC = () => {
  return (
    <section className="py-12 mx-[1%] md:mx-[2.5%] bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">THE KLOTHINK EXPERIENCE.</h2>
        <p className="text-gray-500 mb-8">
          At Klothink, we breathe life into fashion, blending creativity with
          commitment. Our journey is fueled by a dedication to delivering
          unparalleled style and quality. Join us in redefining fashion and
          embracing a community where every purchase tells a story.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-sm bg-gray-50"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KlothinkExperience;
