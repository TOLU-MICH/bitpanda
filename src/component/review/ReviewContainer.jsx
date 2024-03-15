import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import ReviewItem from "./ReviewItem";
import arrow from "../../assets/arrow.svg";

const ReviewContainer = () => {
  const [visibleSlides, setVisibleSlides] = React.useState(1);

  // Adjust the number of visible slides based on screen width
  React.useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setVisibleSlides(1); // Mobile: Show 1 slide
      } else {
        setVisibleSlides(3); // Laptops: Show 4 slides
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
    <section className="w-full md:block hidden">
      <CarouselProvider
        visibleSlides={visibleSlides}
        totalSlides={6}
        step={1}
        naturalSlideWidth={700}
        naturalSlideHeight={250}
        className="w-[80%] mx-auto relative"
      >
        <ButtonBack className="absolute -left-14 top-8">
          <img src={arrow} alt="" className="w-8" />
        </ButtonBack>
        <Slider>
          <Slide index={0}>
            <ReviewItem />
          </Slide>
          <Slide index={1}>
            <ReviewItem />
          </Slide>
          <Slide index={2}>
            <ReviewItem />
          </Slide>
          <Slide index={3}>
            <ReviewItem />
          </Slide>
          <Slide index={4}>
            <ReviewItem />
          </Slide>
        </Slider>
        <ButtonNext>
          <img
            src={arrow}
            alt=""
            className="w-8 rotate-180 absolute right-8 top-8"
          />
        </ButtonNext>
      </CarouselProvider>
      <p>Showing our 5 star reviews</p>
    </section>
  );
};

export default ReviewContainer;
