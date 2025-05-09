import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between max-w-[1440px] w-11/12 mx-auto py-3'>
            <h1 className='text-2xl md:text-3xl font-black' style={{ fontFamily: "var(--font-montserrat)" }} > <span className='text-secondary-color'>Care</span>giver </h1>
            <Link href='/#contact'  className='btn-primary tracking-wide transition-colors duration-300 ease-in-out hover:opacity-90 text-sm md:text-base font-medium py-1.5 px-2 rounded md:rounded-md  md:py-2 md:px-4 border-2 text-prinary-color font-semibold'>Book Appoinment</Link>
        </nav>
    );
};

export default Navbar;