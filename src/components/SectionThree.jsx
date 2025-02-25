import React, { useState } from 'react'
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const SectionThree = () => {

    const [swiper, setSwiper] = useState()
    const [activeSlide, setActiveSlide] = useState(1)

    const imgs = [
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 },
        { id: 4, img: img4 },
        { id: 5, img: img5 },
        { id: 6, img: img6 },
    ]

    const CustomNextArrow = () => (
        <button className='swiper-button-next'>
            <FaArrowRightLong />
        </button>
    )

    const CustomPrevArrow = () => (
        <button className='swiper-button-prev'>
            <FaArrowLeftLong />
        </button>
    )

    const handlePrevClick = () => {
        swiper?.slidePrev()
    }

    const handleNextClick = () => (
        swiper?.slideNext()
    )

    return (
        <section className='p-20 overflow-hidden'>
            <div className='flex items-center justify-around mb-10'>
                <h1 className='text-4xl font-bold'>Binhoff gallery</h1>
                <div className="custom-navigation">
                    <div onClick={handlePrevClick}>
                        <CustomPrevArrow />
                    </div>
                    <span>{activeSlide} / {imgs?.length}</span>
                    <div onClick={handleNextClick}>
                        <CustomNextArrow />
                    </div>
                </div>
            </div>
            <div className='swiper-container-wrapper'>
                <Swiper
                    className='h-[500px] px-20 ml-40'
                    // install Swiper modules
                    modules={[Navigation, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // navigation
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    onSwiper={setSwiper}
                    onSlideChange={(swiper) => {
                        setActiveSlide(swiper.activeIndex + 1)
                    }}
                >
                    {imgs.map((slide) => (
                        <div key={slide.id}>
                            <SwiperSlide>
                                <img className='h-full object-cover w-[90%] rounded-xl' src={slide.img} alt="" />
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default SectionThree