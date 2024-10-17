import React from 'react';
import offerImage from "../../../assets/FestiveOfferDesktop.png";

const Offer = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between  md:mt-0  '>
            <div className='space-y-4 md:w-1/2 p-4 md:p-0 '>
                <h1 className='text-4xl md:text-5xl font-bold text-green-500'>₹ 1 Crore</h1>
                <h1 className='text-2xl md:text-3xl font-medium text-orange-600'>
                    Daily Winnings in Real Cash with easy Quiz
                </h1>
                <h1 className='text-2xl md:text-3xl font-bold text-white'>
                    Download app & Get ₹50 free!
                </h1>
            </div>
            <div className='md:w-1/2'>
                <img className='h-full w-full object-cover' src={offerImage} alt="Festive Offer" />
            </div>
        </div>
    );
}

export default Offer;
