import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.webp";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="About Us" />
      <section className="text-primary_text wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Welcome to Techno Rich
              </h2>
              <p className="desc">
                At{" "}
                <span className="font-semibold text-primary">
                  Techno Rich
                </span>
                , we’re passionate about helping businesses succeed in an
                increasingly digital world. Our broad range of services—from
                Blockchain Development to Mobile App Development, Robotic
                Process Automation (RPA) to Artificial Intelligence (AI)—is
                designed to drive innovation and streamline operations. We
                partner with you to build customized solutions that elevate your
                business, improve efficiency, and enable future growth.
                <br />
                <br /> Our team of dedicated experts is here to ensure that your
                company remains at the forefront of technological advancements.
                Whether you’re a startup or a well-established business, we
                provide the tools, expertise, and support needed to turn your
                ideas into impactful digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <TrustWorthySection />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;
