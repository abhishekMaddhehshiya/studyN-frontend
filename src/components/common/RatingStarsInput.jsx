import { useState } from "react"
import { FaStar } from "react-icons/fa"

const RatingStarsInput = ({
  Review_Count = 5,
  onChange,
  Star_Size = 24,
  activeColor = "#ffd700",
}) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (value) => {
    setRating(value)
    onChange?.(value) // safely call if provided
  }

  return (
    <div className="flex items-center gap-1">
      {[...Array(Review_Count)].map((_, index) => {
        const value = index + 1

        return (
          <FaStar
            key={index}
            size={Star_Size}
            cursor="pointer"
            color={value <= (hover || rating) ? activeColor : "#e4e5e9"}
            onClick={() => handleClick(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
          />
        )
      })}
    </div>
  )
}

export default RatingStarsInput
