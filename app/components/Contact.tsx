'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

type FormData = {
    name: string;
    email: string;
    phone: number;
    message: string;
}

const Contact = () => {
    const {register, handleSubmit} = useForm<FormData>()


    const handleFormData = (data:FormData) => {
        console.log(data)
    }


    return (
        <section  id="contact" className='bg-gray-50'>
            <div className="max-w-[1440px] mx-auto w-11/12 py-12 md:py-20">
                <div className="flex items-center justify-center mb-6 md:mb-10">
                    <h2 className='text-2xl font-black text-whie text-center  border-b-2 inline border-primary-color' style={{ fontFamily: "var(--font-montserrat)" }}>Ready to Get Started?</h2>
                </div>
                {/* content form */}
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    {/* Left Side - Contact Information */}
                    <div className=" p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">
                            Get in Touch
                        </h2>
                        <p className="mb-6">
                            Reach out for a no-obligation discovery call or visit. <br />
                            Call or submit the form.
                        </p>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-start">
                                <div className="bg-[#fffaea]  p-3 rounded-full mr-4">
                                    <FaPhone className="text-secondary-color text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-gray-500 text-sm font-medium">Phone</h3>
                                    <p className="text-lg">(858)864-0192</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start">
                                <div className="bg-[#fffaea]  p-3 rounded-full mr-4">
                                    <FaEnvelope className="text-secondary-color text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-gray-500 text-sm font-medium">Email</h3>
                                    <p className="text-lg">
                                        info@caregiver.com
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start">
                                <div className="bg-[#fffaea]  p-3 rounded-full mr-4">
                                    <FaMapMarkerAlt className="text-secondary-color text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-gray-500 text-sm font-medium">
                                        Our Address
                                    </h3>
                                    <p className="text-lg">
                                        13715 Rosecroft Way, San Diego, CA 92130, USA
                                    </p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start">
                                <div className="bg-[#fffaea]  p-3 rounded-full mr-4">
                                    <FaClock className="text-secondary-color text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-gray-500 text-sm font-medium">
                                        Hours of Operation
                                    </h3>
                                    <p className="text-lg">
                                        Monday - Friday: 8:00 AM - 5:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="p-8 rounded-lg border-2 border-primary-color">
                        <h2 className="text-2xl font-semibold text-[#171717] mb-6">
                            Send Us a Message
                        </h2>

                        <form onSubmit={handleSubmit(handleFormData)} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                    Name*
                                    </label>
                                    <input
                                        type="text"
                                        {...register('name', {required: true})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md  "
                                    />
                                </div>


                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        {...register('email', {required: true})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md "
                                    />
                                </div>
                            </div>


                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Phone (Optional)
                                </label>
                                <input
                                    type="tel"
                                    {...register('phone')}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md "
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Description*
                                </label>
                                <textarea
                                    id="message"
                                    {...register('message', {required: true})}
                                    rows={4}
  
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md "
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary tracking-wide transition-colors duration-300 ease-in-out  opacity-90 text-sm md:text-base py-2 rounded md:py-2 border-2 w-full font-medium"
                            >
                                Schedule a Free Consultation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;