// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import Service from "./pages/Service";
//award images
import excellence from "./assets/image/awards/excellence.jpg";
import innovator from "./assets/image/awards/innovator.jpg";
import emerging from "./assets/image/awards/emerging.jpg";
import innovation from "./assets/image/awards/innovation.jpg";

// services image
import vrar from "./assets/image/services/arvr.jpg";
import custome from "./assets/image/services/custome.jpg";
import ai from "./assets/image/services/ai.jpg";
import web from "./assets/image/services/web.jpg";
import app from "./assets/image/services/app.jpg";
import chat from "./assets/image/services/chat.jpg";
import ml from "./assets/image/services/ml.jpg";
import cybersecurity from "./assets/image/services/cybersecurity.jpg";
import iot from "./assets/image/services/iot.jpg";
import block from "./assets/image/services/block.jpg";
import itstrategy from "./assets/image/services/itstrategy.jpg";
import itmanagement from "./assets/image/services/itmanagement.jpg";
import game from "./assets/image/services/game.jpg";

// ai services image
import inbound from "./assets/image/landingpage/inbound.jpg";
import outbound from "./assets/image/landingpage/outbound.jpg";

//rpa service image
import automation from "./assets/image/landingpage/automation.jpg";
import data from "./assets/image/landingpage/data.jpg";
import invoice from "./assets/image/landingpage/invoice.jpg";
import customer from "./assets/image/landingpage/cutomer.jpg";
import compliance from "./assets/image/landingpage/compliance.jpg";
export const routes = [
  {
    name: "Home",
    path: "/",
    // component: <Home />,
    landingpath: "home",
  },
  {
    name: "Services",
    path: "/service",
    landingpath: "service",

    // component: <Service />,
  },
  {
    name: "About Us",
    path: "/about",
    landingpath: "about",

    // component: <About />,
  },
  {
    name: "Contact Us",
    path: "/contact",
    landingpath: "contact",

    // component: <Contact />,
  },
  {
    name: "Blog",
    // path: "/blog",
    // component: <Contact />,
  },
];

export const companyDetails = {
  name: "CODEWIZARDS INFOTECH",
  email: "example@abc.com",
  phone: "+91-7898156263",
  whatsapp: "7898156263",
  address:
    "Bhishti Mohalla, Army Head Quarter, Indore, Indore, Madhya Pradesh, India, 452006",
};

// export const servicess = [
//   {
//     id: 1,
//     img: rpa,
//     title: "Robotic Process Automation (RPA)",
//     description:
//       "Simplify your operations and reduce errors with our RPA solutions. We help businesses automate repetitive tasks, optimize workflows, and boost productivity, so you can focus on strategic growth.",
//   },
//   {
//     id: 2,
//     img: custome,
//     title: "AI Calling Agency",
//     description:
//       "Transform how your business connects with customers. Our AI calling solutions handle inbound and outbound calls seamlessly, from booking appointments to qualifying leads. Save time, reduce costs, and increase close rates with our cutting-edge AI agents.",
//   },
//   {
//     id: 3,
//     img: ai,
//     title: "Artificial Intelligence Development",
//     description:
//       "Leverage the power of AI to solve complex challenges, enhance decision-making, and unlock new opportunities. Our AI solutions are designed to integrate effortlessly into your processes, delivering measurable results.",
//   },
//   {
//     id: 4,
//     img: web,
//     title: "Web Development",
//     description:
//       "Your website is more than just a digital presence—it’s a gateway to growth. We create dynamic, responsive, and user-friendly websites that leave a lasting impression on your audience.",
//   },
//   {
//     id: 5,
//     img: app,
//     title: "Mobile App Development",
//     description:
//       "Connect with your customers wherever they are. Our mobile app development team builds high-performing, intuitive applications that deliver seamless user experiences across all devices.",
//   },
//   {
//     id: 6,
//     img: chat,
//     title: "Chatbot Development",
//     description:
//       "Enhance customer interactions and streamline support with intelligent chatbot solutions. From answering queries to driving engagement, our chatbots provide instant, personalized responses tailored to your business needs.",
//   },
//   {
//     id: 7,
//     img: ml,
//     title: "Machine Learning Solutions",
//     description:
//       "Transform your data into actionable insights with our machine learning expertise. We develop models that enable smarter decisions, improve operations, and uncover hidden opportunities in your data.",
//   },
// ];

export const ourprocess = [
  {
    id: 1,
    imgSrc: "assets/img/blog/blog_s5_1.png",
    title: "Discovery & Planning",
    desc: "We begin by understanding your needs and crafting a tailored strategy for success.",
  },
  {
    id: 2,
    imgSrc: "assets/img/blog/blog_s5_2.png",
    title: "Design & Development",
    desc: "Our team creates innovative designs and develops solutions that bring your vision to life.",
  },
  {
    id: 3,
    imgSrc: "assets/img/blog/blog_s5_3.png",
    title: "Testing & Quality Assurance",
    desc: "We rigorously test our solutions to ensure they meet the highest standards of quality.",
  },
  {
    id: 4,
    imgSrc: "assets/img/blog/blog_s5_2.png",
    title: "Launch & Support",
    desc: "We deploy your solution and provide ongoing support to ensure lasting success.",
  },
];

export const testimonials = [
  {
    id: 2,
    quote:
      "Transforming challenges into seamless solutions. Their custom software has streamlined our operations and allowed us to scale without breaking a sweat. The attention to our unique needs was truly remarkable.",
    company: "SupplyFlow Logistics",
    position: "COO",
    author: "Michael T.",
    service: "Custom Software Development",
  },
  {
    id: 3,
    quote:
      "Immersion and innovation at its best! Our AR campaign was a massive success thanks to [Your Company Name]. Their creativity and technical expertise turned our vision into an engaging experience for our audience.",
    company: "Tech Innovators",
    position: "Marketing Lead",
    author: "Sarah L.",
    service: "VR and AR Development",
  },
  {
    id: 4,
    quote:
      "Smart technology that works for us. The chatbot [Your Company Name] developed has improved our response time and made customer interactions smooth and efficient. It’s been a game-changer for our support team.",
    company: "SwiftPay Solutions",
    position: "Client Experience Manager",
    author: "David P.",
    service: "Chatbot Development",
  },
  {
    id: 5,
    quote:
      "Uncompromised security for peace of mind. Their cybersecurity solutions have strengthened our defenses and safeguarded our data. I sleep better knowing our systems are in capable hands.",
    company: "Global Tech Partners",
    position: "IT Administrator",
    author: "Karen J.",
    service: "Cybersecurity Services",
  },
  {
    id: 6,
    quote:
      "A mobile app that our users can’t get enough of. From concept to launch, the app development team at [Your Company Name] delivered excellence. The result was a user-friendly app that’s now a favorite among our clients.",
    company: "FitWell Technologies",
    position: "CEO",
    author: "Ahmed K.",
    service: "Mobile App Development",
  },
  {
    id: 7,
    quote:
      "Intelligence that drives smarter decisions. We’ve seen significant improvements in efficiency and accuracy since implementing the AI tools developed by [Your Company Name]. They truly understand the power of data.",
    company: "InsightBridge",
    position: "Data Analytics Head",
    author: "Laura M.",
    service: "AI Development",
  },
  {
    id: 8,
    quote:
      "Connected solutions that drive efficiency. Thanks to their IoT solutions, we now have real-time visibility into our operations. This has made a huge difference in improving efficiency and decision-making.",
    company: "FutureTech Systems",
    position: "Operations Manager",
    author: "Daniel W.",
    service: "IoT Development",
  },
  {
    id: 9,
    quote:
      "Revolutionizing the way we do business. Our blockchain project with [Your Company Name] brought unmatched transparency and security to our processes. They’re the experts you want on your team.",
    company: "ClearChain Solutions",
    position: "Founder",
    author: "Priya S.",
    service: "Blockchain Development",
  },
  {
    id: 10,
    quote:
      "Strategic guidance that made all the difference. Their insights helped us reimagine our IT strategy and align it with our business objectives. It’s amazing what the right advice can do.",
    company: "Business Next Ventures",
    position: "Managing Director",
    author: "Mark H.",
    service: "IT Consulting and Strategy",
  },
  {
    id: 11,
    quote:
      "Reliable, scalable, and stress-free. The team has been a pillar of support in managing our IT infrastructure. We’ve had zero disruptions, and their proactive approach ensures we’re always ahead.",
    company: "DigiCore Systems",
    position: "CTO",
    author: "Olivia B.",
    service: "IT Infrastructure Management",
  },
  {
    id: 12,
    quote:
      "A complete package of innovation and expertise. From frontend to backend, the full-stack development team built us a robust web platform that exceeded our expectations. Their professionalism was outstanding.",
    company: "EdTech Innovations",
    position: "Product Manager",
    author: "Jonathan R.",
    service: "Full-Stack Web Development",
  },
  {
    id: 13,
    quote:
      "The edge we needed in a competitive market. Machine learning has unlocked new opportunities for our business. The models they created are precise and insightful, enabling us to adapt to trends seamlessly.",
    company: "MarketEdge Analytics",
    position: "Data Lead",
    author: "Mia V.",
    service: "Machine Learning Solutions",
  },
  {
    id: 14,
    quote:
      "Creating gaming magic. The game development team turned our concept into an extraordinary reality. Our players are hooked, and we couldn’t have asked for a better partner.",
    company: "Horizon Games",
    position: "Creative Head",
    author: "Leo G.",
    service: "Game Development",
  },
];

export const whyworkwithus = [
  {
    id: 1,
    img: excellence,
    title: "Customized Solutions",
    description:
      "Every project is tailored to your needs, ensuring strategies and results that align with your vision.",
  },
  {
    id: 2,
    img: innovator,
    title: "Expert Professionals",
    description:
      "Our skilled team combines technical expertise with years of experience across industries.",
  },
  {
    id: 3,
    img: emerging,
    title: "Innovative Technologies",
    description:
      "We work with the latest tools and trends to keep your business ahead in the digital race.",
  },
  {
    id: 4,
    img: innovation,
    title: "Client-Focused Approach",
    description:
      "We’re dedicated to understanding your goals and exceeding your expectations every step of the way.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "What services does your company offer?",
    answer:
      "We offer a wide range of services including web development, custom software development, mobile app development, artificial intelligence, machine learning, IoT solutions, VR/AR experiences, blockchain solutions, IT consulting, cybersecurity, and game development.",
  },
  {
    id: 2,
    question: "How does your process ensure success?",
    answer:
      "Our process is designed to ensure precision and efficiency. From discovery and planning to development, testing, and launch, we focus on delivering results that align with your business goals and provide measurable value.",
  },
  {
    id: 3,
    question: "What makes your web development services unique?",
    answer:
      "Our web development services focus on crafting modern, responsive websites and full-stack solutions that enhance online presence and engage audiences effectively.",
  },
  {
    id: 4,
    question:
      "Can you assist with artificial intelligence and machine learning?",
    answer:
      "Yes, we specialize in AI and machine learning solutions that help businesses uncover insights, automate processes, and solve complex challenges with precision.",
  },
  {
    id: 5,
    question: "Do you offer mobile app development?",
    answer:
      "Absolutely. Our mobile app development team designs and builds innovative apps that deliver functionality and an exceptional user experience tailored to your audience.",
  },
  {
    id: 6,
    question: "How can your cybersecurity services benefit my business?",
    answer:
      "We protect your business from digital threats with proactive and reliable cybersecurity strategies, ensuring your data and operations remain secure and protected.",
  },
];

export const rpaservices = [
  {
    id: 1,
    img: automation,
    title: "Process Automation",
    description:
      "Optimize workflows by automating repetitive tasks, boosting speed and consistency.",
  },
  {
    id: 2,
    img: data,
    title: "Data Management",
    description:
      "Simplify data entry, validation, and integration across systems to improve operational efficiency.",
  },
  {
    id: 3,
    img: invoice,
    title: "Invoice Automation",
    description:
      "Streamline billing processes for faster, error-free invoicing and better cash flow management.",
  },
  {
    id: 4,
    img: customer,
    title: "Customer Interaction Automation",
    description:
      "Deploy bots to handle routine inquiries, freeing up your team for more complex customer needs.",
  },
  {
    id: 5,
    img: compliance,
    title: "Compliance and Reporting Automation",
    description:
      "Ensure regulatory compliance and generate accurate reports effortlessly with automated solutions.",
  },
];
export const aiCalling = [
  {
    id: 1,
    img: inbound,
    title: "Inbound Calling Support",
    description:
      "Let our AI agents manage your inbound calls with accuracy and professionalism. From answering customer questions to booking appointments, we ensure every interaction reflects your brand’s excellence while giving your team more time to focus on growth.",
  },
  {
    id: 2,
    img: outbound,
    title: "Outbound Calling Services",
    description:
      "Our outbound AI agents are skilled at cold calling potential leads, qualifying prospects, and scheduling appointments. We eliminate the manual effort and guesswork, so your sales team can concentrate on what they do best—closing deals.",
  },
];

export const whyChooseAI = [
  {
    id: 1,
    title: "Always Available",
    description:
      "Our AI agents work 24/7, ensuring you never miss a lead or opportunity.",
  },
  {
    id: 2,
    title: "Cost Savings",
    description:
      "Automate repetitive calling tasks to reduce overhead while maintaining high service quality.",
  },
  {
    id: 3,
    title: "Higher Close Rates",
    description:
      "AI intelligently qualifies leads, ensuring your team engages with high-potential prospects.",
  },
  {
    id: 4,
    title: "Personalized Experience",
    description:
      "Customize workflows and scripts to reflect your brand's voice and cater to individual customer needs.",
  },
];

export const whyChooseRPA = [
  {
    id: 1,
    title: "Expertise You Can Rely On",
    description:
      "Our experienced team delivers robust, scalable automation solutions.",
  },
  {
    id: 2,
    title: "Customized for Your Business",
    description: "Every solution is tailored to your specific requirements.",
  },
  {
    id: 3,
    title: "Dedicated Support",
    description:
      "From planning to implementation and beyond, we’re with you every step of the way.",
  },
];
export const rpaTestimonials = [
  {
    id: 1,
    quote:
      "Cognitek transformed the way we handle our workflows. What used to take hours is now done in minutes, with zero errors. Their RPA solution has truly elevated our operational efficiency.",
    author: "Mark L.",
    position: "Operations Manager",
    company: "Streamline Corp.",
  },
  {
    id: 2,
    quote:
      "Thanks to Cognitek, we automated our invoicing system, cutting processing time by 70% and improving accuracy across the board. It’s been a game-changer for our finance team!",
    author: "Emily R.",
    position: "CFO",
    company: "NovaFinTech",
  },
  {
    id: 3,
    quote:
      "The RPA tools from Cognitek have simplified our data entry and integration tasks. We’ve seen a dramatic improvement in consistency and saved countless hours of manual work.",
    author: "Sophia T.",
    position: "Data Manager",
    company: "DigiFlow",
  },
  {
    id: 4,
    quote:
      "Our customer service has improved significantly since implementing Cognitek RPA solution. Routine inquiries are handled instantly, allowing our team to focus on resolving complex issues. Customer satisfaction is at an all-time high!",
    author: "Jason M.",
    position: "Customer Experience Lead",
    company: "BrightLine Support",
  },
  {
    id: 5,
    quote:
      "Working with Cognitek was seamless. Their team identified inefficiencies in our processes and implemented automation that increased our productivity by 40%. We couldn’t be happier with the results!",
    author: "Linda K.",
    position: "CEO",
    company: "OptiWork Enterprises",
  },
];
export const aiTestimonials = [
  {
    id: 1,
    industry: "Real Estate",
    quote:
      "Since we started using Cognitek at UrbanNest Realty, managing inquiries has become effortless. Their AI books property viewings efficiently, and our team can now focus on closing deals rather than chasing leads. We’ve seen a 30% increase in successful showings!",
    author: "Sarah M.",
    position: "Lead Agent",
    company: "UrbanNest Realty",
  },
  {
    id: 2,
    industry: "Healthcare",
    quote:
      "At Healthy Horizons Clinic, handling patient calls used to be chaotic. Cognitek streamlined our appointment system, ensuring every patient is attended to promptly. Our staff is happier, and patient satisfaction is at an all-time high!",
    author: "Dr. Emily T.",
    position: "Clinic Manager",
    company: "Healthy Horizons Clinic",
  },
  {
    id: 3,
    industry: "Retail",
    quote:
      "Cognitek has been a huge asset to ShopSmart Electronics. Their AI calling service manages customer support and post-purchase feedback with such ease. It’s like having an extra team that never sleeps. Highly recommend!",
    author: "John L.",
    position: "Owner",
    company: "ShopSmart Electronics",
  },
  {
    id: 4,
    industry: "Hospitality",
    quote:
      "At Royal Palm Resort, guest satisfaction is our priority. Cognitek’s AI agents handle reservations and inquiries flawlessly, leaving our team more time to focus on creating memorable experiences for our guests. We’ve seen a 20% boost in positive reviews!",
    author: "Raj P.",
    position: "Manager",
    company: "Royal Palm Resort",
  },
  {
    id: 5,
    industry: "Beauty and Wellness",
    quote:
      "Cognitek completely transformed scheduling for Bliss Haven Spa. Clients love the automated reminders, and our no-shows have dropped significantly. Their AI calling service keeps our calendar running smoothly, letting us focus on pampering our clients.",
    author: "Lila R.",
    position: "Owner",
    company: "Bliss Haven Spa",
  },
  {
    id: 6,
    industry: "Technology",
    quote:
      "Partnering with Cognitek at CodeTech Innovations was the best decision we made this year. Their outbound AI agents qualify leads with incredible precision and have boosted our demo bookings by 40%. It’s a game-changer for SaaS companies.",
    author: "Alex W.",
    position: "Sales Manager",
    company: "CodeTech Innovations",
  },
];

export const services = [
  // {
  //   id: 1,
  //   img: web,
  //   title: "Web Development full stack",
  //   shortdesc:
  //     "Our web development team crafts modern, responsive websites and full-stack solutions that elevate your online presence and engage your audience.",
  //   description:
  //     "Your website is more than just a digital storefront—it’s a vital tool for engagement and growth. We craft websites that combine stunning design with seamless functionality to leave a lasting impression.",
  //   features: [
  //     "Custom Website Development: Bespoke designs aligned with your brand and goals.",
  //     "eCommerce Solutions: Scalable platforms to elevate your online sales.",
  //     "Web Applications: Dynamic, interactive platforms that drive engagement.",
  //     "Responsive Design: Ensuring exceptional performance on all devices.",
  //   ],
  // },
  {
    id: 1,
    img: custome,
    title: "Custom Software Development",
    shortdesc:
      "We design bespoke software solutions that streamline processes, boost productivity, and meet your specific business needs.",
    description:
      "We develop software that’s as unique as your business. By understanding your processes and challenges, we deliver solutions that drive efficiency and scalability.",
    features: [
      "Enterprise Solutions: Centralized systems for managing complex workflows.",
      "Process Automation: Streamlining tasks for increased productivity.",
      "Legacy System Updates: Modernizing outdated systems to meet current demands.",
      "System Integration: Connecting tools and platforms for seamless operation.",
    ],
  },
  {
    id: 2,
    img: vrar,
    title: "VR and AR Development",
    shortdesc:
      "Immerse your audience in the extraordinary with VR and AR experiences designed for training, entertainment, marketing, and more.",
    description:
      "Immerse your audience with transformative Virtual and Augmented Reality experiences. From interactive training to captivating marketing campaigns, we bring your vision to life.",
    features: [
      "Training Modules: Realistic environments for hands-on learning.",
      "Marketing Experiences: Engaging AR campaigns that captivate audiences.",
      "VR Gaming: Designing immersive, interactive entertainment.",
      "Product Visualization: Showcasing products dynamically.",
    ],
  },
  {
    id: 3,
    img: chat,
    title: "Chatbot Development",
    shortdesc:
      "Revolutionize customer interactions with intelligent chatbots that provide seamless, 24/7 support and enhance engagement.",
    description:
      "Enhance customer engagement and automate routine tasks with intelligent chatbots. Our solutions are designed to offer efficient, 24/7 communication.",
    features: [
      "Customer Support Bots: Improving response times and satisfaction rates.",
      "Sales Bots: Nurturing leads and driving conversions.",
      "Platform Integration: Chatbots that work across websites and apps.",
      "Tailored Conversational Flows: Adapting to your business requirements.",
    ],
  },
  {
    id: 4,
    img: cybersecurity,
    title: "Cybersecurity Services",
    shortdesc:
      "We protect your business from digital threats with proactive, reliable cybersecurity strategies that ensure peace of mind.",
    description:
      "In an era of constant digital threats, our comprehensive cybersecurity services are designed to keep your business safe.",
    features: [
      "Threat Analysis: Identifying vulnerabilities before they can be exploited.",
      "Data Protection: Safeguarding sensitive information with robust strategies.",
      "Network Security Management: Preventing unauthorized access and breaches.",
      "Incident Response: Rapid recovery plans to minimize impact.",
    ],
  },
  {
    id: 5,
    img: app,
    shortdesc:
      "Our team designs and builds innovative mobile apps tailored to your audience, delivering functionality and an exceptional user experience.",
    title: "Mobile App Development",
    description:
      "From concept to launch, we create mobile apps that deliver exceptional user experiences and drive engagement.",
    features: [
      "iOS and Android Apps: Native apps optimized for performance.",
      "Cross-Platform Development: Ensuring a consistent experience on all devices.",
      "User-Centric Design: Crafting intuitive interfaces.",
      "Ongoing Support: Keeping your app updated and competitive.",
    ],
  },
  {
    id: 6,
    img: ai,
    title: "AI Development",
    shortdesc:
      "Harness the power of AI and machine learning to uncover insights, optimize operations, and solve complex challenges with precision.",
    description:
      "Leverage Artificial Intelligence to unlock new opportunities and optimize your operations. Our AI solutions are built to enhance decision-making and deliver personalized experiences.",
    features: [
      "Predictive Analytics: Identifying trends to stay ahead of the curve.",
      "Process Automation: Reducing manual workloads for greater efficiency.",
      "AI-Powered Customer Insights: Understanding behaviors to deliver better services.",
      "Personalization Engines: Tailoring experiences to individual needs.",
    ],
  },
  {
    id: 7,
    title: "IoT Development",
    img: iot,
    shortdesc:
      "Connect devices and systems like never before with Internet of Things solutions that improve efficiency and drive smarter decisions.",
    description:
      "Create a smarter, more connected ecosystem with Internet of Things solutions that transform how you operate and interact with data.",
    features: [
      "Device Integration: Seamlessly connecting IoT devices.",
      "Real-Time Analytics: Turning data into actionable insights.",
      "Industrial IoT: Enhancing productivity through automation and monitoring.",
      "Smart Solutions: Customized IoT applications for unique challenges.",
    ],
  },
  {
    id: 8,
    img: block,
    title: "Blockchain Development",
    shortdesc:
      "Secure, transparent, and efficient blockchain solutions to help modernize processes and create new business opportunities.",
    description:
      "Blockchain technology is revolutionizing industries with transparency, security, and efficiency. We help businesses harness its potential.",
    features: [
      "Smart Contracts: Secure, self-executing agreements.",
      "Decentralized Applications (dApps): Building scalable, decentralized solutions.",
      "Blockchain Supply Chain: Improving transparency and efficiency.",
      "Tokenization Services: Developing digital assets to support your business goals.",
    ],
  },
  {
    id: 9,
    img: itstrategy,
    title: "IT Consulting and Strategy",
    shortdesc:
      "Our IT experts guide you through the complexities of modern technology, aligning solutions with your business goals for lasting success.",
    description:
      "We provide strategic IT guidance to align technology initiatives with your business objectives, ensuring optimal performance and ROI.",
    features: [
      "Technology Assessments: Identifying the best tools for your needs.",
      "Strategic Roadmaps: Planning IT growth alongside your business goals.",
      "Cloud Migration: Moving operations to secure, efficient cloud platforms.",
      "Operational Streamlining: Enhancing workflows with technology solutions.",
    ],
  },
  {
    id: 10,
    img: itmanagement,
    title: "IT Infrastructure Management",
    shortdesc:
      "Ensure your operations run smoothly with robust infrastructure management services designed for scalability and reliability.",
    description:
      "Ensure your IT systems run smoothly and reliably with our proactive infrastructure management services.",
    features: [
      "Monitoring and Support: Keeping your systems operational and secure.",
      "Backup and Disaster Recovery: Protecting your data against loss.",
      "Scalable Solutions: Adapting your infrastructure to business growth.",
      "Regulatory Compliance: Ensuring adherence to industry standards.",
    ],
  },
  {
    id: 11,
    img: web,
    title: "Full-Stack Web Development",
    shortdesc:
      "Our web development team crafts modern, responsive websites and full-stack solutions that elevate your online presence and engage your audience.",
    description:
      "Our full-stack development expertise spans the entire technology stack, delivering comprehensive web solutions tailored to your needs.",
    features: [
      "Frontend Development: Crafting dynamic, engaging interfaces.",
      "Backend Solutions: Ensuring smooth and efficient system performance.",
      "Database Design: Building secure, scalable storage solutions.",
      "Third-Party Integrations: Enhancing capabilities with APIs and tools.",
    ],
  },
  {
    id: 12,
    img: ml,
    title: "Machine Learning Solutions",
    shortdesc:
      "Our machine learning solutions empower businesses to analyze data, automate tasks, and make precise predictions, driving smarter decisions and innovation.",
    description:
      "Harness the power of machine learning to uncover insights, automate processes, and predict outcomes with precision.",
    features: [
      "Data Analysis: Discovering patterns to inform decisions.",
      "Predictive Maintenance: Identifying issues before they arise.",
      "Fraud Detection: Monitoring for anomalies in real-time.",
      "Personalized Recommendations: Tailored solutions for enhanced customer experience.",
    ],
  },
  {
    id: 13,
    img: game,
    title: "Game Development",
    shortdesc:
      "Bring bold, creative gaming ideas to life with visually stunning, engaging games that captivate players across platforms.",
    description:
      "Turn your creative ideas into engaging, interactive games that captivate audiences. Our game development team excels in designing dynamic gaming experiences across platforms.",
    features: [
      "Concept Development: Building compelling narratives and mechanics.",
      "3D Modeling and Animation: Delivering visually stunning environments.",
      "Multi-Platform Support: Games for mobile, PC, and consoles.",
      "Post-Launch Enhancements: Ensuring your game remains engaging over time.",
    ],
  },
];
