import Link from 'next/link';
import React from 'react';
import { FaHome, FaHeart, FaCar } from "react-icons/fa";
const Services = () => {

    const services = [
        {
            icon: FaHome,
            title: "In-Home Care",
            description:
                "In-home care provides personalized support to individuals who need assistance with daily activities while remaining in the comfort of their own home. Our caregivers help with essentials like bathing, dressing, meal preparation, medication reminders, mobility support, and light housekeeping. Whether it's part-time help or 24/7 care, our goal is to promote safety, independence, and dignity—ensuring every client receives the attention and compassion they deserve, right where they feel most at peace.",
        },
        {
            icon: FaHeart,
            title: "Companionship Care",
            description:
                "Our companionship care is all about building meaningful human connection. Beyond just helping with daily tasks, our caregivers provide emotional support, conversation, and friendly presence to combat loneliness and isolation. Whether it’s sharing stories over tea, going for walks, playing games, or simply being there to listen, we focus on enriching our clients’ lives with genuine care and companionship. Because sometimes, the most powerful kind of care is just knowing someone’s there.",
        },
        {
            icon: FaCar,
            title: "Errands & Transportation",
            description:
                "Our caregivers offer reliable assistance with errands and transportation to help clients stay active, independent, and engaged in daily life. From grocery shopping and pharmacy pickups to doctor’s appointments and social outings, we ensure safe, stress-free travel and support every step of the way. Whether it’s a quick trip to the store or a scheduled medical visit, we’re here to make sure your loved one gets where they need to go—with care, comfort, and a friendly companion by their side."
        },
    ];


    return (
        <section id='services' className='bg-gray-50'>
            <div className="max-w-[1440px] w-11/12 mx-auto py-12 md:py-20">
                <div className="flex items-center justify-center mb-10">
                    <h2 className='text-2xl font-black text-center  border-b-2 inline border-primary-color' style={{ fontFamily: "var(--font-montserrat)" }}>How We Help</h2>
                </div>
                {/* services card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-start p-6 bg-white  hover:border-primary-color rounded-lg transition-transform duration-300 ease-in-out border-2 border-white">
                            <div className="mb-4 p-3  bg-[#fffaea] rounded-full text-secondary-color -mt-14">
                                <service.icon size={40} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>{service.title}</h3>
                            <p className="text-gray-500 text-start text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-10">
                    <Link href='/learn-more' className="md:px-6 md:py-3 text-base py-2 px-4 transition-all duration-300 rounded md:rounded-md bg-primary-color text-prinary-color hover:opacity-90  cursor-pointer font-medium">
                        All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;