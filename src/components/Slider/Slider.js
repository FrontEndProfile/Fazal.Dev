import React from 'react'
import './Slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import CopyRightFooter from '../CopyRightFooter/CopyRightFooter';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <>
     <section className='ClientSlides'>
        <div className='row- g-0'>
            <div className='col'><h3 className='ClientSlidesHead primaryFont'>Clients</h3></div>
        </div>
        <div className='row'>
            <div className='col'>
            <Swiper
            className='ClientSlidesMain'
            spaceBetween={30}
            centeredSlidesBounds={true}
            slidesPerView={5}
            speed={1000}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay= {{
                delay: 1000,
                loop: true
            }}
            modules={[Autoplay]}
            loop={true}

            >
            <SwiperSlide className='item'>
              <img className='img-fluid' src='https://via.placeholder.com/164x72/ffb6bf/d123e8?text=Dummy' alt='slide-img' />
            </SwiperSlide>
            <SwiperSlide className='item'>
              <img className='img-fluid' src='https://via.placeholder.com/164x72/ffb6bf/d123e8?text=Dummy' alt='slide-img' />
            </SwiperSlide>
            <SwiperSlide className='item'>
              <img className='img-fluid' src='https://via.placeholder.com/164x72/ffb6bf/d123e8?text=Dummy' alt='slide-img' />
            </SwiperSlide>
            <SwiperSlide className='item'>
              <img className='img-fluid' src='https://via.placeholder.com/164x72/ffb6bf/d123e8?text=Dummy' alt='slide-img' />
            </SwiperSlide>
            <SwiperSlide className='item'>
              <img className='img-fluid' src='https://via.placeholder.com/164x72/ffb6bf/d123e8?text=Dummy' alt='slide-img' />
            </SwiperSlide>
            <SwiperSlide className='item'>
              <img className='img-fluid' src='https://via.placeholder.com/164x72/ffb6bf/d123e8?text=Dummy' alt='slide-img' />
            </SwiperSlide>
            </Swiper>
            <CopyRightFooter />
            </div>
        </div>
     </section>

    </>
  )
}

export default Slider