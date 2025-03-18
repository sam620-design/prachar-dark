"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  Camera,
  Globe,
  BarChart,
  Clock,
  Wallet,
  PieChart,
  MessageSquare,
  Code,
  Users,
  Lightbulb,
  Shield,
  Award,
  CheckCircle,
  Smile,
  ThumbsUp,
  Target,
  Eye,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [textIndex, setTextIndex] = useState(0);
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    teammembers: 0,
  });
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false); // State for About modal

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const texts = [
    "Boost Your Brand",
    "Maximize Your Reach",
    "Dominate Digital Marketing",
  ];

  const imageSegments = [
    "/socialmedia-952091_1920-Photoroom (1)-photoroom.png",
    "/socialmedia-952091_1920-Photoroom (2)-photoroom.png",
    "/socialmedia-952091_1920-Photoroom (3)-photoroom.png",
    "/socialmedia-952091_1920-Photoroom (4)-photoroom.png",
    "/socialmedia-952091_1920-Photoroom (5)-photoroom.png",
    "/socialmedia-952091_1920-Photoroom (6)-photoroom.png",
    "/socialmedia-952091_1920-Photoroom (7)-photoroom.png",
    "/socialmedia-952091_1920-Photoroom (8)-photoroom.png",
  ];

  const brands = ["Xerox", "Sony", "P&G", "NYU", "UP"];

  const marketingBenefits = [
    {
      icon: Globe,
      title: "Global Reach & Visibility",
      description:
        "Break geographical barriers and connect with a worldwide audience 24/7 through targeted online strategies",
    },
    {
      icon: BarChart,
      title: "Measurable Results",
      description:
        "Track real-time performance with precise analytics to optimize campaigns and maximize ROI",
    },
    {
      icon: Clock,
      title: "24/7 Engagement",
      description:
        "Maintain constant brand presence and customer interaction through automated digital channels",
    },
    {
      icon: Wallet,
      title: "Cost-Effective Growth",
      description:
        "Achieve higher conversion rates at lower costs compared to traditional marketing methods",
    },
    {
      icon: PieChart,
      title: "Audience Insights",
      description:
        "Gain deep understanding of customer behavior through data-driven market analysis",
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description:
        "Build lasting relationships through personalized engagement across social platforms",
    },
  ];

  const digitalMarketingServices = [
    "SEM (Search Engine Marketing)",
    "SMM (Social Media Marketing)",
    "Search Engine Optimization (SEO)",
    "Pay-Per-Click Advertising (PPC)",
    "Content Marketing Strategy",
    "Content Marketing",
    "Email Marketing",
    "Influencer Marketing",
  ];

  const webServices = [
    "Website Design & Development",
    "Web Application Development",
    "E-Commerce Solutions",
    "UI/UX Design",
    "Website Maintenance",
    "API Integration",
    "Logo Designing",
    "Banner and Poster Designing",
  ];

  // Generate random stars for background
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 6 + 4, // Slower duration
    delay: Math.random() * 2,
  }));

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Stats counter animation
  useEffect(() => {
    if (isStatsInView) {
      const targetStats = { projects: 710, clients: 140, satisfaction: 98.6, teamMembers: 14 };
      const duration = 2000; // Animation duration in milliseconds
      const increment = (target: number, current: number) => {
        const step = Math.ceil(target / (duration / 16)); // 60fps
        return current + step > target ? target : current + step;
      };

      const interval = setInterval(() => {
        setStats((prev) => ({
          projects: increment(targetStats.projects, prev.projects),
          clients: increment(targetStats.clients, prev.clients),
          satisfaction: increment(targetStats.satisfaction, prev.satisfaction),
          teammembers: increment(targetStats.teamMembers, prev.teammembers),
        }));
      }, 16);

      return () => clearInterval(interval);
    }
  }, [isStatsInView]);

  // Testimonial logic
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, XYZ Company",
      testimonial:
        "Agkiya Media transformed our online presence! Their digital marketing strategies helped us double our leads in just 3 months.",
    },
    {
      name: "Jane Smith",
      role: "Founder, ABC Startup",
      testimonial:
        "The team is incredibly professional and creative. Our website traffic has skyrocketed since we started working with them.",
    },
    {
      name: "Michael Johnson",
      role: "Marketing Manager, DEF Corp",
      testimonial:
        "Their SEO services are top-notch. We’re now ranking on the first page of Google for all our target keywords!",
    },
    {
      name: "Sarah Williams",
      role: "Owner, GHI Store",
      testimonial:
        "Agkiya Media’s social media campaigns have brought us so many new customers. Highly recommend their services!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change card every 5 seconds (2s fixed + 3s transition)

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden text-white"
        style={{
          background: "url('/starry-sky.jpg') center/cover no-repeat",
          position: "relative",
        }}
      >
        {/* Twinkling Stars Background */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              scale: star.scale,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.5, 1, 0.5], // More visible stars
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={textIndex}
              className="text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {texts[textIndex]}
            </motion.h1>
          </AnimatePresence>

          <p className="text-lg text-gray-300 mt-4">
            Cutting-edge digital marketing solutions to drive growth and
            engagement.
          </p>

          <div className="mt-6 flex justify-center">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-110"
              onClick={() => router.push("/contact")}
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Image Segments */}
        <div className="absolute bottom-[50px] left-[10px] w-[750px] h-[750px] flex flex-wrap items-end justify-start p-5">
          {imageSegments.map((src, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, x: -80, y: i * 12 - 20 }}
              transition={{
                duration: 1,
                delay: i * 0.3,
                ease: "anticipate",
              }}
            >
              <Image
                src={src}
                alt={`Segment ${i + 1}`}
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          ))}

          <motion.div
            className="absolute"
            initial={{ opacity: 0, scale: 0.9, y: 160, x: -160 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 140,
              x: -70,
            }}
            transition={{
              duration: 1,
              delay: imageSegments.length * 0.3,
            }}
          >
            <Image
              src="/socialmedia-952091_1920-Photoroom-photoroom.png"
              alt="Final Merged Image"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Social Media Graphic */}
        <motion.div
          className="absolute top-10 left-10"
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          <Image
            src="/social-media.png"
            alt="Social Media"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Brand Marquee Section */}
      <section className="bg-darkBlue py-8 overflow-hidden">
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ["100%", "-100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="mx-10 text-1xl font-semibold text-gray-500"
              >
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Digital Marketing Matters Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 relative overflow-hidden">
        {/* Increasing Graph Animation */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          <motion.svg
            viewBox="0 0 500 200"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 200 L50 150 L100 160 L150 120 L200 140 L250 100 L300 130 L350 90 L400 110 L450 70 L500 80"
              stroke="rgba(251, 186, 89, 0.54)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 4, delay: 0.9, ease: "easeInOut" }}
            />
          </motion.svg>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Digital Marketing Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential strategies for modern brand growth and customer
              engagement in the digital age
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.4, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all 
                  border border-transparent hover:border-blue-400 relative overflow-hidden group"
              >
                <div className="flex items-center mb-4 relative z-10">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 relative z-10">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <Button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 
                text-white px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => router.push("/contact")}
            >
              Start Your Digital Journey
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Graphic with Parallax Effect */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: "url('/services-bg.jpg') center/cover no-repeat",
            backgroundAttachment: "fixed", // Parallax effect
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-660 max-w-2xl mx-auto">
              Comprehensive solutions to grow your business online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Digital Marketing Services */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-yellow-50/90 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Digital Marketing Services
              </h3>
              <ul className="space-y-4">
                {digitalMarketingServices.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Web Services */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-yellow-50/90 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Web Services
              </h3>
              <ul className="space-y-4">
                {webServices.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

     {/* Core Values Section */}
<section className="py-16 bg-gray-50">
  <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-3xl mx-auto mb-12"
    >
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Core Values</h2>
      <p className="text-base text-gray-600">
        These principles guide everything we do and shape our approach to
        digital marketing.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "Innovation",
          description:
            "We constantly explore new ideas and technologies to stay ahead of digital trends.",
          icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
          delay: 0.1,
        },
        {
          title: "Integrity",
          description:
            "We operate with honesty, transparency, and ethical practices in all our dealings.",
          icon: <Shield className="h-8 w-8 text-blue-600" />,
          delay: 0.2,
        },
        {
          title: "Excellence",
          description:
            "We strive for excellence in everything we do, delivering high-quality results.",
          icon: <Award className="h-8 w-8 text-blue-600" />,
          delay: 0.3,
        },
        {
          title: "Client-Focused",
          description:
            "We prioritize our clients' success and build lasting relationships based on trust.",
          icon: <Users className="h-8 w-8 text-blue-600" />,
          delay: 0.4,
        },
      ].map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 215, 0, 0.6)" }} // Golden outline on hover
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: value.delay }}
          className="bg-white p-6 rounded-xl border border-gray-250 shadow-sm text-center hover:border-gold transition-all cursor-pointer" // Added hover effect
        >
          <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            {value.icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            {value.title}
          </h3>
          <p className="text-sm text-gray-600">{value.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* About Section */}
      <section className="py-20 bg-[#f97015] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Section - About Text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left max-w-xl"
            >
              <h2 className="text-4xl font-bold mb-4">About Us</h2>
              <p className="text-lg">
                Agkiyamedia is a Digital Marketing Company in Patna providing services like SEO, Social Media Marketing, Pay Per Click services, Online Reputation Management, and Website Designing & Development. We help small businesses and startups create their brands.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-6"
              >
                <Button
                  className="bg-black text-white px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setIsAboutModalOpen(true)} // Open modal
                >
                  About
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Section - Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Digital Marketing */}
              <motion.div className="flex items-start space-x-4">
                <Briefcase className="w-12 h-12 text-white" />
                <div>
                  <h3 className="text-2xl font-bold">Digital Marketing</h3>
                  <p>We at Agkiya Media convert your business into a brand through a precise Digital marketing strategy that sells.</p>
                </div>
              </motion.div>

              {/* SEO Services */}
              <motion.div className="flex items-start space-x-4">
                <Camera className="w-12 h-12 text-white" />
                <div>
                  <h3 className="text-2xl font-bold">SEO Services</h3>
                  <p>Rank your website on the top of Google SERP with the help of our SEO Experts.</p>
                </div>
              </motion.div>

              {/* Website Development */}
              <motion.div className="flex items-start space-x-4">
                <Code className="w-12 h-12 text-white" />
                <div>
                  <h3 className="text-2xl font-bold">Website Development</h3>
                  <p>Engage your users with intuitive websites such as this to get more visitors and thus, a higher lead generation.</p>
                </div>
              </motion.div>

              {/* SMM Services */}
              <motion.div className="flex items-start space-x-4">
                <Users className="w-12 h-12 text-white" />
                <div>
                  <h3 className="text-2xl font-bold">SMM Services</h3>
                  <p>Work with the best Social Media Marketing company in Patna and help us create a loyal fan base for you.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Modal */}
      {/* About Modal */}
<AnimatePresence>
  {isAboutModalOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" // Centered modal
      onClick={() => setIsAboutModalOpen(false)} // Close modal on backdrop click
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white rounded-xl w-full max-w-4xl mx-4 overflow-y-auto max-h-[90vh] relative" // Adjusted width and height
        onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
      >
        <Button
          className="absolute top-4 right-4 z-50"
          onClick={() => setIsAboutModalOpen(false)} // Close modal
        >
          Close
        </Button>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Prachar</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're a team of digital enthusiasts on a mission to help businesses thrive in the digital world through
              innovative marketing strategies and data-driven solutions.
            </p>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2013, Prachar began with a simple mission: to help businesses navigate the increasingly
                complex digital landscape and achieve meaningful results through strategic marketing solutions.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of three passionate digital marketers has grown into a full-service digital
                marketing agency with a team of over 30 specialists dedicated to delivering exceptional results for our
                clients.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've helped hundreds of businesses across various industries establish their digital
                presence, connect with their audience, and achieve sustainable growth through innovative marketing
                strategies.
              </p>
              <p className="text-gray-600">
                Today, we continue to evolve with the ever-changing digital landscape, staying ahead of trends and
                leveraging the latest technologies to ensure our clients remain at the forefront of their industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Our+Story"
                  alt="Our Story"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-12 px-8 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }} // Added delay
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative digital marketing strategies that drive measurable results, foster
                meaningful connections with their audience, and ensure sustainable growth in an ever-evolving digital
                landscape.
              </p>
            </motion.div>

            {/* Our Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }} // Added delay
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading digital marketing agency known for our innovative approach, exceptional client
                service, and ability to deliver transformative results that help businesses thrive in the digital world.
              </p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      {/* Stats Section */}
{/* Stats Section */}
<section className="py-16 bg-gray-50" ref={statsRef}> {/* Adjusted padding to match Core Values Section */}
  <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="text-center mb-12" // Adjusted margin-bottom
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Our Achievements
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Numbers that speak for themselves
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Projects Completed */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 215, 0, 0.6)" }} // Golden outline on hover
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:border-gold transition-all cursor-pointer" // Added hover effect
      >
        <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-4xl font-bold text-gray-900 mb-3">
          {stats.projects}+
        </h3>
        <p className="text-lg text-gray-600">Projects Completed</p>
      </motion.div>

      {/* Happy Clients */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 215, 0, 0.6)" }} // Golden outline on hover
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:border-gold transition-all cursor-pointer" // Added hover effect
      >
        <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Smile className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-4xl font-bold text-gray-900 mb-3">
          {stats.clients}+
        </h3>
        <p className="text-lg text-gray-600">Happy Clients</p>
      </motion.div>

      {/* Client Satisfaction */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 215, 0, 0.6)" }} // Golden outline on hover
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:border-gold transition-all cursor-pointer" // Added hover effect
      >
        <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <ThumbsUp className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-4xl font-bold text-gray-900 mb-3">
          {stats.satisfaction}%
        </h3>
        <p className="text-lg text-gray-600">Client Satisfaction</p>
      </motion.div>

      {/* Team Members */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 215, 0, 0.6)" }} // Golden outline on hover
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:border-gold transition-all cursor-pointer" // Added hover effect
      >
        <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Award className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-4xl font-bold text-gray-900 mb-3">
          {stats.teammembers}+
        </h3>
        <p className="text-lg text-gray-600">Team Members</p>
      </motion.div>
    </div>
  </div>
</section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experiences with our services.
            </p>
          </motion.div>

          <div className="relative overflow-hidden h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }} // Transition duration
                className="absolute w-full max-w-7xl px-4"
              >
                <div className="bg-gray-50 p-6 rounded-xl border-2 border-gold shadow-sm text-center hover:shadow-md transition-duration-3">
                  {/* Testimonial Text (Centered) */}
                  <p className="text-lg text-gray-700 italic mb-4">
                    "{testimonials[activeIndex].testimonial}"
                  </p>

                  {/* Client Name and Role (Aligned to the Right) */}
                  <div className="flex justify-end">
                    <div className="text-right">
                      <h3 className="text-xl font-semibold text-gray-970">
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}