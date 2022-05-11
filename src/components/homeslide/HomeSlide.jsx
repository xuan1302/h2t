import React from 'react';
import { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import imgSlide1 from '../../assets/images/slideshow_1.png';
import imgSlide2 from '../../assets/images/slideshow_2.png';
import imgSlide3 from '../../assets/images/slideshow_3.png';


function HomeSlide(props) {
    const listImageSlide = [
        {
            id: 1,
            img: imgSlide1,
            title: 'Giao hàng tận nơi',
        },
        {
            id: 2,
            img: imgSlide2,
            title: 'Giao hàng tận nơi',
        },
        {
            id: 3,
            img: imgSlide3,
            title: 'Giao hàng tận nơi',
        },

    ]
    return (
        <div id="home-slider">
            {
                listImageSlide.length > 0 && (
                    <Swiper
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        className="mySwiper"
                    >
                        {
                            listImageSlide.map(data => (
                                <SwiperSlide key={data.id}>
                                    <img src={data.img} className="dt-width-100 ls-is-cached lazyloaded" alt={data.title}></img>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                )
            }

        </div >


    );
}

export default HomeSlide;