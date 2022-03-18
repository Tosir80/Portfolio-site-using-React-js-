import React from 'react'
import './testimonials.css'
import AV1 from '../../assets/avatar1.jpg'
import AV2 from '../../assets/avatar2.jpg'
import AV3 from '../../assets/avatar3.jpg'
import AV4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const Testimonials = () => {
  // aslo can use data ----
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
      
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
    
      
      
      className='container testimonails_container'>
        <SwiperSlide className='testimonail'>
          <div className="client_avatar">
            <img src={AV1} alt="avatar" />
          </div>
          <h5 className='client_name'>Ernest Achiver</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate reiciendis illo inventore magnam omnis?
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonail'>
          <div className="client_avatar">
            <img src={AV2} alt="avatar" />
          </div>
          <h5 className='client_name'>Ernest Achiver</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate reiciendis illo inventore magnam omnis?
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonail'>
          <div className="client_avatar">
            <img src={AV3} alt="avatar" />
          </div>
          <h5 className='client_name'>Ernest Achiver</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate reiciendis illo inventore magnam omnis?
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonail'>
          <div className="client_avatar">
            <img src={AV4} alt="avatar" />
          </div>
          <h5 className='client_name'>Ernest Achiver</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate reiciendis illo inventore magnam omnis?
          </small>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonials