import React from 'react'

function Section1() {
  return (
    <div className='bg-[#399866] w-full max-w-[1024px] h-48 mt-32 mx-auto rounded-3xl'>
      <div className="flex justify-evenly items-center h-full mt-4"> 
        
        <div className='flex flex-col items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f8f7f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-plus">
            <path d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354" />
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M15 6h6" />
            <path d="M18 3v6" />
          </svg>
          <h1 className='text-3xl font-bold p-4' style={{ color: '#FDC137' }}>563</h1>
          <p className='text-white' >Project Completed</p>
        </div>

        <div className='flex flex-col items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/>
            <path d="M18 15l-2-2"/>
            <path d="M15 18l-2-2"/>
          </svg>
          <h1 className='text-3xl font-bold p-4' style={{ color: '#FDC137' }}>425</h1>
          <p className='text-white' >Trusted Partner</p>
        </div>

        <div className='flex flex-col items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fefbfb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-coins">
            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/>
            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/>
            <path d="m2 16 6 6"/>
            <circle cx="16" cy="9" r="2.9"/>
            <circle cx="6" cy="5" r="3"/>
          </svg>
          <h1 className='text-3xl font-bold p-4' style={{ color: '#FDC137' }}>978</h1>
          <p className='text-white' >Money Donated</p>
        </div>

        <div className='flex flex-col items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f7f7f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-heart">
            <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/>
            <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/>
            <path d="m2 15 6 6"/>
            <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/>
          </svg>
          <h1 className='text-3xl font-bold p-4' style={{ color: '#FDC137' }}>32</h1>
          <p className='text-white' >Active Volunteer</p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
