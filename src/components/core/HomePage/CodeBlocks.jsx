import React from "react";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className="flex flex-col border-2 border-blue-900 rounded-2xl p-6 lg:py-6 items-center w-[90%] lg:w-[60%] justify-center my-20 mx-auto">
      {/* Section 1 */}

      {/* Section 2: Code Block */}
      <div className="relative h-full flex flex-row py-6 px-8 text-sm sm:text-base leading-6 sm:leading-7 w-[90%] lg:w-[80%] rounded-xl bg-gradient-to-r from-[#111827] via-[#0f1624] to-[#111827] shadow-2xl justify-center items-center mx-auto">
        {/* Background Gradient */}
        {backgroundGradient}

        {/* Line Numbers */}
        <div className="text-center flex flex-col w-[15%] select-none text-[#4b5264] font-inter font-bold">
          {[...Array(18)].map((_, idx) => (
            <p key={idx}>{idx + 1}</p>
          ))}
        </div>

        {/* Code Block */}
        <div className={`w-[95%] flex flex-col gap-2 font-mono ${codeColor} pr-2`}>
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>

        {/* Code Block Shadow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-[#0f1624]/30 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default CodeBlocks;
