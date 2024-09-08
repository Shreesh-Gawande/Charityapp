import Image from 'next/image'
import React from 'react'
import { FacebookIcon, YoutubeIcon } from 'lucide-react';
import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

function Footer() {
  return (
    <div className='bg-[#399866] w-full max-w-[1300px] m-10 h-96 py-8 mx-auto rounded-3xl'>
        <div className='flex justify-evenly gap-8'>
            <div>
                <Image src="" alt='logo' width={200} height={200}/>
            </div>
            <div className='flex gap-16 mt-8 '>
                <div className='flex flex-col gap-4'>
                  <h1 className='text-white font-bold mb-2'>Company</h1>
                  <p className='text-white'>About</p>
                  <p className='text-white'>Features</p>
                  <p className='text-white'>Works</p>
                  <p className='text-white'>Career</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <h1 className='text-white font-bold mb-2'>Help</h1>
                  <p className='text-white'>Customer Support</p>
                  <p className='text-white'>Delivery Details</p>
                  <p className='text-white'>Terms & Conditions</p>
                  <p className='text-white'>Privacy Policy</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <h1 className='text-white font-bold mb-2'>Resources</h1>
                  <p className='text-white'>Free eBooks</p>
                  <p className='text-white'>Development Tutorial</p>
                  <p className='text-white'>How to - Blog</p>
                  <p className='text-white'>Youtube Playlist</p>
                </div>
            </div>

            
            <div className='grid grid-cols-2 gap-4 mt-8'>
                <div className=' flex justify-center p-2 bg-[#399866] rounded-full border h-12 w-12 items-center border-white text-white'>
                    <FacebookIcon className="w-6 h-6"/>
                </div>
                <div className=' flex justify-center p-2 bg-[#399866] rounded-full border h-12 w-12 items-center border-white text-white'>
                    <InstagramLogoIcon className="w-6 h-6"/>
                </div>
                <div className=' flex justify-center p-2 bg-[#399866] rounded-full border h-12 w-12 items-center border-white text-white'>
                    <TwitterLogoIcon className="w-6 h-6"/>
                </div>
                <div className=' flex justify-center p-2 bg-[#399866] rounded-full border h-12 w-12 items-center border-white text-white'>
                    <YoutubeIcon className="w-6 h-6"/>
                </div>
            </div>
        </div>     
        
        <div className='flex items-center justify-center mt-16'>
            <div className='w-full max-w-[1024px] h-[2px] bg-white'></div>
        </div>
        
        <div className='text-center mt-4'>
            <p className='text-white text-sm'>© 2024 Your Company. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
