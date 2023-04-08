import React from 'react'
import './Slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import CopyRightFooter from '../CopyRightFooter/CopyRightFooter';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import company1  from '../../assets/images/company1.png'
import company2  from '../../assets/images/company2.png'
import company3  from '../../assets/images/company3.png'
import company4  from '../../assets/images/company4.png'
import company5  from '../../assets/images/company5.png'
import company6  from '../../assets/images/company6.png'

const Slider = () => {
  return (
    <>
     <section className='ClientSlides'>
        <div className='row- g-0'>
            <div className='col'><h3 className='ClientSlidesHead primaryFont'>Where Do</h3></div>
        </div>
        <div className='row'>
            <div className='col'>
            <Swiper
            className='ClientSlidesMain'
            spaceBetween={30}
            // centeredSlidesBounds={true}
            slidesPerView={5}
            speed={1000}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay= {{
                delay: 4000,
                loop: true
            }}
            modules={[Autoplay]}
            loop={false}
            >
            <SwiperSlide className='item current'>
              <img className='img-fluid' src={company1} alt='company1' />
            </SwiperSlide>
            <SwiperSlide className='item'>
              <img className='img-fluid' src={company2} alt='slide-img' />
            </SwiperSlide>
            <SwiperSlide className='item'>
              <img className='img-fluid' src={company3} alt='slide-img' />
            </SwiperSlide>
            <SwiperSlide className='item'>
              <img className='img-fluid' src={company5} alt='slide-img' />
            </SwiperSlide>
            <SwiperSlide className='item'>
              <img className='img-fluid' src={company4} alt='slide-img' />
            </SwiperSlide>
            <SwiperSlide className='item'>
              <img className='img-fluid' src={company6} alt='slide-img' />
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