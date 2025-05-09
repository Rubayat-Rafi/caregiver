'use client'
import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

    const testimonials = [
        {
            quote: "They cared for my mother like she was their own. I could finally rest easy.",
            author: "Sarah M.",
            rating: 5,
        },
        {
            quote: "The companionship care brought joy back into my dad's life. Highly recommend!",
            author: "James L.",
            rating: 4,
        },
        {
            quote: "Reliable transportation to appointments has been a game-changer for us.",
            author: "Elena K.",
            rating: 5,
        },
        {
            quote: "They cared for my mother like she was their own. I could finally rest easy.",
            author: "Sarah M.",
            rating: 5,
        },
        {
            quote: "The companionship care brought joy back into my dad's life. Highly recommend!",
            author: "James L.",
            rating: 4,
        },
        {
            quote: "Reliable transportation to appointments has been a game-changer for us.",
            author: "Elena K.",
            rating: 5,
        },
    ];

    // Carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <section className="py-12 lg:py-20 max-w-[1440px] mx-auto w-11/12">
            <div className="flex items-center justify-center mb-6 md:mb-10">
                <h2 className='text-2xl font-black text-[#171717] text-center  border-b-2 inline border-primary-color' style={{ fontFamily: "var(--font-montserrat)" }}>What Families Say</h2>
            </div>

            {/* Carousel Version */}
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-5 pb-5">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                            <div className="mb-4 text-secondary-color">
                                <FaQuoteLeft size={24} />
                            </div>
                            <p className="text-gray-600 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-800">— {testimonial.author}</span>
                                {testimonial.rating && (
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                size={16}
                                                className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Testimonials;