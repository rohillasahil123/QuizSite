import React from "react";
import {
  CiHeart,
  CiMail,
  CiFacebook,
  CiLinkedin,
  CiTwitter,
  CiInstagram,
} from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { IoIosHome } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import GoQuizzy from "../../assets/MainGoQuizzy.png";

const Footer = () => {
  return (
    <div className="w-full  bg-violet-900 text-white h-auto sm:text-center">
      <div className="flex flex-col lg:flex-row justify-around py-8 px-4 lg:px-24">
        <div className="mb-8 lg:mb-0">
          <div className="font-bold text-lg">CATEGORIES</div>
          <div className="mt-6 flex items-center">
            <IoIosHome className="mt-[5px] mr-2" /> Home
          </div>
          <div className="flex items-center">
            <FcAbout className="mt-[5px] mr-2" /> About
          </div>
          <div className="flex items-center">
            <CiMail className="mt-[5px] mr-2" /> Contact
          </div>
          <div className="flex items-center">
            <FaArrowAltCircleRight className="mt-[5px] mr-2" /> Login
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mb-8 lg:mb-0">
          <h1 className="flex justify-center">
            <ImQuotesLeft className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px]" />
          </h1>
          <h1 className="font-bold mt-4 lg:mt-2 text-lg">
            "Everyone loves sport" <br /> "And everyone loves a quiz"
          </h1>
          <p className="font-semibold">@Sue Barker</p>
        </div>

        {/* Contact Section */}
        <div className="text-center lg:text-left">
          <div className="font-bold mb-4">CONTACT</div>
          <div className="text-2xl flex justify-center lg:justify-start items-center mb-4">
            <img src={GoQuizzy} alt="GoQuizzy Logo" className="h-[60px]" />
            <div className="ml-3">
              <h1 className="font-bold">GoQuizy</h1>
              <p className="text-lg">QUIZ GAME</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start items-center">
            <IoMail className="mr-2" />
            <h1>GoQuizy.co.in</h1>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black w-full h-16 text-white text-center flex flex-col lg:flex-row justify-between items-center px-4">
        <div className="font-semibold mb-4 lg:mb-0 mt-2">
          @CopyRight GoQuizy
        </div>
        <div className="flex space-x-3">
          <CiFacebook className="h-[20px] w-[20px] lg:h-[30px] lg:w-[30px] hover:cursor-pointer" />
          <CiInstagram className="h-[20px] w-[20px] lg:h-[30px] lg:w-[30px] hover:cursor-pointer" />
          <CiLinkedin className="h-[20px] w-[20px] lg:h-[30px] lg:w-[30px] hover:cursor-pointer" />
          <CiTwitter className="h-[20px] w-[20px] lg:h-[30px] lg:w-[30px] hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
