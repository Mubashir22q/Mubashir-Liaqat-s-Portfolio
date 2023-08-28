import React from 'react'
import './testimonial.css';
import AVTR1 from '../../assests/avatar1.jpg';
import AVTR2 from '../../assests/avatar2.jpg';
import AVTR3 from '../../assests/avatar3.jpg';
import AVTR4 from '../../assests/avatar4.jpg';
import { Pagination} from 'swiper/modules';

import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
const data=[
  {
    avater:AVTR1,
    name:'Ernest Achiever',
    review:"I am glad because his work was very fantastic and he done the task within the time that we decided.Mubashir Liaqat have a grip on all the Above Technologies Eighter Front-end or Back-end Development."
  },
  {
    avater:AVTR2,
    name:'Shatta Wale',
    review:"I am glad because his work was very fantastic and he done the task within the time that we decided.Mubashir Liaqat have a grip on all the Above Technologies Eighter Front-end or Back-end Development."
  },
  {
    avater:AVTR3,
    name:'Kwame Despite',
    review:"I am glad because his work was very fantastic and he done the task within the time that we decided.Mubashir Liaqat have a grip on all the Above Technologies Eighter Front-end or Back-end Development."
  },
  {
    avater:AVTR4,
    name:'Nana Ama McBrown',
    review:"I am glad because his work was very fantastic and he done the task within the time that we decided.Mubashir Liaqat have a grip on all the Above Technologies Eighter Front-end or Back-end Development."
  },
];

const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container" 
               // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {
        data.map(({avater,name,review},index)=>{
          return(
            <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avater} alt={name}/>
          </div>
          <h5 className="client__name">{name}</h5>
            <small className="client__review">
              {review}              
            </small>
        </SwiperSlide>
          );
        })
      }
      </Swiper>
    </section>
  )
}

export default testimonial;