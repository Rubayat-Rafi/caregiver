import React from 'react';
import { BsFillPeaceFill } from "react-icons/bs";
import {
    FaHandsHelping,
    FaBrain,
    FaHeart,
    FaClock,
    FaWalking,
    FaUtensils,
    FaCar,
    FaBroom,
    FaPills,
    FaHeartbeat,
    FaHome
} from 'react-icons/fa';

const LearnMorePage = () => {

    const learnData = [
        {
            icon: <FaHome className="text-accent-color" size={32} />,
            title: 'Home Care That Feels Like Family, Built on Trust',
            paragraph: 'At Caregiver Links, we connect you with compassionate, qualified caregivers who treat your loved ones like their own. Whether it’s daily support, companionship, or specialized care, our team is dedicated to creating a safe and nurturing environment—right at home. Every caregiver is thoroughly vetted, professionally trained, and matched with your unique needs—so you can rest easy knowing your family is in trusted hands.'
        },
        {
            icon: <BsFillPeaceFill className="text-accent-color" size={32} />,
            title: 'Peace of mind when you’re away',
            paragraph: 'Life gets busy—but your loved ones still deserve the care and presence they need. With United Care Links, you’ll have peace of mind knowing a trusted caregiver is by their side, offering support, comfort, and connection when you can’t be there yourself. We’re not just filling a gap-we’re extending your care, your love, and your peace of mind.'
        }
    ]

    const services = [
        {
            icon: <FaHandsHelping className="text-accent-color" size={32} />,
            title: "Personal Care",
            description: "We assist with essential daily activities like bathing, dressing, grooming, toileting, and hygiene—helping your loved ones maintain comfort, dignity, and independence."
        },
        {
            icon: <FaBrain className="text-accent-color" size={32} />,
            title: "Alzheimer's & Dementia Care",
            description: "Our trained caregivers provide a safe, structured environment with memory-focused engagement and compassionate support tailored to cognitive needs."
        },
        {
            icon: <FaHeart className="text-accent-color" size={32} />,
            title: "Hospice Support",
            description: "We offer gentle, end-of-life care focused on comfort, pain management, and emotional support for both patients and their families."
        },
        {
            icon: <FaClock className="text-accent-color" size={32} />,
            title: "24-Hour Care",
            description: "For individuals needing round-the-clock support—whether recovering from surgery, living with dementia, or managing limited mobility—our caregivers are there, day and night."
        },
        {
            icon: <FaWalking className="text-accent-color" size={32} />,
            title: "Mobility Assistance",
            description: "We help clients move safely around their home, offering support with walking, transfers, and mobility aids to promote confidence and freedom."
        },
        {
            icon: <FaUtensils className="text-accent-color" size={32} />,
            title: "Meal Preparation",
            description: "From planning to plating, we create nutritious meals based on your loved one's dietary needs, ensuring every bite supports their health."
        },
        {
            icon: <FaCar className="text-accent-color" size={32} />,
            title: "Transportation",
            description: "Need a lift? We help clients get to medical appointments, run errands, or stay socially active—safely and reliably."
        },
        {
            icon: <FaBroom className="text-accent-color" size={32} />,
            title: "Light Housekeeping",
            description: "A clean space is a safe space. Our caregivers assist with tasks like laundry, vacuuming, and light tidying to maintain a comfortable home."
        },
        {
            icon: <FaPills className="text-accent-color" size={32} />,
            title: "Medication Reminders",
            description: "We provide gentle, timely reminders to take medications as prescribed—supporting health, safety, and peace of mind."
        },
        {
            icon: <FaHeartbeat className="text-accent-color" size={32} />,
            title: "Chronic Illness Support",
            description: "Our caregivers help manage long-term conditions like diabetes, heart disease, and COPD, working closely with healthcare providers to monitor and support wellness."
        }
    ];





    return (
        <main>
            <header className="bg-accent-color py-10">
                <h2 className='text-xl md:text-2xl font-black text-center w-11/12 mx-auto text-white' style={{ fontFamily: "var(--font-montserrat)" }}>CAREGIVER LINKS – A CONCERN OF UNITED CARE LINKS</h2>
            </header>

            <section className="max-w-[1440px] mx-auto w-11/12 grid grid-cols-1 md:grid-cols-2 gap-8 place-content-center py-10">
                {learnData.map((item, idx) => (
                    <div
                        key={idx}
                        className="card-bg-color border-l-6 border-primary-color  p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                    >
                        <div className="mb-4">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-600 flex-grow">{item.paragraph}</p>
                    </div>
                ))}
            </section>

            {/* services section  */}
            <section className="pb-10">
                <header className="bg-accent-color py-10">
                    <h2 className='text-xl md:text-2xl font-black text-center w-11/12 mx-auto text-white' style={{ fontFamily: "var(--font-montserrat)" }}>CAREGIVER LINKS Compassionate In-Home Care Services</h2>
                </header>
                <div className="max-w-[1440px] mx-auto w-11/12">

                    <div className="flex items-center justify-center my-10">
                        <h2 className='text-2xl font-black text-center  border-b-2 inline border-primary-color' style={{ fontFamily: "var(--font-montserrat)" }}>Our Services</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="card-bg-color border-l-6 border-primary-color  p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                            >
                                <div className="mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600 flex-grow">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default LearnMorePage;