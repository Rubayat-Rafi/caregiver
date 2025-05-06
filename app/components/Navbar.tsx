import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between max-w-[1440px] w-11/12 mx-auto py-3'>
            <h1 className='text-3xl text-[#171717] font-black ' style={{ fontFamily: "var(--font-montserrat)" }} > <span className='text-[#fe8a18]'>Care</span>giver </h1>
            <button className='btn-primary transition-colors duration-300 ease-in-out hover:bg-[#fb7d01] hover:border-[#fb7d01]'>Book Appoinment</button>
        </nav>
    );
};

export default Navbar;