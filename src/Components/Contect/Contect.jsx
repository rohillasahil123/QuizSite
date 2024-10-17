import React from 'react'
import contectImage from "../../assets/contect.png"

const Contect = () => {
    return (
        <div className='w-[80%] flex jusrify-center mx-auto h-[100vh]   '>
            <div className="text-gray-600 body-font relative h-[90vh] mt-3 w-full flex justify-around bg-white rounded-lg shadow-xl">
                <div>
                    <img src={contectImage} alt=""  className='shadow-xl'  />
                </div >
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col    md:py-8  md:mt-0 h-[40%]  ">
                    <h2 className="text-gray-900  mt-4 font-bold title-font text-2xl ">Contect-Us</h2>
                    <div className="relative mb-3">
                        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-2">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-2">
                        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                </div>
            </div>
        </div>
    )
}

export default Contect
