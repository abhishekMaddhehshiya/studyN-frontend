import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import { Autoplay, FreeMode, Pagination } from "swiper/modules"

import { apiConnector } from "../../services/apiConnector"
import { ratingsEndpoints } from "../../services/apiEndpoints"
import RatingStars from "./RatingStars"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const truncateWords = 15

  useEffect(() => {
    ;(async () => {
      const data = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      )
      if (data?.success) {
        setReviews(data?.data)
      }
    })()
  }, [])

  return (
    <div className="w-full bg-transparent py-12 text-white">
      <div className="mx-auto max-w-maxContent px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={reviews.length > 4}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="flex h-full flex-col gap-4 rounded-xl bg-gray-900/80 p-5 shadow-md transition hover:shadow-lg">
                
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={
                      review?.user?.image
                        ? review.user.image
                        : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                    }
                    alt="user"
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-gray-100">
                      {review?.user?.firstName} {review?.user?.lastName}
                    </p>
                    <p className="text-xs text-gray-400">
                      {review?.course?.courseName}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm leading-relaxed text-gray-200">
                  {review?.review.split(" ").length > truncateWords
                    ? `${review.review
                        .split(" ")
                        .slice(0, truncateWords)
                        .join(" ")}...`
                    : review.review}
                </p>

                {/* Rating */}
                <div className="mt-auto flex items-center gap-2">
                  <span className="text-sm font-semibold text-yellow-400">
                    {review.rating.toFixed(1)}
                  </span>
                  <RatingStars Review_Count={review.rating} Star_Size={18} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewSlider
