import React from "react";

const Stats = [
  { count: "5000+", label: "ACTIVE USERS" },
  { count: "300+", label: "COMPANIES TRUSTING MUTAENGINE" },
  { count: "$500M+", label: "TRANSACTION SECURED" },
];

const StatsComponent = () => {
  return (
    <div className="bg-[#0c0f17] py-10">
      {/* Stats Section */}
      <div className="flex flex-col gap-10 justify-center w-11/12 max-w-maxContent text-white mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center">
          {Stats.map((data, index) => (
            <div
              className="flex items-center py-4 justify-center md:justify-start"
              key={index}
            >
              {/* Count */}
              <h1 className="text-[32px] chakra-petch-bold md:text-[40px] font-bold p-2 text-[#d0d4db]">
                {data.count}
              </h1>
              {/* Label */}
              <h2 className="font-medium w-[50%]  md:w-[40%] text-[16px] md:text-[18px] p-2 text-[#00b3ff]">
                {data.label}
              </h2>

              {/* Divider only on large screens */}
              {index !== Stats.length - 1 && (
                <div className="hidden lg:block mx-4 text-white text-[24px]">|</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
