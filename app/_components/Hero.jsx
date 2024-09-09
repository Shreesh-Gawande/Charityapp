import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className="flex flex-col-reverse sm:flex-row relative justify-evenly mt-10 sm:mt-20 bg-[#F8F6E4] mx-auto max-w-[1024px] p-4">
          
          <div className="max-w-md mr-0 sm:mr-4"> 
            <h1 className="text-3xl sm:text-5xl font-bold" >
              Empower Hope, Transform Lives
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              The essence of charity by conveying the idea of uplifting individuals and communities through the power of hope and positive change.
            </p>
          </div>
          
          
          <div className="relative mb-6 sm:mb-0 ml-0 sm:ml-4"> 
            <Image 
              src="/image3.png" 
              alt="image" 
              width={400} 
              height={400}  
              className="relative z-10 rounded-2xl mx-auto sm:mx-0" 
            />
            <div className="absolute top-0 left-0 bg-[#FDC137] rounded-full w-16 h-16 sm:w-24 sm:h-24 -translate-x-4 -translate-y-4 sm:-translate-x-6 sm:-translate-y-6 z-20"></div> 
            <div className="absolute bottom-0 right-0 bg-[#399866] w-20 h-20 sm:w-32 sm:h-32 rounded-xl translate-x-4 translate-y-4 sm:translate-x-8 sm:translate-y-8 z-0"></div>
          </div>
        </div>
    )
}

export default Hero;
