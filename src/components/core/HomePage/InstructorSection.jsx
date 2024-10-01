import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div className="mx-auto border-solid  border-sky-500 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
        <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[70%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#eee3e1] to-[#f2efec] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Ready to   <HighlightText text={"Secure "} /> Your <br/> Software?
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Get started with MutaEngine today and protect your software with the most advanced security technology available.
              </p>
            </div>
            
              <CTAButton active={true} linkto={"/signup"}>
                Start Now
              </CTAButton>
            
          </div>
    </div>
  )
}

export default InstructorSection