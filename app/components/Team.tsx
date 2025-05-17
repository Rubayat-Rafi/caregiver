'use client'
import Image from 'next/image';
import React from 'react';
import image1 from '../../public/team/image1.jpg'
import image2 from '../../public/team/image2.jpg'
import image3 from '../../public/team/image3.jpg'
import image4 from '../../public/team/image4.webp'

const Team = () => {
    const teamimage = [
        { id: 1, photo: image1 },
        { id: 2, photo: image3 },
        { id: 3, photo: image2 },
        { id: 4, photo: image4 },
    ];

    return (
        <section className="py-16 bg-gray-50 ">
            <div className="max-w-[1440px] mx-auto w-11/12">
                <div className="flex items-center justify-center mb-6 md:mb-10">
                    <h2 className='text-2xl font-black text-center  border-b-2 inline border-primary-color' style={{ fontFamily: "var(--font-montserrat)" }}>Our Trusted Caregivers</h2>
                </div>

                {/* cards content  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-content-center">
                    {teamimage.map(team =>
                        <div key={team.id} className="w-full h-auto">
                            <Image
                                src={team.photo}
                                alt='Team image'
                                width={500}
                                height={500}
                                className='rounded-2xl shadow-2xl border-secondary-color border-2 transition-transform duration-300 hover:scale-105 w-full h-full'
                            />
                        </div>
                    )
                    }
                </div>

            </div>
        </section>
    );
};

export default Team;