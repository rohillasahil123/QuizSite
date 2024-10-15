import React from "react";
// import { Link } from "react-router-dom";
import GoQuizzy from "../../assets/MainGoQuizzy.png"


const Header = () => {
  return (
    
      <div className=" h-[60px] w-full flex justify-between  shadow-xl  text-violet-900 text-center items-center  ">
        <div className="  ml-[80px] hover:cursor-pointer  ">
          <img
            src={GoQuizzy}
            alt=""
            srcset=""
            className="w-[50px] h-[50px] mr-[10px]"
          />
        </div>
        <div className="flex space-x-4 mr-12 font-semibold hover:cursor-pointer text-[17px]  ">
          <div>
            {" "}
            Home
            {/* <Link to="/homePage"></Link> */}
          </div>
          <div>
            {" "}
            Contect
            {/* <Link to="/contest"></Link> */}
          </div>
          <div className="flex">
            {/* <Link to='/amountPage'></Link> */}
            Amount
          </div>
          <div>Logout</div>
        </div>



      </div>

  );
};

export default Header;