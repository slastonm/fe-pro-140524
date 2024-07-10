import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './about.css';
import { Pagination } from 'swiper/modules';


function AboutPage(props) {
    return (
        <div>
            <h1>
                User info
            </h1>
            <div>
                <Link to='user'>
                    User page
                </Link>                
            </div>

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam aperiam ipsa non quod dolorem laudantium placeat quibusdam et voluptatem blanditiis, hic expedita, accusantium rem illum temporibus reiciendis recusandae alias consequuntur.
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default AboutPage;