import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between max-w-[1440px] w-11/12 mx-auto py-3'>
            <h1 className='text-2xl md:text-3xl text-[#171717] font-black ' style={{ fontFamily: "var(--font-montserrat)" }} > <span className='text-[#fe8a18]'>Care</span>giver </h1>
            <Link href='/#contact'  className='btn-primary tracking-wide transition-colors duration-300 ease-in-out hover:bg-[#fb7d01] hover:border-[#fb7d01] text-sm md:text-base font-medium py-1.5 px-2 rounded  md:py-2 md:px-4 border-2'>Book Appoinment</Link>
        </nav>
    );
};

export default Navbar;