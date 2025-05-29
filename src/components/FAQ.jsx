import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SubHeading from "./SubHeading";

// FAQ data with questions and answers based on website content
const faqData = [
  {
    id: 1,
    question: "What services does Sinha AI Solutions offer?",
    answer:
      "Sinha AI Solutions offers a comprehensive range of digital services including Web Development, App Development, UX/UI Design, Chatbot Development, AI Development Solutions, and Game Development. Each service is tailored to meet specific business needs and deliver exceptional results.",
  },
  {
    id: 2,
    question: "How long does it take to develop a custom website?",
    answer:
      "The timeline for developing a custom website varies depending on complexity, features, and specific requirements. Typically, a basic website can be completed in 4-6 weeks, while more complex projects with advanced functionality may take 8-12 weeks. During our initial consultation, we'll provide a more accurate timeline based on your specific project needs.",
  },
  {
    id: 3,
    question: "Do you develop mobile apps for both iOS and Android?",
    answer:
      "Yes, we develop native apps for both iOS and Android platforms to ensure optimal performance and user experience. We also offer cross-platform solutions that work seamlessly across both platforms, reducing development time and cost without compromising quality.",
  },
  {
    id: 4,
    question:
      "What is the typical process for starting a project with Sinha AI Solutions?",
    answer:
      "Our process typically begins with an initial consultation to understand your business goals and requirements. We then create a detailed proposal outlining scope, timeline, and cost. Once approved, we move into the design phase, followed by development, testing, and deployment. Throughout the process, we maintain clear communication and provide regular updates on progress.",
  },
  {
    id: 5,
    question: "How do you ensure the security of websites and applications?",
    answer:
      "Security is a top priority in all our development projects. We implement industry-standard security measures including SSL certificates, secure authentication systems, data encryption, regular security updates, and protection against common vulnerabilities. We also conduct thorough security testing before launch and can provide ongoing security monitoring for your digital assets.",
  },
  {
    id: 6,
    question:
      "Can you help with maintaining and updating existing websites or applications?",
    answer:
      "Absolutely! We offer comprehensive maintenance and update services for existing digital products, even if they weren't originally built by us. Our team can assess your current platform, recommend improvements, fix issues, and implement new features to keep your digital presence current and effective.",
  },
  {
    id: 7,
    question: "What makes your AI solutions different from others?",
    answer:
      "Our AI solutions stand out because we focus on practical business applications rather than theoretical capabilities. We develop custom AI solutions tailored to your specific business challenges, ensuring they integrate seamlessly with your existing systems. Our team combines technical expertise with business acumen to deliver AI that drives real results, whether through intelligent automation, predictive insights, or personalized user experiences.",
  },
  {
    id: 8,
    question: "Do you provide support after the project is completed?",
    answer:
      "Yes, we offer post-launch support for all our projects. We provide various support packages ranging from basic maintenance to comprehensive ongoing development. Our team remains available to address any issues, implement updates, and ensure your digital solution continues to perform optimally as your business evolves.",
  },
];

// Individual FAQ Item component with animation
const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-primary">{question}</h3>
        <span className="text-primary ml-4">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      {/* Animated collapsible content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="p-4 pt-0 pb-5 text-gray-600">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  // State to track which FAQ item is open
  const [openItem, setOpenItem] = useState(null);

  // Toggle function for opening/closing FAQ items
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 bg-secondary/5">
      <div className="wrapper">
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <SubHeading heading="FAQ" />
          </div>
          <h2 data-aos="fade-up" className="heading-2 max-w-[60rem] mx-auto">
            Frequently Asked Questions
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-4 max-w-2xl mx-auto text-gray-600"
          >
            Find answers to common questions about our services, process, and
            solutions.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItem === faq.id}
              toggleOpen={() => toggleItem(faq.id)}
            />
          ))}
        </div>

        <div
          className="text-center mt-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact-us"
            className="secondary-btn inline-flex items-center w-fit mx-auto"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
