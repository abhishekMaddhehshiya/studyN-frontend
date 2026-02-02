import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

// core styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"

// modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules"


import Course_Card from './Course_Card'

const CourseSlider = ({Courses}) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={false}
          freeMode={true}
          grabCursor={true}
          allowTouchMove={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-gray-50">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider
