import React, { useState, useEffect } from "react";
import { allServices } from "../../constant";
import SubHeading from "../SubHeading";
import Drawer from "react-modern-drawer";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRobot,
  FaBrain,
  FaGamepad,
} from "react-icons/fa";

const AllServices = ({ isSlider }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Map service icons to React Icons
  const serviceIcons = {
    "Web Development": <FaLaptopCode className="text-4xl" />,
    "App Development": <FaMobileAlt className="text-4xl" />,
    "UX/UI Design": <FaPaintBrush className="text-4xl" />,
    Chatbots: <FaRobot className="text-4xl" />,
    "AI Development Solutions": <FaBrain className="text-4xl" />,
    "Game Development": <FaGamepad className="text-4xl" />,
  };

  // Configure the keen-slider with autoplay
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: () => {
          if (window.innerWidth < 640) return 1;
          if (window.innerWidth < 1024) return 2;
          return 3;
        },
        spacing: 24,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [
      // Add autoplay plugin
      (slider) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000); // Change slide every 3 seconds
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  return (
    <section className="bg-secondary/5 overflow-hidden">
      <div className="wrapper py-[5rem] flex flex-col gap-5 items-start sm:items-center">
        <SubHeading heading="Our Services" />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-start sm:text-center"
        >
          We offer a wide range of creative services
        </h2>

        {isSlider ? (
          // Keen Slider for automatic sliding
          <div data-aos="fade-up" className="w-full mt-8 overflow-visible">
            <div ref={sliderRef} className="keen-slider">
              {allServices.map((service, index) => (
                <div key={service.id} className="keen-slider__slide">
                  <div className="bg-secondary/15 hover:bg-primary group hover:text-background transition-all duration-300 rounded-lg p-5 h-full flex text-center flex-col justify-between transform hover:shadow-xl">
                    <div className="flex flex-col items-center">
                      <div className="w-[6rem] h-[6rem] flex justify-center items-center relative">
                        <div className="absolute z-[1] top-0 w-0 group-hover:w-full h-full transition-all duration-300 bg-secondary rounded-full"></div>
                        {/* Use icon from constant.js */}
                        <div className="z-[2] group-hover:text-white transition-all duration-300">
                          {typeof service.icon === "function" ? (
                            <service.icon className="z-[2] w-[4rem] h-[4rem] fill-primary group-hover:fill-white transition-colors duration-300" />
                          ) : (
                            service.icon || serviceIcons[service.title]
                          )}
                        </div>
                      </div>
                      <h6 className="text-xl font-medium mt-3">
                        {service.title}
                      </h6>
                      <p className="desc mt-2">{service.description}</p>
                    </div>
                    {service.link && (
                      <Link
                        to={service.link}
                        className="group-hover:bg-secondary text-white font-medium cursor-pointer tracking-wide bg-primary text-sm hover:shadow-primary/25 hover:-translate-y-1 shadow-large shadow-transparent rounded-lg px-4 py-3 min-w-[8rem] flex justify-center text-center transition-all duration-300 mt-5 w-fit mx-auto"
                      >
                        Know More
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {instanceRef.current &&
                [
                  ...Array(
                    instanceRef.current.track.details.slides.length
                  ).keys(),
                ].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "bg-primary w-6" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
            </div>
          </div>
        ) : (
          //  Manual grid view for smaller screens or as fallback
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service) => (
              <div
                key={service.id}
                className="bg-secondary/15 hover:bg-primary group hover:text-background transition-all duration-300 rounded-lg p-5 flex text-center flex-col justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className="w-[6rem] h-[6rem] flex justify-center items-center relative">
                    <div className="absolute z-[1] top-0 w-0 group-hover:w-full h-full transition-all duration-300 bg-secondary rounded-full"></div>
                    <div className="z-[2] group-hover:text-white transition-all duration-300">
                      {typeof service.icon === "function" ? (
                        <service.icon className="z-[2] w-[4rem] h-[4rem] fill-primary group-hover:fill-white transition-colors duration-300" />
                      ) : (
                        service.icon || serviceIcons[service.title]
                      )}
                    </div>
                  </div>
                  <h6 className="text-xl font-medium mt-3">{service.title}</h6>
                  <p className="desc mt-2">{service.description}</p>
                </div>
                {service.link ? (
                  <Link
                    to={service.link}
                    className="group-hover:bg-secondary text-white font-medium cursor-pointer tracking-wide bg-primary text-sm hover:shadow-primary/25 hover:-translate-y-1 shadow-large shadow-transparent rounded-lg px-4 py-3 min-w-[8rem] flex justify-center text-center transition-all duration-300 mt-5 w-fit mx-auto"
                  >
                    Know More
                  </Link>
                ) : (
                  <button
                    onClick={() => handleSelectServiceToShowDetail(service)}
                    className="group-hover:bg-secondary text-white font-medium cursor-pointer tracking-wide bg-primary text-sm hover:shadow-primary/25 hover:-translate-y-1 shadow-large shadow-transparent rounded-lg px-4 py-3 min-w-[8rem] flex justify-center text-center transition-all duration-300 mt-5 w-fit mx-auto"
                  >
                    Read More
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          direction="top"
          className="p-4 z-10 w-screen"
          lockBackgroundScroll
        >
          <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary_text text-[2.2rem]"
            >
              <X size={30} />
            </button>
          </div>
          <div className="wrapper flex flex-col gap-6 tex-white pb-[2rem]">
            <h1 className="heading-2">{selectedService.detailHeading}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedService.detailContent,
              }}
            ></div>
          </div>
        </Drawer>
      </div>
    </section>
  );
};

export default AllServices;
