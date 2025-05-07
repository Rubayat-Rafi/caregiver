"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";


import Image from 'next/image';

const Banner = () => {
    const banners = [
        { id: 1, banner: '/banner-image/image1.jpg' },
        { id: 2, banner: '/banner-image/image2.jpg' },
        { id: 3, banner: '/banner-image/image3.jpg' },
        { id: 4, banner: '/banner-image/image4.jpg' },
        { id: 5, banner: '/banner-image/image5.jpg' },
        { id: 6, banner: '/banner-image/image6.jpg' },
    ];

    return (
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            slidesPerView={1}
        >
            {banners.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="relative h-[400px] md:h-[500px] xl:h-[700px]  rounded-b-[60px] md:rounded-b-[100px] xl:rounded-b-[150px] overflow-hidden outline-white outline-2">
                        <Image
                            src={slide.banner}
                            alt={`Banner image for slide ${slide.id}`}
                            fill
                            className="object-cover rounded-b-[60px] md:rounded-b-[100px] xl:rounded-b-[150px]"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
                        <div className="absolute z-20 flex flex-col justify-center items-start w-full h-full text-white text-start">
                            <div className="max-w-[1440px] mx-auto w-11/12">
                                <div className="bg-[#fe8a18] max-w-lg rounded-xl p-5">
                                    <h1 className="text-2xl md:text-4xl font-bold font-Montserrat mb-2 md:mb-3 
                                 text-white rounded-md p-1 md:leading-10"  style={{ fontFamily: "var(--font-montserrat)" }} >
                                        <span>Compassionate Care, </span>
                                        <span>Right at Home.</span>
                                    </h1>
                                    <p className="text-sm md:text-lg">Caring for Your Loved Ones Like They&apos;re Our Own.</p>
                                    <div className="space-x-4">
                                        <button className="mt-4 md:mt-6 md:px-6 md:py-2 text-sm py-1 px-2 md:text-lg transition-all duration-300  rounded-md bg-white text-[#171717] hover:bg-gray-200 cursor-pointer">
                                            Request Care
                                        </button>
                                        <button className="mt-4 md:mt-6 md:px-6 md:py-2 text-sm py-1 px-2 md:text-lg transition-all duration-300  rounded-md bg-white text-[#171717] hover:bg-gray-200 cursor-pointer">
                                            Call Us Today
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
