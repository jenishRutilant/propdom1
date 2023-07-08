import React, { useEffect, useState } from 'react';
import "../Style/Home.css"
import Aos from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';


const ImageSlider = ({ images, autoplayInterval = 3000 }) => {
    console.log(images);
    const [currentImage] = useState(0);
 
    useEffect(() => {
        Aos.init({});

        const autoplayTimer = setInterval(() => {
            // handleNext();
        }, autoplayInterval);

        return () => {
            clearInterval(autoplayTimer);
        };
    }, [autoplayInterval]);

    return (
        <div className="image-slider">
            {/* <button className='handlePrev' onClick={handlePrev}>&lt;</button> */}
            <div className="slider-part">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {images?.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className='allSlider'>
                                <img
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                    className='slider-img'
                                    src={item.img}
                                    alt={`${i + 1}`}
                                />
                                <div className="dummy-tag" data-aos="fade-left" data-aos-delay="500">
                                    <h3>{item.title}</h3>
                                    <span style={{ color: "white" }}>{item.desc}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* <button onClick={handleNext} className='handlePrev'>&gt;</button> */}
        </div>
    );
};

export default ImageSlider;
