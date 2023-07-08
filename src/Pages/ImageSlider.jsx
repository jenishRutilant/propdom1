import React, { useEffect, useState } from 'react';
import "../Style/Home.css"
import Aos from 'aos';

const ImageSlider = ({ images, autoplayInterval = 3000 }) => {
    console.log(images);
    const [currentImage] = useState(0);
    // setCurrentImage
    // const handlePrev = () => {
    //     setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    // };

    // const handleNext = () => {
    //     setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    // };

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
                    {
                        images?.map((item, i) => (
                            <>
                            <div>
                                <img data-aos="fade-left" data-aos-delay="500" className='slider-img' src={item.img} alt={`${currentImage + 1}`} />
                                <div className="dummy-tag" data-aos="fade-left" data-aos-delay="500">
                                    <h3>{item.title}</h3>
                                    <span style={{ color: "white" }}>{item.desc}</span>
                                </div>
                                </div>
                            </>
                        ))
                    }
            </div>
            {/* <button onClick={handleNext} className='handlePrev'>&gt;</button> */}
        </div>
    );
};

export default ImageSlider;
