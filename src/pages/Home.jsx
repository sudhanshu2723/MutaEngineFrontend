import LearningGrid from "../components/core/AboutPage/LearningGrid";
import { FaStar } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import Footer from "../components/common/Footer";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";

import HighlightText from "../components/core/HomePage/HighlightText";


import StatsComponenet from "../components/core/AboutPage/Stats";
import bubble_banner from "../assets/Images/Bubble.svg";
import about_us_card_1 from "../assets/Images/shield_aboutUs.jpeg";
import about_us_our_story from "../assets/Images/about_us_our_story.jpeg";

const LearningGridArray = [
  {
    order: -1,
    heading: "You Innovate,We Secure.",
    description:
      "With MutaEngine, you can focus on creating cutting-edge software while we ensure it stays protected from threats. Our advanced technology keeps your intellectual property safe, allowing you to concentrate on what you do best.",
    BtnText: "Get Started",
    BtnLink: "/",
  },
  {
    order: 1,
    icons: <FaStar style={{ color: "#3ED5DD" }} />,
    heading: "Polymorphic Code",
    description:
      "MutaEngine constantly mutates your software’s code in real-time, making it nearly impossible for hackers to decompile or reverse-engineer.",
  },
  {
    order: 2,
    icons: <SiAdguard style={{ color: "#3ED5DD" }} />,
    heading: "360° Security",
    description:
      "Our multi-layered defense mechanisms ensure that every part of your software is protected, from code to data to user transactions.",
  },
  {
    order: 3,
    icons: <FaLocationArrow style={{ color: "#3ED5DD" }} />,
    heading: "Web3 Integration",
    description:
      "Fully compatible with decentralized applications, MutaEngine provides robust security for your blockchain projects.",
  },
];

function Home() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full items-center justify-center text-white py-16 lg:py-24">
        {/* Text Section */}
        <div className="relative mx-2 flex flex-col items-start justify-between w-full lg:w-[50%]">
          {/* Tagline Button */}
          <div className="group mx-auto lg:mx-0 mb-8 w-fit rounded-2xl bg-richblack-800 p-1 font-bold text-white drop-shadow-[0_-3px_5px_rgba(135,206,235,0.7)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
  <div className="flex flex-row items-center gap-2 rounded-lg px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
    <p>Protecting Code, Preserving Innovation</p>
  </div>
</div>



          {/* Heading */}
          <div className="text-left text-5xl font-bold leading-tight mb-6 chakra-petch-bold">
            Revolutionizing <br /> Software Security with <br />
            <HighlightText text={"Dynamic "} />
            Mutation
          </div>

          {/* Subheading */}
          <div className="mb-8 w-[90%] lg:w-[80%] text-left text-lg font-medium text-white">
            Introducing the Polymorphic Code Engine - A New Era in Protecting
            Your Software.
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-row gap-6">
            <CTAButton
              active={true}
              linkto={"/signup"}
              className="px-8 py-3 bg-[#00d8ff] hover:bg-opacity-80 text-black font-bold rounded-lg transition-all"
            >
              Learn More
            </CTAButton>
            <CTAButton
              active={false}
              linkto={"/login"}
              className="px-8 py-3 border border-white text-white hover:bg-[#00d8ff] hover:text-black font-bold rounded-lg transition-all"
            >
              Start Now
            </CTAButton>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[40%] py-11 lg:py-0">
          <div>
            <img
              src={bubble_banner} // Make sure to replace this with the actual image path
              alt="Polymorphic Code Engine"
              className="rounded-lg shadow-lg lg:w-full w-0"
            />
          </div>
        </div>
      </div>

      <StatsComponenet />

      <CodeBlocks
        position={"lg:flex-row"}
        codeColor={"text-white"}
        codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
        backgroundGradient={<div className="codeblock2 absolute"></div>}
      />
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex  items-center gap-10 lg:flex-row-reverse flex-col justify-between">
            {/* Image section for first section, now on the right */}
            <div className="flex justify-center items-center lg:w-[30%] order-2 lg:order-2">
              <img
                src={about_us_card_1}
                height={550}
                width={550}
                className="border-4 rounded-3xl border-blue-300" // Image remains unchanged
              />
            </div>

            {/* Text section for first section, now on the left */}
            <div className="my-24 flex lg:w-[60%] flex-col  gap-10 order-1 lg:order-1">
              <h1 className="bg-gradient-to-br chakra-petch-bold from-[#d7d1dc] via-[#ece7e7] to-[#f0eeea] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                What is the <br /> <HighlightText text={"Polymorphic"}/>  Code Engine?
              </h1>

              <p className="text-base font-medium text-white montserrat-regular lg:w-[95%]">
                Polymorphic code engine dynamically mutates the software's
                source code in real-time, preventing reverse engineering and
                ensuring enhanced security.
              </p>
              <div className="flex justify-center lg:justify-start">
              <div className="rounded-2xl bg-[#0b0e15]   text-white shadow-[0_0_10px_3px_rgba(0,196,255,0.6)] ring-1 ring-[#00c4ff] transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(0,196,255,0.8)]">
                <CTAButton active={false} linkto={"/signup"}>
                  Learn More
                </CTAButton>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col-reverse items-center gap-10 lg:flex-row-reverse justify-between">
            {/* Image section for second section, now on the left */}
            <div className="flex justify-center items-center lg:w-[30%] order-1 lg:order-1">
            
               <img
                src={about_us_our_story}
                alt="no image"
                height={550}
                width={550}
                className="border-4 rounded-3xl border-blue-300"
              />
            </div>

            {/* Text section for second section, now on the right */}
            <div className="my-24 flex lg:w-[60%] flex-col gap-10 order-2 lg:items-end lg:order-2">
              <h1 className=" chakra-petch-bold bg-gradient-to-br from-[#d7d1dc] via-[#ece7e7]  to-[#f0eeea] bg-clip-text text-4xl lg:text-end font-semibold text-transparent lg:w-[70%] ">
                How it <HighlightText text={" Works "} /> ?
              </h1>

              <p className="text-base font-medium text-white lg:w-[95%] items-end">
                By constantly changing the software code during access or
                execution, the Polymorphic Code Engine creates a moving target,
                making it extremely difficult for hackers to analyze or
                decompile.
              </p>
              <div className="flex justify-center lg:justify-start">
              <div className="rounded-2xl bg-[#0b0e15]   text-white shadow-[0_0_10px_3px_rgba(0,196,255,0.6)] ring-1 ring-[#00c4ff] transition-all duration-300 lg:text-end hover:shadow-[0_0_15px_5px_rgba(0,196,255,0.8)]">
                <CTAButton active={false} linkto={"/signup"}>
                  Learn More
                </CTAButton>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid LearningGridArray={LearningGridArray} />
      </section>

      {/* Section 3 */}

      <div className=" flex justify-center items-center py-16">
          <div className="flex flex-col lg:flex-row bg-gradient-to-r from-[#1e1e1e] to-[#323232] rounded-2xl p-10 text-center max-w-6xl shadow-lg">
            {/* Text Section */}
            <div className="p-10 text-center lg:text-left lg:flex-1">
              <h1 className="text-4xl chakra-petch-bold font-semibold text-white mb-6">
                 Ready to <HighlightText text={"Secure"}/>  Your Software?
              </h1>
              <p className="text-lg montserrat-regular text-white mb-8">
                  Get started with MutaEngine today and protect your software with the most advanced security technology available.
              </p>
            </div>

            {/* Button Section */}
            <div className="py-8 lg:py-0 lg:pl-10 flex justify-center items-center lg:flex-1">
              <button className="bg-[#00f0ff] hover:bg-[#00b8c4] text-black font-semibold py-3 px-8 rounded-xl transition duration-300 ease-in-out">
             Start Now
              </button>
            </div>
          </div>
        </div>


      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
