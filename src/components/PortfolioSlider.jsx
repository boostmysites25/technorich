import React, { useState } from "react";
import SubHeading from "./SubHeading";
import { appPortfolio, webPortfolio } from "../constant";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
const animation = { duration: 25000, easing: (t) => t };

const PortfolioSlider = ({ page }) => {
  let portfolioList;
  const isWeb = page === "web-development";

  if (isWeb) {
    portfolioList = webPortfolio;
  } else {
    portfolioList = appPortfolio;
  }

  // Configure the keen-slider with autoplay
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: () => {
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth < 1024) return 2;
        if (window.innerWidth < 1280) return 3;
        return 4;
      },
      spacing: 16,
    },

    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="py-[5rem]">
      <div className="wrapper flex flex-col items-start sm:items-center gap-5">
        <SubHeading heading="Our Portfolio" />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-start sm:text-center"
        >
          Discover Our Projects
        </h2>
      </div>

      {/* Keen Slider for automatic sliding */}
      <div data-aos="fade-up" className="w-full mt-8 overflow-visible">
        <div ref={sliderRef} className="keen-slider">
          {portfolioList
            .concat(portfolioList)
            .map(({ img, id, title, link }) => (
              <div key={id} className="keen-slider__slide">
                <div className="!p-3 border-2 border-secondary group rounded-xl aspect-square shadow-inner_shadow shadow-secondary/20 transform transition-all duration-300 overflow-hidden">
                  <div className="overflow-hidden relative h-full rounded-xl">
                    <div className="absolute z-[5] top-0 w-full h-full bg-gradient-to-b from-transparent to-primary/20"></div>
                    <img
                      loading="lazy"
                      src={img}
                      width="200"
                      height="200"
                      className={`-z-10 h-full w-full object-cover group-hover:scale-110 transition-all duration-200 rounded-xl group-hover:-translate-y-2`}
                      alt={title}
                    />
                    <h3 className="text-xl z-20 absolute p-3 bottom-0 left-0 w-full bg-primary text-center text-white hover:text-secondary">
                      <Link to={link} target="_blank">
                        {title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;
