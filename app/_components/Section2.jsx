import React from 'react'
import Card from './Card'

function Section2() {
  return (
    <div className='  mt-32 w-full'>
        <div className='flex flex-col items-center justify-evenly w-full gap-4'>
            <h1 className='text-3xl font-bold'style={{ fontFamily: "Times New Roman" }}>Urent Causes</h1>
            <p className='font-semibold'>Supporting urgent causes, changing lives.</p>
        </div>
      <div className='flex w-full max-w-[1024px] justify-between'>
        <Card/>
      </div>
    </div>
  )
}

export default Section2
