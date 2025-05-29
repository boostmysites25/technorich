import React, { useEffect, useState } from "react";
import vid from "../assets/vids/banner.mp4";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import WorkProcess from "../components/WorkProcess";
import ReactPlayer from "react-player";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import AnimatedContactButton from "../components/website/AnimatedContactButton";
import FAQ from "../components/FAQ";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRobot,
  FaBrain,
  FaGamepad,
  FaCloud,
  FaDatabase,
  FaCogs,
  FaReact,
  FaNodeJs,
  FaApple,
  FaAndroid,
  FaFigma,
  FaSketch,
  FaRocket,
  FaMicrochip,
  FaUnity,
  FaPlaystation,
  FaComments,
  FaHeadset,
  FaAws,
  FaServer,
  FaChartBar,
  FaChartLine,
  FaCog,
  FaTools,
  FaNetworkWired,
  FaExchangeAlt,
} from "react-icons/fa";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

// Services Slider Component
const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    animationEnded(s) {
      // Add animation end handling if needed
    },
  });

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [instanceRef]);

  // Service items data with all 10 services
  const serviceItems = [
    {
      icon: () => (
        <div className="relative group">
          <FaLaptopCode size={40} className="text-secondary" />
          <div className="absolute -bottom-1 -right-1">
            <FaReact size={20} className="text-background animate-spin-slow" />
          </div>
          <div className="absolute -top-1 -left-1">
            <FaNodeJs size={16} className="text-background animate-pulse" />
          </div>
        </div>
      ),
      title: "Web Development",
      description:
        "Design and develop responsive, SEO-friendly websites that effectively represent your brand and engage your audience.",
    },
    {
      icon: () => (
        <div className="relative group">
          <FaMobileAlt size={40} className="text-secondary" />
          <div className="absolute -bottom-1 -right-1">
            <FaApple size={18} className="text-background" />
          </div>
          <div className="absolute -top-1 -left-1">
            <FaAndroid size={18} className="text-background animate-pulse" />
          </div>
        </div>
      ),
      title: "Mobile App Development",
      description:
        "Develop robust, user-friendly mobile apps for iOS and Android platforms that meet your business needs.",
    },
    {
      icon: () => (
        <div className="relative group">
          <FaPaintBrush size={40} className="text-secondary" />
          <div className="absolute -bottom-1 -right-1">
            <FaFigma size={18} className="text-background animate-pulse" />
          </div>
          <div className="absolute -top-1 -left-1">
            <FaSketch size={16} className="text-background" />
          </div>
        </div>
      ),
      title: "UI and UX Design",
      description:
        "Create intuitive and visually appealing user interfaces and experiences that enhance usability and customer satisfaction.",
    },
    {
      icon: () => (
        <div className="relative group">
          <FaBrain size={40} className="text-secondary" />
          <div className="absolute -bottom-1 -right-1">
            <FaRocket size={18} className="text-background animate-pulse" />
          </div>
          <div className="absolute -top-1 -left-1">
            <FaMicrochip size={16} className="text-background animate-pulse" />
          </div>
        </div>
      ),
      title: "Artificial Intelligence Development",
      description:
        "Harness the power of AI to innovate and automate processes, driving efficiency and intelligent decision-making.",
    },
    {
      icon: () => (
        <div className="relative group">
          <FaGamepad size={40} className="text-secondary" />
          <div className="absolute -bottom-1 -right-1">
            <FaUnity size={18} className="text-background animate-pulse" />
          </div>
          <div className="absolute -top-1 -left-1">
            <FaPlaystation size={16} className="text-background" />
          </div>
        </div>
      ),
      title: "Game Development",
      description:
        "Creating immersive and engaging gaming experiences through advanced design, development, and technology for various platforms and audiences.",
    },
    {
      icon: () => (
        <div className="relative group">
          <FaCloud size={40} className="text-secondary" />
          <div className="absolute -bottom-1 -right-1">
            <FaAws size={18} className="text-background animate-pulse" />
          </div>
          <div className="absolute -top-1 -left-1">
            <FaServer size={16} className="text-background" />
          </div>
        </div>
      ),
      title: "Cloud Computing Services",
      description:
        "Leverage cloud technology to enhance scalability, flexibility, and efficiency in your business operations.",
    },
    {
      icon: () => (
        <div className="relative group">
          <FaDatabase size={40} className="text-secondary" />
          <div className="absolute -bottom-1 -right-1">
            <FaChartBar size={18} className="text-background animate-pulse" />
          </div>
          <div className="absolute -top-1 -left-1">
            <FaChartLine size={16} className="text-background" />
          </div>
        </div>
      ),
      title: "Data Science Services",
      description:
        "Transform data into actionable insights with our comprehensive data science services.",
    },
    {
      icon: () => (
        <div className="relative group">
          <FaCogs size={40} className="text-secondary" />
          <div className="absolute -bottom-1 -right-1">
            <FaCog size={18} className="text-background animate-spin-slow" />
          </div>
          <div className="absolute -top-1 -left-1">
            <FaTools size={16} className="text-background" />
          </div>
        </div>
      ),
      title: "Robotic Process Automation (RPA)",
      description:
        "Automate repetitive tasks and streamline business processes with our RPA solutions.",
    },
    {
      icon: () => (
        <div className="relative group">
          <FaRobot size={40} className="text-secondary" />
          <div className="absolute -bottom-1 -right-1">
            <FaComments size={18} className="text-background animate-pulse" />
          </div>
          <div className="absolute -top-1 -left-1">
            <FaHeadset size={16} className="text-background" />
          </div>
        </div>
      ),
      title: "Natural Language Processing (NLP)",
      description:
        "Enhance customer interactions and insights with our advanced NLP solutions.",
    },
    {
      icon: () => (
        <div className="relative group">
          <FaCloud size={40} className="text-secondary" />
          <div className="absolute -bottom-1 -right-1">
            <FaNetworkWired
              size={18}
              className="text-background animate-pulse"
            />
          </div>
          <div className="absolute -top-1 -left-1">
            <FaExchangeAlt size={16} className="text-background" />
          </div>
        </div>
      ),
      title: "Cloud Migration Services",
      description:
        "Seamlessly migrate your existing infrastructure to the cloud with minimal disruption.",
    },
  ];

  return (
    <>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {serviceItems.map((service, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[4rem] h-[4rem] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {typeof service.icon === "function" ? (
                      <service.icon />
                    ) : (
                      service.icon
                    )}
                  </div>
                  <p className="text-lg leading-tight font-medium group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </p>
                </div>
                <p className="desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <>
            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(serviceItems.length).keys()].map((idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === idx
                      ? "bg-primary scale-125"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen banner relative text-primary_text">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background via-background/10 to-background">
          <div
            data-aos="fade-up"
            className="wrapper text-center flex flex-col gap-4 justify-center items-center h-full relative z-10"
          >
            <p className="sub-heading">
              Welcome to{" "}
              <span className="text-primary font-semibold block sm:inline">
                Techno Rich
              </span>
            </p>
            <h1 className="heading capitalize">
              Shaping the Future with Cutting-Edge Technology
            </h1>
            <p className="sub-heading max-w-6xl">
              We are a leading provider of cutting-edge technology solutions,
              dedicated to revolutionizing industries and driving innovation.
            </p>
          </div>
        </div>
        <ReactPlayer
          url={vid}
          playing
          muted
          playsinline
          loop
          pip={false}
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                },
              },
            },
          }}
        />
      </section>
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6"
      >
        <ServicesSlider />
      </div>
      <section className="">
        <div className="wrapper py-[3rem]">
          <div className="grid lg:grid-cols-2 gap-10 mt-7">
            <div data-aos="fade-up" className="hidden lg:flex flex-col">
              <img
                loading="lazy"
                src={aboutImg}
                width="600"
                height="400"
                className="object-cover rounded-lg w-full h-full aspect-video object-center"
                alt=""
              />
            </div>
            <div
              data-aos="fade-up"
              className="flex h-full items-start flex-col gap-7"
            >
              <div className="flex flex-col items-start gap-5 text-start">
                <SubHeading heading="About Us" />
                <div
                  data-aos="fade-up"
                  className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
                >
                  <img
                    loading="lazy"
                    src={aboutImg}
                    width="200"
                    height="200"
                    className="object-cover h-full object-center rounded-lg w-full"
                    alt=""
                  />
                </div>
                <h2 className="heading-2 max-w-[60rem]">
                  Transforming Visions into Reality
                </h2>
                <p className="desc">
                  At{" "}
                  <span className="font-medium text-primary">
                    Techno Rich
                  </span>
                  , we’re passionate about helping businesses succeed in an
                  increasingly digital world. Our broad range of services—from
                  Blockchain Development to Mobile App Development, Robotic
                  Process Automation (RPA) to Artificial Intelligence (AI)—is
                  designed to drive innovation and streamline operations. We
                  partner with you to build customized solutions that elevate
                  your business, improve efficiency, and enable future growth.{" "}
                  <br />
                  <br />
                  Our team of dedicated experts is here to ensure that your
                  company remains at the forefront of technological
                  advancements. Whether you’re a startup or a well-established
                  business, we provide the tools, expertise, and support needed
                  to turn your ideas into impactful digital solutions.
                </p>
              </div>
              <div className="w-fit mt-4 justify-start">
                <Link to="/about-us" className="primary-btn">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllServices isSlider={true} />
      <WorkProcess />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <TrustWorthySection />
      <div className="wrapper pt-6">
        <AnimatedContactButton />
      </div>
      <Testimonials />
      <JoinHappyCustomers />
      <FAQ />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
