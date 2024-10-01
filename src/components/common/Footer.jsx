import React from "react";


// Images
import Logo from "../../assets/Images/logo.png";

// Icons
import { FaFacebook,FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="">
      <div className="flex lg:flex-row   max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* Section 1 */}
          <div className="lg:w-[100%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="w-[20%] flex flex-col gap-3 lg:w-[10%] lg:h-[20%] mb-7 lg:pl-0">
              <img src={Logo} alt="" className="object-contain" />
            </div>

           <div className="">
           <div className="w-[88%] lg:w-[100%] mb-7 lg:pl-0 flex gap-8">
            <div>
            <h1 className="text-richblack-50 font-semibold text-[12px]">
              Overview
              </h1>
            
              </div>     

                <div>
            <h1 className="text-richblack-50 font-semibold text-[12px]">
                About Us
              </h1>
            
              </div>   

                <div>
            <h1 className="text-richblack-50 font-semibold text-[12px]">
              Contact
              </h1>
            
              </div>   

                <div>
            <h1 className="text-richblack-50 font-semibold text-[12px]">
                Features
              </h1>
            
              </div>          

             <div>
             <h1 className="text-richblack-50 font-semibold text-[12px] ">
                Privacy Policy
              </h1>
             
             </div>
         
              <div>
              <h1 className="text-richblack-50 font-semibold text-[12px]">
                Terms Of Use
              </h1>
              </div>

           
            
            </div>
           </div>
          </div>

          {/* Section 2 */}
          
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
          MutaEngine @ 2024. All rights reserved.
          </div>

          <div className="text-center">
          <ul className="flex gap-x-3 mt-5">
              <li className="hover:text-richblack-300">
                <a href="https://www.facebook.com">
                  <FaFacebook size={25} />
                </a>
              </li>
              <li className="hover:text-richblack-300">
                <a href="https://www.instagram.com">
                  <FaInstagram size={25} />
                </a>
              </li>
              <li className="hover:text-richblack-300">
                <a href="https://www.twitter.com">
                  <FaTwitter size={25} />
                </a>
              </li>
              <li className="hover:text-richblack-300">
                <a href="https://www.youtube.com">
                  <FaYoutube size={25} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;