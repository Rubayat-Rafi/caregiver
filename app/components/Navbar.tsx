import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between max-w-[1440px] w-11/12 mx-auto py-3'>
            <div className="h-auto w-20 lg:w-24">
                <Image src="/cgl-logo.png" alt="logo" width={500} height={500}
                    className="w-full h-full object-cover"
                    priority
                />
            </div>

            <Link href='/#contact' className='btn-primary tracking-wide transition-colors duration-300 ease-in-out hover:opacity-90 text-sm md:text-base font-medium py-2 px-4 rounded md:rounded-md  md:py-2 md:px-6 border-2 '>Book Appoinment</Link>
        </nav>
    );
};

export default Navbar;