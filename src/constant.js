import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

// all services
import { ReactComponent as allServiceIcon1 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as allServiceIcon2 } from "./assets/svgs/services/App Development.svg";
import { ReactComponent as allServiceIcon3 } from "./assets/svgs/services/UIUX Design.svg";
import { ReactComponent as allServiceIcon4 } from "./assets/svgs/services/Chatbots.svg";
import { ReactComponent as allServiceIcon5 } from "./assets/svgs/services/Machine Learning Solutions.svg";
import { ReactComponent as allServiceIcon6 } from "./assets/svgs/services/Game Development.svg";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";

// service icons
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
  FaAws,
  FaServer,
  FaChartBar,
  FaChartLine,
  FaCog,
  FaTools,
  FaComments,
  FaHeadset,
  FaNetworkWired,
  FaExchangeAlt,
} from "react-icons/fa";
import { FaLink, FaCodeBranch, FaShieldAlt } from "react-icons/fa";

export { logoImg };

export const companyDetails = {
  phone: "+919835876396",
  address:
    "New Area D-Block, Kadamkuan, PO : Kadamkuan, DIST : Patna, Bihar, 800003",
  email: "contactus@technorichaisolutions.com",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: <Blogs />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    path: "/blogs/:id",
    name: "Blog Details",
    element: <BlogDetails />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webServiceIcon1,
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webServiceIcon2,
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: webServiceIcon3,
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webServiceIcon4,
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appServiceIcon1,
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appServiceIcon2,
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appServiceIcon3,
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appServiceIcon4,
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Susmitha Sharma",
    position: "Product Manager at EcoTech Solutions",
    img: require("./assets/images/testimonial3.png"),
    desc: "“Developing a mobile app for our business was a priority, and we needed an experienced team that could create a seamless user experience. Techno Rich delivered an app that was both intuitive and feature-rich, resulting in a noticeable increase in customer engagement. Their team was responsive, communicative, and worked diligently to meet our business objectives. We're thrilled with the end product and how it’s positively impacting our business.”",
  },
  {
    id: 2,
    name: "Rahul Singh",
    position: "Operations Director at Global Logistics",
    img: require("./assets/images/testimonial1.png"),
    desc: "“The implementation of Robotic Process Automation (RPA) by Techno Rich has transformed our operations. By automating repetitive tasks, we’ve increased productivity and significantly reduced human error. The team helped us identify the most impactful areas for automation and seamlessly integrated the solutions into our existing processes. The results speak for themselves—we’re saving time and resources while improving our overall efficiency.”",
  },
  {
    id: 3,
    name: "Emily Watson",
    position: "Chief Marketing Officer at SmartRetail Inc.",
    img: require("./assets/images/testimonial2.png"),
    desc: "“We needed a way to utilize AI to improve our customer experience and drive smarter decisions. Techno Rich delivered a custom AI solution that exceeded our expectations. The AI-driven insights have helped us personalize customer interactions and optimize our services. The entire process was smooth, and the team was incredibly knowledgeable and responsive to our needs.”",
  },
  {
    id: 4,
    name: "Amit Kumar",
    position: "Head of Data Science, FinanceHub",
    img: require("./assets/images/testimonial4.jpg"),
    desc: "“As a data-driven company, we needed a solution that could help us unlock insights from our data. Techno Rich implemented machine learning models that have significantly improved our decision-making process. Their team expertly analyzed our data and helped us predict trends and behaviors, which has allowed us to make more informed business decisions. The results have been fantastic, and we couldn’t be happier with the partnership.”",
  },
  {
    id: 5,
    name: "Jennifer Johnson",
    position: "Digital Marketing Lead of Creative Media Group",
    img: require("./assets/images/testimonial5.jpg"),
    desc: "“Our website was outdated, and we knew it was time for a refresh. We turned to Techno Rich, and they delivered a modern, responsive, and visually appealing website that aligns perfectly with our brand. The team worked closely with us to ensure the site was functional, fast, and optimized for SEO. Since the redesign, we’ve seen increased traffic, higher engagement, and improved conversions. We couldn’t be happier with the results!”",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    link: "/web-development",
    description:
      "Design and develop responsive, SEO-friendly websites that effectively represent your brand and engage your audience.",
    icon: (
      <div className="relative group">
        <FaLaptopCode size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaReact
            size={20}
            className="text-secondary animate-spin-slow group-hover:text-primary"
          />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaNodeJs size={16} className="text-primary animate-pulse" />
        </div>
      </div>
    ),
    detailHeading: "Web Development: Build a Digital Presence That Resonates",
    detailContent: `<p>Your website is often the first point of contact with potential customers, which is why it's crucial to make a strong first impression. Our Web Development services focus on creating websites that are not only visually appealing but also responsive, user-friendly, and SEO-optimized. Whether you need a simple business website or a complex web application, we provide end-to-end development services to bring your online vision to life.</p>
    <p class="font-semibold mt-4">Web Development Solutions We Provide:</p>
    <ul class="list-disc pl-6 mt-2">
      <li>Custom Web Design & Development</li>
      <li>Responsive Website Design</li>
      <li>E-commerce Solutions</li>
      <li>CMS & WordPress Development</li>
      <li>Web App Development</li>
    </ul>`,
  },
  {
    id: 2,
    title: "Mobile App Development",
    link: "/app-development",
    description:
      "Develop robust, user-friendly mobile apps for iOS and Android platforms that meet your business needs.",
    icon: (
      <div className="relative group">
        <FaMobileAlt size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaApple
            size={18}
            className="text-secondary group-hover:text-primary"
          />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaAndroid size={18} className="text-primary animate-pulse" />
        </div>
      </div>
    ),
    detailHeading:
      "Mobile App Development: Transform Your Ideas into High-Quality Apps",
    detailContent: `<p>In today's mobile-first world, a well-designed app can be a game-changer for your business. Our Mobile App Development services are designed to turn your vision into reality. We build custom mobile apps for both iOS and Android platforms, ensuring seamless performance, user-friendly design, and scalability to meet your growing business needs. Whether you're launching an app for customers or internal teams, we've got you covered.</p>
    <p class="font-semibold mt-4">Our Mobile App Development Expertise Includes:</p>
    <ul class="list-disc pl-6 mt-2">
      <li>iOS & Android App Development</li>
      <li>Cross-Platform App Solutions</li>
      <li>Enterprise Mobile Apps</li>
      <li>App Maintenance and Support</li>
    </ul>`,
  },
  {
    id: 3,
    title: "UI and UX Design",
    description:
      "Create intuitive and visually appealing user interfaces and experiences that enhance usability and customer satisfaction.",
    icon: (
      <div className="relative group">
        <FaPaintBrush size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaFigma
            size={18}
            className="text-secondary animate-pulse group-hover:text-primary"
          />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaSketch size={16} className="text-primary" />
        </div>
      </div>
    ),
    detailHeading:
      "UI & UX Design: Creating Exceptional User Experiences",
    detailContent: `<p>A great product is built on a great user experience. Our UI/UX Design services focus on understanding your users' needs, preferences, and behaviors to create intuitive, engaging, and visually appealing designs. Whether it's for a mobile app, website, or enterprise software, we ensure that your design not only looks great but also provides a seamless, user-friendly experience.</p>
    <p class="font-semibold mt-4">UI/UX Design Services We Specialize In:</p>
    <ul class="list-disc pl-6 mt-2">
      <li>User Research & Persona Development</li>
      <li>Wireframing & Prototyping</li>
      <li>Responsive Web Design</li>
      <li>Usability Testing</li>
    </ul>`,
  },
  {
    id: 4,
    title: "Artificial Intelligence Development",
    description:
      "Harness the power of AI to innovate and automate processes, driving efficiency and intelligent decision-making.",
    icon: (
      <div className="relative group">
        <FaBrain size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaRocket
            size={18}
            className="text-secondary animate-pulse group-hover:text-primary"
          />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaMicrochip size={16} className="text-primary animate-pulse" />
        </div>
      </div>
    ),
    detailHeading:
      "Artificial Intelligence (AI) Development: Intelligence That Drives Growth",
    detailContent: `<p>AI is the future, and we're here to guide you through its transformative potential. Our AI Development services cover everything from machine learning to deep learning, natural language processing, and computer vision. We help businesses leverage AI to analyze data, make predictions, and improve customer experiences, empowering smarter decision-making and driving innovation.</p>
    <p class="font-semibold mt-4">Our AI Development Solutions Include:</p>
    <ul class="list-disc pl-6 mt-2">
      <li>AI Chatbots and Virtual Assistants</li>
      <li>Natural Language Processing (NLP)</li>
      <li>Predictive Analytics</li>
      <li>Computer Vision and Image Recognition</li>
    </ul>`,
  },
  {
    id: 5,
    title: "Game Development",
    description:
      "Creating immersive and engaging gaming experiences through advanced design, development, and technology for various platforms and audiences.",
    icon: (
      <div className="relative group">
        <FaGamepad size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaUnity
            size={18}
            className="text-secondary animate-pulse group-hover:text-primary"
          />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaPlaystation size={16} className="text-primary" />
        </div>
      </div>
    ),
    detailHeading:
      "Game Development: Crafting Immersive and Engaging Experiences",
    detailContent: `<p>Our Game Development services combine creativity with advanced technology to deliver games that captivate players and leave lasting impressions. We create games for mobile, console, and PC platforms, focusing on high-quality visuals, engaging gameplay, and seamless user experiences. Whether you're looking to develop an immersive single-player game or a dynamic multiplayer experience, we have the expertise to bring your vision to life.</p>
    <p class="font-semibold mt-4">Game Development Services We Offer:</p>
    <ul class="list-disc pl-6 mt-2">
      <li>Mobile Game Development (iOS & Android)</li>
      <li>Multiplayer Games</li>
      <li>AR/VR Game Development</li>
      <li>Game UI/UX Design</li>
    </ul>`,
  },
  {
    id: 6,
    title: "Cloud Computing Services",
    description:
      "Leverage cloud technology to enhance scalability, flexibility, and efficiency in your business operations.",
    icon: (
      <div className="relative group">
        <FaCloud size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaAws
            size={18}
            className="text-secondary animate-pulse group-hover:text-primary"
          />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaServer size={16} className="text-primary" />
        </div>
      </div>
    ),
    detailHeading: "Cloud Computing Services: Flexible and Scalable Solutions for Your Business",
    detailContent: `<p>In a world where agility and scalability are key, cloud computing is the backbone of modern business operations. We provide comprehensive Cloud Computing services, from cloud migration to infrastructure management, application development, and more. Whether you're looking to move your data to the cloud, create a new cloud-based application, or optimize your existing cloud infrastructure, we ensure seamless integration and long-term scalability.</p>
    <p class="font-semibold mt-4">Our Cloud Services Include:</p>
    <ul class="list-disc pl-6 mt-2">
      <li>Cloud Strategy & Consulting</li>
      <li>Cloud Application Development</li>
      <li>Cloud Infrastructure Management</li>
      <li>Cloud Security Solutions</li>
    </ul>`,
  },
  {
    id: 7,
    title: "Data Science Services",
    description:
      "Transform data into actionable insights with our comprehensive data science services.",
    icon: (
      <div className="relative group">
        <FaDatabase size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaChartBar
            size={18}
            className="text-secondary animate-pulse group-hover:text-primary"
          />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaChartLine size={16} className="text-primary" />
        </div>
      </div>
    ),
    detailHeading: "Data Science Services: Transform Data into Actionable Insights",
    detailContent: `<p>Data is a powerful resource, and with the right tools, it can transform your business. Our Data Science services help you make sense of your data by using advanced analytics, machine learning models, and data visualization techniques. We provide actionable insights that enable smarter decision-making and give you a competitive edge in your industry.</p>
    <p class="font-semibold mt-4">Our Data Science Solutions Include:</p>
    <ul class="list-disc pl-6 mt-2">
      <li>Predictive Analytics</li>
      <li>Data Visualization & Reporting</li>
      <li>Business Intelligence (BI) Solutions</li>
      <li>Big Data Analytics</li>
    </ul>`,
  },
  {
    id: 8,
    title: "Robotic Process Automation (RPA)",
    description:
      "Automate repetitive tasks and streamline business processes with our RPA solutions.",
    icon: (
      <div className="relative group">
        <FaCogs size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaCog
            size={18}
            className="text-secondary animate-spin-slow group-hover:text-primary"
          />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaTools size={16} className="text-primary" />
        </div>
      </div>
    ),
    detailHeading: "Robotic Process Automation (RPA): Automate Routine Tasks, Enhance Efficiency",
    detailContent: `<p>Robotic Process Automation (RPA) is changing the landscape of business operations. By automating repetitive tasks, RPA frees up valuable resources, boosts efficiency, and reduces operational costs. We help businesses implement RPA solutions that improve workflow automation, minimize errors, and enable faster decision-making, allowing your team to focus on more strategic work.</p>
    <p class="font-semibold mt-4">RPA Services We Provide:</p>
    <ul class="list-disc pl-6 mt-2">
      <li>Workflow Automation</li>
      <li>AI-Powered Robotic Solutions</li>
      <li>Data Integration & Processing</li>
      <li>End-to-End RPA Implementation</li>
    </ul>`,
  },
  {
    id: 9,
    title: "Natural Language Processing (NLP)",
    description:
      "Enhance customer interactions and insights with our advanced NLP solutions.",
    icon: (
      <div className="relative group">
        <FaRobot size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaComments
            size={18}
            className="text-secondary animate-pulse group-hover:text-primary"
          />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaHeadset size={16} className="text-primary" />
        </div>
      </div>
    ),
    detailHeading: "Natural Language Processing (NLP): Revolutionizing Communication with AI",
    detailContent: `<p>Natural Language Processing (NLP) is one of the most impactful AI technologies, enabling machines to understand, interpret, and generate human language. We offer a range of NLP services that enhance customer interactions, automate content analysis, and streamline communication processes, helping you better understand customer feedback and improve your business operations.</p>
    <p class="font-semibold mt-4">Our NLP Services Include:</p>
    <ul class="list-disc pl-6 mt-2">
      <li>Sentiment Analysis</li>
      <li>Speech Recognition</li>
      <li>Text Analytics and Mining</li>
      <li>Language Translation</li>
    </ul>`,
  },
  {
    id: 10,
    title: "Cloud Migration Services",
    description:
      "Seamlessly migrate your existing infrastructure to the cloud with minimal disruption.",
    icon: (
      <div className="relative group">
        <FaCloud size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaNetworkWired
            size={18}
            className="text-secondary animate-pulse group-hover:text-primary"
          />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaExchangeAlt size={16} className="text-primary" />
        </div>
      </div>
    ),
    detailHeading: "Cloud Migration Services: Seamless Transitions to the Cloud",
    detailContent: `<p>Migrating to the cloud offers a host of benefits, including cost savings, scalability, and improved performance. Our Cloud Migration services ensure that your transition is smooth, secure, and efficient. We provide comprehensive migration strategies, including data transfer, application deployment, and ongoing support, ensuring minimal disruption and maximum value from your cloud infrastructure.</p>
    <p class="font-semibold mt-4">Cloud Migration Services We Offer:</p>
    <ul class="list-disc pl-6 mt-2">
      <li>Cloud Strategy & Planning</li>
      <li>Data & Application Migration</li>
      <li>Post-Migration Support</li>
      <li>Cloud Security Management</li>
    </ul>`,
  },
  {
    id: 11,
    title: "Blockchain Development",
    description:
      "Create secure, transparent, and decentralized blockchain solutions for various business applications.",
    icon: (
      <div className="relative group">
        <FaLink size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaCodeBranch size={18} className="text-secondary animate-pulse group-hover:text-primary" />
        </div>
        <div className="absolute -top-1 -left-1">
          <FaShieldAlt size={16} className="text-primary" />
        </div>
      </div>
    ),
    detailHeading: "Blockchain Development: Secure, Transparent, and Scalable Solutions",
    detailContent: `<p>Blockchain technology is revolutionizing the way businesses operate. At Techno Rich, we specialize in creating secure, transparent, and scalable blockchain solutions that address your unique business challenges. From developing custom blockchain networks to building smart contracts and decentralized applications (DApps), we help you integrate blockchain technology in ways that enhance security, increase transparency, and simplify operations.</p>
    <p class="font-semibold mt-4">Our Blockchain Development Services Include:</p>
    <ul class="list-disc pl-6 mt-2">
      <li>Tailored Blockchain Solutions</li>
      <li>Smart Contract Development</li>
      <li>DApp Development and Integration</li>
      <li>Blockchain Consulting</li>
    </ul>`,
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/web-development/5ghomes.webp"),
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/web-development/midwam.webp"),
    title: "Midwam",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
