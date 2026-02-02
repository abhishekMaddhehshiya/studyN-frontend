import { useNavigate } from "react-router-dom";
import GetAvgRating from "../../utils/avgRating";
import { useEffect, useState } from "react";
import RatingStars from "../common/RatingStars";

const AllCourses_Card = ({ course }) => {

  const navigate = useNavigate();
  const [avgReviewCount, setAvgReviewCount] = useState(0);
  
      useEffect(()=> {
          const count = GetAvgRating(course.ratingsAndReviews);
          setAvgReviewCount(count);
      },[course])

  const {
    _id,
    courseName,
    courseDescription,
    price,
    tag,
    thumbnail,
  } = course;

  return (
    <div
      onClick={() => navigate(`/courses/${_id}`)}
      className="flex cursor-pointer gap-6 rounded-lg border border-gray-700 bg-gray-900 p-4 transition hover:bg-gray-800 "
    >
      {/* Thumbnail (LEFT) */}
      <img
        src={thumbnail}
        alt={courseName}
        className="h-[200px] w-[300px] flex-shrink-0 rounded-md object-cover"
      />

      {/* Details (RIGHT) */}
      <div className="flex flex-col justify-between">
        <div>
          {/* Course Name */}
          <h2 className="text-xl font-semibold text-white">
            {courseName}
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm text-gray-300 line-clamp-3">
            {courseDescription}
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {tag?.map((t, index) => (
              <span
                key={index}
                className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-medium text-black"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <h2 className="text-xl font-semibold text-white">
            {course.instructor.firstName} {course.instructor.lastName}
          </h2>

           <div className="flex items-center gap-2">
                        <span className="text-yellow-50">{avgReviewCount || 0}</span>
                        <RatingStars Review_Count={avgReviewCount} />
                        <span className="text-gray-400">
                          {course?.ratingAndReviews?.length} Ratings
                        </span>
                      </div>

        {/* Price */}
        <div className="mt-4 text-lg font-bold text-yellow-400">
          ₹ {price}
        </div>
      </div>
    </div>
  );
};

export default AllCourses_Card;
