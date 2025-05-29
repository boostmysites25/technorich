import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AnimatedContactButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showShine, setShowShine] = useState(false);

  // Start the pulse animation when component mounts
  useEffect(() => {
    // Pulse animation
    const pulseInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1500);
    }, 4000);

    // Shine effect animation
    const shineInterval = setInterval(() => {
      setShowShine(true);
      setTimeout(() => setShowShine(false), 1500);
    }, 6000);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(shineInterval);
    };
  }, []);

  return (
    <div className="flex justify-center w-full my-8" data-aos="fade-up">
      <Link
        to="/contact-us"
        className={`
          relative flex items-center justify-center gap-2 px-8 py-4 
          overflow-hidden text-sm rounded-full group
          bg-gradient-to-r from-white via-secondary to-white
          gradient-animate
          text-primary
          hover:scale-105 transition-all duration-300
          shadow-lg hover:shadow-xl
          ${isAnimating ? "animate-pulse" : ""}
          ${showShine ? "shine-effect" : ""}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background effect */}
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-96 group-hover:h-96 opacity-10"></span>

        {/* Icon with animation */}
        <MessageCircle
          className={`mr-2 transition-transform duration-300 ${
            isHovered ? "animate-bounce scale-110" : ""
          }`}
          size={20}
        />

        {/* Text with letter spacing animation on hover */}
        <span
          className={`relative transition-all duration-300 ${
            isHovered ? "tracking-wider" : ""
          }`}
        >
          Book A Free Consultation
        </span>

        {/* Animated rings */}
        <span
          className={`absolute inset-0 w-full h-full border-2 border-white rounded-full ${
            isAnimating ? "animate-ping opacity-30" : "opacity-0"
          }`}
        ></span>
        <span
          className={`absolute inset-0 w-full h-full border-2 border-white rounded-full ${
            isAnimating ? "animate-ping opacity-20" : "opacity-0"
          }`}
          style={{ animationDelay: "300ms" }}
        ></span>

        {/* Additional decorative elements */}
        <span className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-ping"></span>
        <span
          className="absolute bottom-0 left-0 w-2 h-2 bg-white rounded-full animate-ping"
          style={{ animationDelay: "1500ms" }}
        ></span>
      </Link>
    </div>
  );
};

export default AnimatedContactButton;
