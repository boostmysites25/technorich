import { lazy } from "react";
import vid from "../assets/vids/banner.mp4";
import SubHeading from "../components/SubHeading";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../components/services";
import TrustWorthySection from "../components/TrustWorthySection";
import appDevAboutImg from "../assets/images/landingpage/app-dev-about.webp";
import webDevAboutImg from "../assets/images/landingpage/web-dev-about.webp";
import ReactPlayer from "react-player";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const PortfolioSlider = lazy(() => import("../components/PortfolioSlider"));
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const LandingPage = ({ page }) => {
  const isWebLanding = Boolean(page === "web-development");
  let services;
  if (page === "web-development") {
    // banner = webBanner;
    services = webDevelopmentServices;
  } else {
    // banner = appBanner;
    services = appDevelopmentServices;
  }

  return (
    <>
      <LandingHeader />
      <section
        id="banner"
        className="h-screen banner relative text-primary_text"
      >
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background via-background/10 to-background">
          <div
            data-aos="fade-up"
            className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
          >
            <p className="sub-heading">
              Welcome to{" "}
              <span className="text-primary font-semibold block sm:inline">
                Techno Rich
              </span>
            </p>
            <h1 className="heading-1 whitespace-pre-line capitalize">
              {isWebLanding
                ? "Revolutionizing the Digital Landscape with Cutting-Edge Websites"
                : "Crafting Seamless Mobile Experiences with Innovative Apps"}
            </h1>
            <p className="sub-heading max-w-6xl mx-auto">
              {isWebLanding
                ? `We're dedicated to crafting captivating websites that elevate your brand's presence in today's digital landscape.`
                : `Our team of skilled developers specializes in creating innovative apps that bring your ideas to life.`}
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
      <section id="about" className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={isWebLanding ? webDevAboutImg : appDevAboutImg}
              className="object-cover h-full rounded-lg"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading
                heading={isWebLanding ? "Web Development" : "App Development"}
              />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={isWebLanding ? webDevAboutImg : appDevAboutImg}
                  className="object-cover h-full rounded-lg w-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                {isWebLanding
                  ? "Your Vision, Our Visionary Websites"
                  : "Your Vision, Our Innovative Apps"}
              </h2>
              <p className="desc">
                {isWebLanding
                  ? "Your website is more than just a place online—it's the face of your brand. We create high-performance websites that captivate visitors, drive conversions, and reflect your unique identity. With modern design, lightning-fast performance, and full responsiveness, our websites are built to impress and perform. \n Whether you need a sleek portfolio, a powerful e-commerce platform, or a custom web application, we deliver scalable, user-focused solutions tailored to your business goals."
                  : "In a mobile-first world, your app should do more than function—it should lead. We design and develop custom mobile applications that are fast, intuitive, and built to scale. Whether you need a native app for iOS or Android, or a cross-platform solution, we deliver seamless performance with sleek UI and rich features. \n From concept to launch, our apps are crafted to enhance user experience, support your business goals, and stand out in a crowded market."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading
          heading={
            isWebLanding
              ? "Web Development Services"
              : "App Development Services"
          }
        />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          {isWebLanding
            ? "Transform Your Online Presence with Our Comprehensive Web Development Services"
            : "Empower Your Business with Custom App Development Solutions"}
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              className="bg-secondary/5 shadow-inner shadow-primary/30 items-center rounded-lg p-5 flex text-center flex-col"
            >
              <service.icon className="w-[5rem] h-[5rem] fill-primary" />
              <h6 className="text-xl font-medium mt-4">{service.title}</h6>
              <p className="desc mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <PortfolioSlider page={page} />
      <WhyChooseUs />
      <ConnectWithUs />
      <Testimonials />
      <JoinHappyCustomers />
      <ContactForm />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
