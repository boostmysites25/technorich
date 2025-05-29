import React from "react";
import { 
  FaShoppingCart, 
  FaCreditCard, 
  FaUsers, 
  FaShareAlt, 
  FaFileAlt, 
  FaBullseye, 
  FaCode,
  FaLaptopCode,
  FaComments,
  FaChartLine,
  FaReact,
  FaNodeJs
} from "react-icons/fa";

// Web development services with animated icons
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: () => (
      <div className="relative group">
        <FaShoppingCart size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaCreditCard size={18} className="text-secondary animate-pulse" />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaLaptopCode size={16} className="text-primary" />
        </div>
      </div>
    ),
    description:
      "Custom e-commerce website development with secure payment gateways, inventory management, and mobile-responsive design to maximize online sales and revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: () => (
      <div className="relative group">
        <FaUsers size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaShareAlt size={18} className="text-secondary animate-pulse" />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaComments size={16} className="text-primary" />
        </div>
      </div>
    ),
    description:
      "Engaging social media platform development with real-time interaction features, user authentication, content sharing capabilities, and advanced community management tools.",
  },
  {
    id: 3,
    title: "Landing Pages",
    icon: () => (
      <div className="relative group">
        <FaFileAlt size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaChartLine size={18} className="text-secondary animate-pulse" />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaBullseye size={16} className="text-primary" />
        </div>
      </div>
    ),
    description:
      "High-converting landing page development with A/B testing capabilities, optimized call-to-actions, fast loading speeds, and analytics integration for maximum lead generation.",
  },
  {
    id: 4,
    title: "Custom Web Applications",
    icon: () => (
      <div className="relative group">
        <FaCode size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaReact size={18} className="text-secondary animate-spin-slow" />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaNodeJs size={16} className="text-primary animate-pulse" />
        </div>
      </div>
    ),
    description:
      "Bespoke web application development using modern frameworks like React, Angular, or Vue.js with scalable architecture, robust security, and seamless third-party integrations.",
  },
];

const WebDevelopmentServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {webDevelopmentServices.map((service) => (
        <div
          key={service.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 flex items-center justify-center">
              {typeof service.icon === "function" ? (
                <service.icon />
              ) : (
                service.icon
              )}
            </div>
            <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
          </div>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WebDevelopmentServices;