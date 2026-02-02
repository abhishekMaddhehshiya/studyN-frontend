import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../slices/authSlice"
import { resetCart } from "../../slices/cartSlice"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apiEndpoints"

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints


export function sendOtp({ email,navigate }) {
  return async (dispatch)=>{
      const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const res = await apiConnector("POST", SENDOTP_API, {
        email
      } )

      console.log("sendotp api response", res)
      console.log(res.message)

      if(!res.success){
        throw new Error(res.message)

      }
      toast.success("OTP sent successfully")
      navigate("/verify-email")
      
    } catch (error) {
      console.log("Send otp error.............", error);
      toast.error(error.message);
      
    }
     dispatch(setLoading(false))
    toast.dismiss(toastId)
  }

}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp
      })

      console.log("SIGNUP API RESPONSE............", response)

      if (!response?.success) {
        throw new Error(response.message)
      }
      toast.success("Signup Successful")
      navigate("/login")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error(error.message)
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      console.log("LOGIN API RESPONSE............", response)

      if (!response?.success) {
        throw new Error(response.message)
      }


      toast.success("Login Successful")
      dispatch(setToken(response.token))
      const userImage = response?.user?.image
        ? response.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.user.firstName} ${response.user.lastName}`
      dispatch(setUser({ ...response.user, image: userImage }))

      localStorage.setItem("token", JSON.stringify(response.token))
      localStorage.setItem("user", JSON.stringify(response.user))
      navigate("/dashboard/my-profile")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error(error.message)
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}



