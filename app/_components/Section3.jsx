import React from 'react';

function Section3() {
  return (
    <div className='bg-white mt-32 pb-52'>
       <div className='flex flex-col items-center justify-evenly w-full'>
        <h1 className='text-4xl font-bold mt-20 text-center' >
          Making a difference for those <br></br>who face hardship
        </h1>
      </div>

      <div className='flex flex-wrap justify-center gap-14 w-full max-w-[1024px] mx-auto mt-12'>
        
        <div className='text-center w-72 border-[6px]  border-[#F8F6E4] rounded-lg p-4 hover:border-[#399866] transition duration-300 shadow-lg'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#058a57"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-hand-coins mx-auto"
          >
            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
            <path d="m2 16 6 6" />
            <circle cx="16" cy="9" r="2.9" />
            <circle cx="6" cy="5" r="3" />
          </svg>
          <h1 className='text-xl font-bold mt-6' >Donate Money</h1>
          <p className='text-gray-600 mt-2' >
            Your small help can change someone else’s life and make them happy.
            You'll add a good deed to your cart.
          </p>
          <button className='mt-6 px-4 py-2 bg-[#F8F6E4] text-black rounded-lg hover:bg-[#FDC138] transition duration-300 shadow-md'>
            Donate Now
          </button>
        </div>

        
        <div className='text-center w-72 border-[6px]  border-[#F8F6E4] rounded-lg p-4 hover:border-[#399866] transition duration-300 shadow-lg'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#058a57"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shirt mx-auto"
          >
            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
          </svg>
          <h1 className='text-xl font-bold mt-6' >Donate Clothes</h1>
          <p className='text-gray-600 mt-2' >
            Your small help can change someone else life and can make someone happy and you will have a good deed added in your cart
          </p>
          <button className='mt-6 px-4 py-2 bg-[#F8F6E4] text-black rounded-lg hover:bg-[#FDC138] transition duration-300 shadow-md'>Donate Now</button>
        </div>

       
        <div className='text-center w-72 border-[6px]  border-[#F8F6E4] rounded-lg p-4 hover:border-[#399866] transition duration-300 shadow-lg'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#058a57"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-soup mx-auto"
          >
            <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
            <path d="M7 21h10" />
            <path d="M19.5 12 22 6" />
            <path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" />
            <path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" />
            <path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" />
          </svg>
          <h1 className='text-xl font-bold mt-6' >Donate Food</h1>
          <p className='text-gray-600 mt-2' >
          Your small help can change someone else life and can make someone happy and you will have a good deed added in your cart
          </p>
          <button className='mt-6 px-4 py-2 bg-[#F8F6E4] text-black rounded-lg hover:bg-[#FDC138] transition duration-300 shadow-md'>Donate now</button>
        </div>
      </div>
    </div>
  );
}

export default Section3;
