import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";

import CTAButton2 from "../../../components/core/HomePage/Button2";


const LearningGrid = ({LearningGridArray}) => {
  return (
    <div className=" flex flex-col lg:flex-row lg:justify-between chakra-petch-bold lg:mx-auto w-[350px] xl:w-fit gap-x-20 mb-12">
       <div className="xl:w-[60%] mx-16 gap-11 pb-10 xl:pb-0">
                <div className="text-6xl chakra-petch-bold font-semibold my-11">
                  {LearningGridArray[0].heading}
                
                  
                  <HighlightText text={LearningGridArray[0].highlightText} />
                </div>
                <p className="text-richblack-300 font-medium my-11">
                  {LearningGridArray[0].description}
                </p>

                <div className="w-fit mt-2 my-11">
                  <CTAButton2 active={true}  linkto={LearningGridArray[0].BtnLink}>
                    {LearningGridArray[0].BtnText}
                  </CTAButton2>
                </div>
              </div>
      <div className="">
      {LearningGridArray.map((card, i) => {
        return (
          <div key={i} >
        
        {card.order >= 0 && (
  <div className="flex flex-col px-6 lg:px-28">
    <div className="flex items-center gap-4 lg:gap-8">
      <div className="text-2xl border-2 rounded-full border-blue-800 p-2 bg-blue-800">
        {card.icons}
      </div>
      <h1 className="text-richblack-5  text-lg">
        {card.heading}
      </h1>
    </div>
    <div className="p-4">
      <p className="text-richblack-300 font-medium">
        {card.description}
      </p>
    </div>
  </div>
)}

            
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default LearningGrid;