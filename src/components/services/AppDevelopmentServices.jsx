import React from "react";
import { 
  FaApple, 
  FaAndroid, 
  FaMobileAlt, 
  FaTabletAlt, 
  FaCode, 
  FaRocket, 
  FaGlobe,
  FaUnity,
  FaReact,
  FaTools,
  FaSync,
  FaLaptopCode
} from "react-icons/fa";

// App development services with animated icons
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: () => (
      <div className="relative group">
        <FaApple size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaMobileAlt size={18} className="text-secondary animate-pulse" />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaCode size={16} className="text-primary" />
        </div>
      </div>
    ),
    description:
      "Professional iOS app development using Swift and SwiftUI with native performance optimization, secure data handling, and seamless Apple ecosystem integration for exceptional user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: () => (
      <div className="relative group">
        <FaAndroid size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaMobileAlt size={18} className="text-secondary animate-pulse" />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaTools size={16} className="text-primary" />
        </div>
      </div>
    ),
    description:
      "Custom Android application development using Kotlin and Java with Material Design implementation, Google services integration, and optimization for diverse device compatibility.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: () => (
      <div className="relative group">
        <FaReact size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaRocket size={18} className="text-secondary animate-pulse" />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaGlobe size={16} className="text-primary" />
        </div>
      </div>
    ),
    description:
      "Cross-platform Flutter app development with native-like performance, custom widget creation, state management solutions, and optimized UI rendering for consistent experiences across iOS and Android.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: () => (
      <div className="relative group">
        <FaLaptopCode size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaTabletAlt size={18} className="text-secondary animate-pulse" />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaSync size={16} className="text-primary animate-spin-slow" />
        </div>
      </div>
    ),
    description:
      "Efficient hybrid app development using React Native and Ionic frameworks with native plugin integration, shared codebase management, and performance optimization for multi-platform deployment.",
  },
];

const AppDevelopmentServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {appDevelopmentServices.map((service) => (
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

export default AppDevelopmentServices;