import React from "react";
import Googlepay from "../../../assets/Google Pay.png";
import Paytm from "../../../assets/paytm.png";
import PhonePay from "../../../assets/phonepay.png";
import Bhimpay from "../../../assets/Bhim.png";
import MakeIndia from "../../../assets/Made_in_india.png";
import noBot from "../../../assets/No_Bots.png";
import Secure_Payment from "../../../assets/Secure_Payment.png";
import Instant_Withdrawal from "../../../assets/Instant_Withdrawal.png";
import Customer_support from "../../../assets/Customer_support.png";

const Iconpay = () => {
  return (
    <div className="h-auto w-full py-8 space-y-10 ">
      <div className="flex flex-wrap justify-center items-center mt-10 ">
        <img src={MakeIndia} alt="" className="h-[60px] md:h-[80px] m-2" />
        <img src={noBot} alt="" className="h-[60px] md:h-[80px] m-2 ml-4 " />
        <img src={Secure_Payment} alt="" className="h-[60px] md:h-[80px] ml-4  m-2" />
        <img src={Instant_Withdrawal} alt="" className="h-[60px] md:h-[80px] ml-4 md:w-[90px] m-2" />
        <img src={Customer_support} alt="" className="h-[60px] md:h-[80px] m-2 ml-4" />
      </div>
      <div className="w-full text-center mt-10">
        <h1 className="font-semibold text-2xl md:text-3xl text-green-600">INSTANTLY</h1>
        <h2 className="font-bold text-white text-3xl md:text-4xl">Withdraw Winnings</h2>
      </div>
      <div className="flex flex-wrap justify-center w-full h-auto mx-auto text-center mt-10">
        {[
          { src: Googlepay, alt: "Google Pay" },
          { src: Paytm, alt: "Paytm" },
          { src: PhonePay, alt: "Phone Pay" },
          { src: Bhimpay, alt: "Bhim Pay" }
        ].map((icon, index) => (
          <div key={index} className="h-[60px] w-[200px] flex items-center justify-center bg-violet-800 rounded-xl m-2">
            <img src={icon.src} alt={icon.alt} className="h-[40px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Iconpay;
