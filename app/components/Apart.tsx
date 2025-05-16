import Link from 'next/link';
import React from 'react';

const Apart = () => {
    return (
        <section className="relative my-12 lg:my-20 max-w-[1440px] mx-auto w-11/12 bg-primary-color rounded-2xl">

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-10 lg:p-12">
                <div className=" text-center third-text-color">
                    <h2 className="text-2xl font-black mb-4 uppercase " style={{ fontFamily: "var(--font-montserrat)" }}>
                        What Sets Us Apart?
                    </h2>
                    <p className=" text-sm md:text-base mb-6 text-gray-600" style={{ fontFamily: 'var(--font-inter' }}>
                        At UCL caregiver agency, we go beyond standard caregiving — we provide concierge-level service tailored to each client&apos;s lifestyle. Our caregivers don&apos;t just assist; they anticipate. From preparing your favorite home-cooked meal just the way you like it, to driving you to appointments, social events, or even your favorite café — we’re here for it all. Need help tidying up the house? Done. Need your dog walked? Already on it. Whether it’s running errands, setting up your TV remote, organizing your fridge, or simply being someone you enjoy spending time with, our caregivers are hand-picked to bring both skill and heart into your daily life. This is personalized care on your terms — because you deserve more than the basics.
                    </p>
                    <Link href='/learn-more' className="md:px-6 md:py-2 text-sm py-2 px-3 md:text-lg transition-all duration-300 rounded  md:rounded-md bg-white text-[#171717] hover:bg-gray-200 cursor-pointer font-medium">
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Apart;