import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#171717] text-white pt-12 pb-6">
            <div className="max-w-[1440px] mx-auto w-11/12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8 place-content-center">

                    {/* About Section */}
                    <div>
                        <div className="h-auto w-24 lg:w-28 mb-3">
                            <Image src="/cgl-logo.png" alt="logo" width={500} height={500}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <p className="mb-4 max-w-[450px]">
                            Compassionate care right at home. We provide personalized home care services with dignity and respect.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-secondary-color transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="hover:text-secondary-color  transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="hover:text-secondary-color transition-colors">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className="md:flex md:flex-col md:items-center md:justify-center">
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link href="/#home" className="hover:text-secondary-color transition-colors">Home</Link></li>
                                <li><Link href="/#services" className="hover:text-secondary-color transition-colors">Services</Link></li>
                                <li><Link href="/#about" className="hover:text-secondary-color transition-colors">About Us</Link></li>
                                <li><Link href="/#contact" className="hover:text-secondary-color transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <FaPhone className="mr-2 text-secondary-color" />
                                <span>(858)864-0192</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2 text-secondary-color" />
                                <span>info@caregiver.com</span>
                            </li>
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mr-2 mt-1 text-secondary-color" />
                                <span>123 Care Street<br />Health City, HC 12345</span>
                            </li>
                        </ul>
                    </div>

                    {/* map content */}
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d836.8412676694862!2d-117.23659535015496!3d32.96776888572732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc089325c17a21%3A0x8af7a3748f85de43!2s13715%20Rosecroft%20Way%2C%20San%20Diego%2C%20CA%2092130%2C%20USA!5e0!3m2!1sen!2sbd!4v1746634372408!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            className="border-0"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Business Hours */}
                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3">Business Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Emergency Services Only</p>
                </div>

                {/* Copyright and Bottom Bar */}
                <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p>© {new Date().getFullYear()} Caregiver. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-sm hover:text-secondary-color transition-colors">Privacy Policy</a>
                        <a href="#" className="text-sm hover:text-secondary-color transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;