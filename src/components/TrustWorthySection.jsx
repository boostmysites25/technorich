import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaCalendarAlt, FaUsers, FaSmile, FaClipboardCheck } from "react-icons/fa";

const TrustWorthySection = React.memo(() => {
  const totalYrs = 3;
  const projectsDone = 150;
  const totalExperts = 20;
  const happlyClients = 100;

  const [yrs, setYrs] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  // Function to create easeOutExpo animation effect
  const easeOutExpo = (t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  // Function to animate counter with easing
  const animateCounter = (setter, target, duration, onComplete) => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / duration;
      
      if (elapsed >= 1) {
        setter(target);
        onComplete && onComplete();
        return;
      }
      
      const easedProgress = easeOutExpo(elapsed);
      const currentValue = Math.floor(startValue + easedProgress * (target - startValue));
      setter(currentValue);
      
      requestAnimationFrame(updateCounter);
    };
    
    updateCounter();
  };

  useEffect(() => {
    if (inView && !animationComplete) {
      // Track completion of all animations
      let completedAnimations = 0;
      const totalAnimations = 4;
      
      const checkAllComplete = () => {
        completedAnimations++;
        if (completedAnimations === totalAnimations) {
          setAnimationComplete(true);
        }
      };

      // Animate Years of Experience (slower)
      animateCounter(setYrs, totalYrs, 1500, checkAllComplete);
      
      // Animate Experts (medium speed)
      animateCounter(setExperts, totalExperts, 2000, checkAllComplete);
      
      // Animate Clients (faster)
      animateCounter(setClients, happlyClients, 2500, checkAllComplete);
      
      // Animate Projects Completed (fastest)
      animateCounter(setCompletedProjects, projectsDone, 3000, checkAllComplete);
    }
  }, [inView, animationComplete]);

  // Define stat items with their icons and animations
  const statItems = [
    {
      value: yrs,
      label: "Years of Experience",
      icon: <FaCalendarAlt className="text-3xl mb-2" />,
      animation: "animate-float animation-delay-100",
      bgAnimation: "animate-scale-pulse"
    },
    {
      value: experts,
      label: "Expert Team",
      icon: <FaUsers className="text-3xl mb-2" />,
      animation: "animate-pulse animation-delay-300",
      bgAnimation: "animate-float animation-delay-300"
    },
    {
      value: clients,
      label: "Happy Clients",
      icon: <FaSmile className="text-3xl mb-2" />,
      animation: "animate-float animation-delay-500",
      bgAnimation: "animate-scale-pulse animation-delay-500"
    },
    {
      value: completedProjects,
      label: "Projects Completed",
      icon: <FaClipboardCheck className="text-3xl mb-2" />,
      animation: "animate-pulse animation-delay-700",
      bgAnimation: "animate-float animation-delay-700"
    }
  ];

  return (
    <div className="bg-gradient-to-b text-background from-primary to-primary py-[2rem] overflow-hidden">
      <div
        ref={ref}
        className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-5 p-[2rem]"
      >
        {statItems.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="w-full flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-105 relative"
          >
            {/* Background animated circle */}
            {animationComplete && (
              <div className={`absolute w-32 h-32 rounded-full bg-secondary/10 ${item.bgAnimation}`}></div>
            )}
            
            {/* Icon with animation */}
            <div className={`text-secondary ${item.animation} ${animationComplete ? '' : 'animate-none'} z-10`}>
              {item.icon}
            </div>
            
            {/* Counter value */}
            <div className="relative z-10">
              <h1 className="heading-1 text-secondary flex items-center justify-center">
                <span className="inline-block">{item.value}</span>
                <span className="inline-block ml-1 transform translate-y-[-4px] animate-pulse">+</span>
              </h1>
              
              {/* Animated dot indicator */}
              {animationComplete && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full opacity-75 animate-ping"></div>
              )}
            </div>
            
            {/* Label */}
            <p className="font-medium mt-1 text-xl text-center z-10 relative">
              {item.label}
            </p>
            
            {/* Additional decorative elements */}
            {animationComplete && (
              <>
                <div className="absolute top-0 right-0 w-2 h-2 bg-secondary/50 rounded-full animate-ping delay-300"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-secondary/50 rounded-full animate-ping delay-700"></div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default TrustWorthySection;
