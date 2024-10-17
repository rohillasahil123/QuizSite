import React, { useEffect, useState } from 'react'

const Hero = () => {
  const imageData = [
    {
      url: "/src/assets/output (1).jpg"
    },
    {
      url: "src/assets/output (2).jpg"
    },
    {
      url: "/src/assets/output (3).jpg"
    },
    {
      url: "/src/assets/output (4).jpg"
    },
    {
      url: "src/assets/output (5).jpg"
    },
    {
      url: "/src/assets/output (6).jpg"
    },
    {
      url: "/src/assets/output (7).jpg"
  },
  {
      url: "src/assets/output (8).jpg"
  },
  {
      url: "/src/assets/output (9).jpg"
  }
  ]

  const [slider, setSlider] = useState(0)


  const handelplus = () => {
    setSlider(slider === imageData.length - 1 ? 0 : slider + 1)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handelplus();
    }, 2000)
    return () => {
      clearInterval(timer)
    }
  }, [slider])
  return (
    <div className=''>
      <div className='w-[90%] mx-auto h-[80vh] my-5 relative' >
        {
          imageData.map((item, i) => (
            <div key={i} className={`${slider === i ? "block" : "hidden"}  `}>
              <img
                src={item.url}
                className='w-full h-[80vh] rounded-2xl object-cover overflow-hidden '
              />
            </div>
          ))}

        <div className='w-full mx-auto h-[80vh] bg-black opacity-10 absolute top-0 left-0 rounded-2xl' ></div>
        {/* <div className=' flex justify-center w-full text-[20px] md:text-[30px] absolute top-[50%] text-white  text-center font-semibold'>
                    <p className=' '>Solve Simple Quiz and <span className='text-[#e67e22]'>Earn Money</span></p>
                </div> */}

        <div className='flex justify-between w-full px-5  absolute top-[50%] text-white' >


        </div>
      </div>
    </div>
  )
}

export default Hero