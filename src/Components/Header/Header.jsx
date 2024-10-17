import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoQuizzy from "../../assets/MainGoQuizzy.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-[60px] w-full flex justify-between items-center bg-white shadow-xl text-violet-800">
      <div className="ml-[20px] md:ml-[80px] hover:cursor-pointer">
        <img
          src={GoQuizzy}
          alt="GoQuizzy Logo"
          className="w-[50px] h-[50px] mr-[10px]"
        />
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden mr-4 space-y-4">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? (
            <span className="text-2xl">&times;</span> 
          ) : (
            <span className="text-2xl">&#9776;</span> 
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`flex flex-col md:flex-row md:space-x-4 md:mr-12 font-semibold hover:cursor-pointer text-[14px] md:text-[17px] ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
        <Link to="/homePage" className="hover:text-violet-600">Home</Link>
        <Link to="/contact" className="hover:text-violet-600">Contact</Link>
        <div className="hidden md:block">Amount</div>
        <div className="hidden md:block">Logout</div>
      </div>
    </div>
  );
};

export default Header;
