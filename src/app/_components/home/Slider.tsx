import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  image: StaticImageData;
  category: "Menswear" | "Womenswear" | "Kidswear";
  tag: "Casual" | "Formal" | "Party";
}

type PropType = {
  slides: Product[]; // Update this to accept an array of Product objects
  options?: EmblaOptionsType;
  autoplayDelay?: number; // Optional delay in milliseconds
};

const Slider: React.FC<PropType> = (props) => {
  const { slides, options, autoplayDelay = 3000 } = props; // default autoplay delay to 3 seconds
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Autoplay logic using useEffect
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0); // loop back to the first slide
      }
    };

    const autoplayInterval = setInterval(autoplay, autoplayDelay);

    return () => {
      clearInterval(autoplayInterval); // Clean up the interval on unmount
    };
  }, [emblaApi, autoplayDelay]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((product) => (
            <div className="embla__slide" key={product.id}>
              <div className="embla__slide__number">
                <div
                  key={product.id}
                  className="w-[80%] bg-white p-4 rounded-lg shadow-md"
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
                  <button className="bg-yellow-500 w-full h-12 text-white  py-2 rounded-full shadow hover:bg-yellow-600">
                    🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
