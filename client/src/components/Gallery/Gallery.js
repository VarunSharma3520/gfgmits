
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import g1 from './g1 (1).jpg';
import g2 from './g1 (2).jpg';
import g3 from './g1 (3).JPG';
import g4 from './g1 (4).JPG';
import g5 from './g1 (5).JPG';
import g6 from './g1 (6).JPG';
import g7 from './g1 (7).JPG';
import g8 from './g1 (8).JPG';
import g9 from './g1 (9).JPG';
import g10 from './g1 (10).JPG';
import g11 from './g1 (11).JPG';

import gfg from './gfg_event.jpg'

export default function Gallery() {
  
  return (
    <>
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>

          <h1 className='text-3xl md:text-5xl font-extrabold dark:text-white text-green-500'>Featured Work</h1>
          <p className='mt-4 text-xl dark:text-gray-300 text-gray-800'>Check out our latest events</p>

        </div>

        <div className='flex items-center justify-center flex-col py-8 bg-gray-100 dark:bg-gray-800 border-2 border-slate-800 rounded-lg m-4'>
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-[90%] lg:max-w-[85%]"
          >

            

           

            

            <SwiperSlide>
              <img src={g4} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={g5} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={g6} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={g7} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={g8} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={g3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={g9} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={g10} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={g11} alt="slide_image" />
            </SwiperSlide>

            


            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>

      </section>
    </>
  )
}
