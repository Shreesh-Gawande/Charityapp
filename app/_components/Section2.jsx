import React from 'react';
import Card from './Card';

function Section2() {
  return (
    <div className='mt-32 w-full'>
      <div className='flex flex-col items-center justify-center w-full gap-4'>
        <h1 className='text-4xl font-bold' style={{ fontFamily: "Manuale" }}>Urgent Causes</h1>
        <p className='text-xl text-center'>Supporting urgent causes, changing lives.</p>
      </div>
      <div className='flex justify-center w-full'>
        <div className='flex flex-col sm:flex-row w-full max-w-[1024px] justify-between gap-8 mt-8 px-4'>
          <Card 
            imageSrc="/earthquake.webp" 
            heading="Morocco Strikes With Earthquake" 
            description="Current situation of Morocco have gone horrible due to the strike of Earthquake"
            price="$4400"
          />
          <Card 
            imageSrc="/vaccine.jpg" 
            heading="Harmful Disease in Air" 
            description="World have been infected with deadly life taking virus ..."
            price="$7888"
          />
          <Card 
            imageSrc="/flood.webp" 
            heading="Patna Suffers With Heavy Flood" 
            description="People in Patna have suffered a very heavy flood in past few days"
            price="$11,00"
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
