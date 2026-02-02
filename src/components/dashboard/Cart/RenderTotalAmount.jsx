import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import IconBtn from "../../common/IconBtn"
import {  buyCourseDummy } from "../../../services/oprations/studentFeaturesAPI"
import { resetCart } from "../../../slices/cartSlice"
import toast from "react-hot-toast"

export default function RenderTotalAmount() {
  const { total, cart } = useSelector((state) => state.cart)
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleBuyCourse = () => {
    if(total > 0){
      toast.error("You can not buy a paid course right now")
      return;
    }
    const courses = cart.map((course) => course._id)
    buyCourseDummy(token, courses, user, navigate, dispatch)
    dispatch(resetCart())
  }

  return (
    <div className="min-w-[280px] rounded-md border-[1px] border-gray-800 bg-gray-900 p-6">
      <p className="mb-1 text-sm font-medium text-gray-400">Total:</p>
      <p className="mb-6 text-3xl font-medium text-yellow-100">₹ {total}</p>
      <IconBtn
        text="Buy Now"
        onclick={handleBuyCourse}
        customClasses="w-full justify-center"
      />
    </div>
  )
}