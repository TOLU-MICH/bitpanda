import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CryptoCard from "./CryptoCard";

const CryptoContainer = () => {
  const [visibleSlides, setVisibleSlides] = React.useState(1);

  // Adjust the number of visible slides based on screen width
  React.useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setVisibleSlides(1); // Mobile: Show 1 slide
      } else {
        setVisibleSlides(5); // Laptops: Show 4 slides
      }
    };

    // Initial setup
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <section className="py-6 md:py-20 px-[15px]">
        <h3 className="text-gray-400 font-bold text-xl md:text-center mb-5">
          Prices
        </h3>
        <h1 className="font-bold text-3xl md:text-5xl md:text-center ">
          Keep tabs on your favourite assets
        </h1>
      </section>

      <CarouselProvider
        visibleSlides={visibleSlides}
        totalSlides={6}
        step={3}
        naturalSlideWidth={700}
        naturalSlideHeight={690}
      >
        <Slider>
          <Slide index={0}>
            <CryptoCard />
          </Slide>
          <Slide index={1}>
            <CryptoCard />
          </Slide>
          <Slide index={2}>
            <CryptoCard />
          </Slide>
          <Slide index={3}>
            <CryptoCard />
          </Slide>
          <Slide index={4}>
            <CryptoCard />
          </Slide>
          {/* <Slide index={5}>
            <CryptoCard />
          </Slide> */}
          {/* <Slide index={6}>
            <CryptoCard />
          </Slide> */}
        </Slider>
      </CarouselProvider>
    </section>
  );
};

export default CryptoContainer;
