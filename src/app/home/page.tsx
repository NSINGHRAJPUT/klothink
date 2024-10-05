import React from "react";
import Hero from "../_components/home/Hero";
import ProductSection from "../_components/home/ProductSection";
import KlothinkExperience from "../_components/home/KlothinkExperience";
import FaqSection from "../_components/home/FaqSection";
import SeamlessExperience from "../_components/home/SeamlessExperience";
import Footer from "../_components/home/Footer";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ProductSection />
      <KlothinkExperience />
      <FaqSection />
      <SeamlessExperience />
      <Footer />
    </div>
  );
};

export default HomePage;
