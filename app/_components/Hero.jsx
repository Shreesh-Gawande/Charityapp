import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className="flex relative justify-evenly mt-20 bg-[#F8F6E4] mx-auto max-w-[1024px] ">
          <div className="max-w-md mr-4"> 
            <h1 className="text-5xl font-bold" style={{ fontFamily: "Times New Roman" }}>
              Empower Hope, Transform Lives
            </h1>
            <p className="mt-4 text-xl" style={{ fontFamily: "Times New Roman" }}>
              The essence of charity by conveying the idea of uplifting individuals and communities through the power of hope and positive change.
            </p>
          </div>
          <div className="relative ml-4 "> 
            <Image 
              src="/image3.png" 
              alt="image" 
              width={400} 
              height={400}  
              className="relative z-10 rounded-2xl" 
            />
            <div className="absolute top-0 left-0 bg-[#FDC137] rounded-full w-24 h-24 -translate-x-6 -translate-y-6 z-20"></div> 
            <div className="absolute bottom-0 right-0 bg-[#399866] w-32 h-32 rounded-xl translate-x-8 translate-y-8 z-0"></div>
          </div>
        </div>
      )
       
      
}

export default Hero
