import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <section id='about' className='max-w-[1440px] w-11/12 mx-auto py-12 md:py-20'>
            <div className="flex items-center justify-center mb-6 md:mb-10">
                <h2 className='text-2xl font-black text-[#171717] text-center  border-b-2 inline border-[#fe8a18]' style={{ fontFamily: "var(--font-montserrat)" }}>Who We Are</h2>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
                {/* content  */}
                <div className="lg:w-1/2 space-y-5 w-full">
                    <p className='text-sm md:text-base lg:text-lg font-normal text-gray-600 '>At United Care Links caregiver agency, we believe that care is more than a service—it&apos;s a relationship built on trust, empathy, and respect. Founded by a team of devoted doctors, experienced nurses, and a mission-driven entrepreneur, our agency was created with one goal in mind: to bring personalized, high-quality home care to the families who need it most.</p>
                    <p className='text-sm md:text-base lg:text-lg font-normal text-gray-600 '>With a focus on dignity and comfort, we offer a range of services that support independence while easing the burden on loved ones. Whether it&apos;s daily assistance, companionship, or transportation, our trained caregivers are here to help—always with kindness and professionalism.</p>
                    <p className='text-sm md:text-base lg:text-lg font-normal text-gray-600 '>At United Care Links caregiver agency, we believe that care is more than a service—it&apos;s a relationship built on trust, empathy, and respect. Founded by a team of devoted doctors, experienced nurses, and a mission-driven entrepreneur, our agency was created with one goal in mind: to bring personalized, high-quality home care to the families who need it most.</p>
                </div>


                {/* image  */}
                <div className='lg:w-1/2 w-full relative aspect-[7/5] lg:rounded-bl-full overflow-hidden shadow-[#fe8a18] shadow-md'>
                    <Image
                        src='/team-image.jpg'
                        alt='about image'
                        fill
                        className='object-cover '
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default About;