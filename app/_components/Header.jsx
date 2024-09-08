import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className="flex justify-between items-center p-6 md:px-20  bg-[#F8F6E4]">
          <Image src="/logo.png" alt="logo" width={75} height={75} />
      
          <div className="flex gap-7 ">
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">Blogs</Link>
          </div>
      
          <div>
            <Button>Donate</Button>
          </div>
        </div>
      )
      
}

export default Header
