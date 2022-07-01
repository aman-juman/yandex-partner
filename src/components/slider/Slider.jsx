import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";
import 'swiper/css';
import styles from "../tax/Tax.module.scss";
import img1 from "../tax/img/screen1.png";
import img2 from "../tax/img/screen2.png";
import img3 from "../tax/img/screen3.png";
import {Autoplay} from "swiper";


export const Slider = () =>{
    return(
        <Swiper
            modules={[Autoplay]}
            spaceBetween = {50}
            slidesPerView = {1}
            loop = {true}
            autoplay={true}
        >
            <SwiperSlide>
                <img className={styles.img} src={img1} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.img} src={img2} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.img} src={img3} alt=""/>
            </SwiperSlide>
        </Swiper>
    )
};


export default Slider;