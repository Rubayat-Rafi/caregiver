'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Team = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)


    const teamMembers = [
        {
            photo: "/team/default_profile.png",
            name: "John Carter",
            credentials: "RN, CPR-Certified",
            philosophy: "Care is about dignity first.",
        },
        {
            photo: "/team/default_profile.png",
            name: "John Carter",
            credentials: "RN, CPR-Certified",
            philosophy: "Care is about dignity first.",
        },
        {
            photo: "/team/default_profile.png",
            name: "John Carter",
            credentials: "RN, CPR-Certified",
            philosophy: "Care is about dignity first.",
        },

    ];

    const handleActiveCard = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    }


    return (
        <section className="py-16 bg-gray-50 ">
            <div className="max-w-[1440px] mx-auto w-11/12">
                <div className="flex items-center justify-center mb-6 md:mb-10">
                    <h2 className='text-2xl font-black text-[#171717] text-center  border-b-2 inline border-[#fe8a18]' style={{ fontFamily: "var(--font-montserrat)" }}>Our Trusted Caregivers</h2>
                </div>

                {/* cards content  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center">
                    {teamMembers.map((member, index) => (
                        <div key={index}
                            onClick={() => handleActiveCard(index)}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow relative group">
                            <div className="w-full h-[500px] lg:h-[600px] relative ">
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className={`
                                    absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent 
                                    transform transition-all duration-300 ease-in-out
                                    ${activeIndex === index ? 'translate-y-0' : 'translate-y-full'}
                                    group-hover:translate-y-0
                                `}>
                                <h3 className="text-xl md:text-2xl font-semibold text-white">{member.name}</h3>
                                <p className="text-[#fe8a18] font-medium text-base md:text-lg">{member.credentials}</p>
                                <p className="text-sm md:text-base text-gray-200">{member.philosophy}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Team;