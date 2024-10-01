import React from "react";

import { FaStar } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";

import LearningGrid from "../components/core/AboutPage/LearningGrid";
import about_us_card from "../assets/Images/about_us_card.png";
import about_us_our_story from "../assets/Images/about_us_our_story.jpeg";
import Footer from "../components/common/Footer";
import CTAButton from "../components/core/HomePage/Button";
import shieldImage from "../assets/Images/shield_aboutUs.jpeg";
import block1 from "../assets/Images/aboutUs_card_1.png";
import block2 from "../assets/Images/about_us_card_2.png";

const CardComponent = ({ image, heading, description }) => {
  return (
    <div className="flex flex-col items-center bg-[#1e1e3e] rounded-2xl p-6 lg:p-8 w-full lg:w-[30%] border-4 border-blue-200  shadow-lg h-full">
      <img
        src={image}
        alt="Card Image"
        className="rounded-md w-full h-48 object-cover mb-4"
      />
      <h2 className="text-white chakra-petch-bold text-xl font-semibold mb-4 text-center">
        {heading}
      </h2>
      <p className="text-richblack-300 text-center font-medium flex-grow">
        {description}
      </p>
    </div>
  );
};

const LearningGridArray = [
  {
    order: -1,
    heading: "Our Values",
    description:
      "We are driven by innovation, integrity, excellence, and a customer-centric approach to deliver unparalleled software security solutions.",
    BtnText: "Get Started",
    BtnLink: "/",
  },
  {
    order: 1,
    icons: <FaStar style={{ color: "#3ED5DD" }} />,
    heading: "Innovation",
    description:
      "We are committed to pushing the boundaries of whats possible in software security. Our team constantly explores new technologies and methodologies to keep our solutions at the forefront of the industry",
  },
  {
    order: 2,
    icons: <SiAdguard style={{ color: "#3ED5DD" }} />,
    heading: "Integrity",
    description:
      "Trust is at the core of everything we do. We are dedicated to providing transparent, reliable, and effective security solutions that our clients can depend on.",
  },
  {
    order: 3,
    icons: <FaLocationArrow style={{ color: "#3ED5DD" }} />,
    heading: "Excellence",
    description:
      "We strive for excellence in every aspect of our work, from the quality of our products to the level of service we provide to our clients.",
  },
  {
    order: 4,
    icons: <FaStar style={{ color: "#3ED5DD" }} />,
    heading: "Customer-Centric",
    description:
      "Our clients are our top priority. We work closely with them to understand their unique needs and tailor our solutions to meet those needs.",
  },
];

const About = () => {
  return (
    <div>
      <div></div>
      <section className="lockImage lg:bg-cover  h-5/6 py-5">
        <div className="relative   flex   max-w-maxContent flex-col  gap-10  text-white">
          <header className=" mx-20 lg:mx-44 py-14 lg:py-20   text-5xl lg:text-7xl  font-bold w-[60%] lg:w-[40%]">
            <div className="chakra-petch-bold">Our Mission</div>
            <p className="lg:mx-auto mt-3 montserrat-regular text-xl lg:text-2xl font-medium text-white lg:w-[100%]">
              At MutaEngine, our mission is to revolutionize software security
              by providing cutting-edge solutions that protect your software
              from piracy, reverse engineering, and unauthorized modifications.
              We believe in empowering developers and companies to focus on
              innovation while we ensure their intellectual property remains
              secure.
            </p>

            <div className="mt-8 flex flex-row gap-7">
              <div className="relative inline-block">
              
                <div className="rounded-2xl bg-[#0b0e15]   text-white shadow-[0_0_10px_3px_rgba(0,196,255,0.6)] ring-1 ring-[#00c4ff] transition-all duration-300 lg:text-end hover:shadow-[0_0_15px_5px_rgba(0,196,255,0.8)]">
                <CTAButton active={false} linkto={"/signup"}>
                  Learn More
                </CTAButton>
              </div>
              
              </div>
            </div>
          </header>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0f0f1e] via-[#13132f] to-[#19193f]">
        <div className="flex justify-center text-7xl text-white py-11 chakra-petch-bold">
          Who We Are
        </div>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div>
              <img
                src={shieldImage}
                alt="no image"
                height={550}
                width={550}
                className="border-4 rounded-3xl border-blue-300"
              />
            </div>
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <p className=" text-2xl montserrat-regular font-medium text-white montserrat-regular lg:w-[95%]">
                MutaEngine is a team of passionate cybersecurity experts,
                software engineers, and innovators united by a common vision: to
                create a world where software developers can innovate without
                fear of their work being compromised. Our founders, driven by
                decades of combined experience in cybersecurity, software
                development, and artificial intelligence, recognized the growing
                threats in the digital landscape and set out to build a company
                that could offer robust, future-proof security solutions. We are
                deeply committed to staying ahead of these threats, constantly
                evolving our approach to ensure that our clients' software
                remains secure against the most sophisticated attacks.
              </p>
            </div>
          </div>

          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between text-richblack-500">
            <div className="flex flex-col items-center gap-10 lg:flex-row-reverse justify-between">
              <div>
                <img
                  src={shieldImage}
                  alt="no image"
                  height={550}
                  width={550}
                  className="border-4 rounded-3xl border-blue-300"
                />
              </div>
              <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                <p className="text-2xl font-medium text-white montserrat-regular lg:w-[95%]">
                  MutaEngine is a team of passionate cybersecurity experts,
                  software engineers, and innovators united by a common vision:
                  to create a world where software developers can innovate
                  without fear of their work being compromised. Our founders,
                  driven by decades of combined experience in cybersecurity,
                  software development, and artificial intelligence, recognized
                  the growing threats in the digital landscape and set out to
                  build a company that could offer robust, future-proof security
                  solutions. We are deeply committed to staying ahead of these
                  threats, constantly evolving our approach to ensure that our
                  clients' software remains secure against the most
                  sophisticated attacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center text-7xl text-white py-16 chakra-petch-bold">
          What We Do ?
        </div>
        <div>
          <p className="flex justify-center items-center text-center text-white text-xl px-28 sync-regular">
            We provide advanced software protection with our Polymorphic Code
            Engine, ensuring your applications stay secure from piracy, reverse
            engineering, and unauthorized modifications.
          </p>
        </div>
        <div className="flex  flex-col items-center lg:gap-10 lg:flex-row justify-center py-11">
          {/* Second Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:ml-40 lg:mr-40 border  ">
            <div className="flex flex-col justify-center items-center  gap-6 p-6 rounded-2xl  lg:w-[80%] lg:p-16 border-4 border-blue-200	">
              <p className="text-white font-semibold text-center">
                We specialize in advanced software protection through our
                innovative Polymorphic Code Engine. By constantly mutating the
                code at runtime, MutaEngine makes it extremely difficult for
                hackers to decompile or reverse-engineer software, providing an
                impenetrable barrier against unauthorized access and piracy.
              </p>
              <img src={block1} alt="Engine Image 1" className="rounded-md" />
            </div>

            <div className="flex flex-col justify-center items-center gap-6 border-4 p-6 rounded-2xl  lg:w-[80%] lg:p-16 border-blue-200  ">
              <p className=" text-white font-semibold text-center ">
                We specialize in advanced software protection through our
                innovative Polymorphic Code Engine. By constantly mutating the
                code at runtime, MutaEngine makes it extremely difficult for
                hackers to decompile or reverse-engineer software, providing an
                impenetrable barrier against unauthorized access and piracy.
              </p>
              <img src={block2} className="rounded-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid LearningGridArray={LearningGridArray} />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8 chakra-petch-bold">
          Why Choose MutaEngine ?
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch p-6">
          {/* Card 1 */}
          <CardComponent
            image={about_us_card}
            heading="State-of-the-Art Technology"
            description="Our Polymorphic Code Engine is a game-changer in the field of software security, offering unparalleled protection against reverse engineering and unauthorized modifications."
          />
          {/* Card 2 */}
          <CardComponent
            image={about_us_card}
            heading="Expert Team"
            description="Our team of cybersecurity professionals and software engineers brings a wealth of knowledge and experience to the table, ensuring that your software is protected by the best in the business."
          />
          {/* Card 3 */}
          <CardComponent
            image={about_us_card}
            heading="Proven Track Record"
            description="We have a history of successful partnerships with companies of all sizes, from startups to enterprises, helping them secure their software and protect their intellectual property."
          />
        </div>

        <section className=" text-white py-16 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full ">
            <img
              src={about_us_our_story} // Replace this with the actual image path
              alt="Our Story"
              height={650}
              width={650}
              className="shadow-lg w-full border-4 border-blue-200 rounded-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="w-full px-11 ">
            <h2 className="text-4xl font-bold mb-6 chakra-petch-bold text-center lg:text-left">
              Our Story
            </h2>
            <p className="text-white  mb-6 text-center lg:text-left">
              MutaEngine was born out of a simple realization: traditional
              methods of software protection were no longer sufficient in an age
              where hackers are constantly finding new ways to bypass security
              measures. Our founders set out to create a solution that could
              adapt and evolve in real-time, providing a level of protection
              that static methods simply couldn’t match.
            </p>
            <p className="text-white text-lg mb-6 text-center lg:text-left">
              What started as a small project has grown into a leading solution
              trusted by developers and companies around the world. Today,
              MutaEngine continues to innovate, constantly improving our
              technology to meet the challenges of tomorrow.
            </p>
            <div className="flex justify-center pt-11 lg:justify-start">
            <div className="rounded-2xl bg-[#0b0e15]   text-white shadow-[0_0_10px_3px_rgba(0,196,255,0.6)] ring-1 ring-[#00c4ff] transition-all duration-300 lg:text-end hover:shadow-[0_0_15px_5px_rgba(0,196,255,0.8)]">
                <CTAButton active={false} linkto={"/signup"}>
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
        <div className=" flex justify-center items-center py-16">
          <div className="flex flex-col lg:flex-row bg-gradient-to-r from-[#1e1e1e] to-[#323232] rounded-2xl p-10 text-center max-w-6xl shadow-lg">
            {/* Text Section */}
            <div className="p-10 text-center lg:text-left lg:flex-1">
              <h1 className="text-6xl chakra-petch font-semibold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-lg text-richblack-100 mb-8 w-[70%]">
                Have questions or want to learn more about how MutaEngine can
                protect your software? We'd love to hear from you. [Provide
                contact information, social media links, and a contact form.
              </p>
            </div>

            {/* Button Section */}
            <div className="py-8 lg:py-0  flex justify-center items-center lg:flex">
              <button className="bg-[#00f0ff] hover:bg-[#00b8c4] text-black font-semibold py-3 px-8 rounded-xl transition duration-300 ease-in-out">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default About;
