"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react'; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center p-6 md:px-20 bg-[#F8F6E4]">
      
      <Image src="/logo.png" alt="logo" width={75} height={75} className='z-100' />

     
      <div className="hidden md:flex gap-7">
        <Link href="/">Home</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/">Blogs</Link>
        <Link href="/productlist" >ProductList</Link>
      </div>

      <div className="hidden md:block">
        <Button>Donate</Button>
      </div>

     
      <div className="md:hidden">
        {menuOpen ? (
          <XIcon className="w-8 h-8 text-black" onClick={toggleMenu} />
        ) : (
          <MenuIcon className=" text-black w-8 h-8" onClick={toggleMenu} />
        )}
      </div>

      
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full text-black bg-[#F8F6E4] flex flex-col items-center gap-4 py-4 z-50">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/" onClick={toggleMenu}>About Us</Link>
          <Link href="/" onClick={toggleMenu}>Contact Us</Link>
          <Link href="/" onClick={toggleMenu}>Blogs</Link>
          <Link href="/productlist" onClick={toggleMenu}>ProductList</Link>
          <Button onClick={toggleMenu}>Donate</Button>
        </div>
      )}
    </div>
  );
}

export default Header;
