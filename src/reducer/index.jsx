import {combineReducers} from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice.jsx'
import cartReducer from '../slices/cartSlice.jsx'
import profileReducer from '../slices/profileSlice.jsx'

import courseReducer from "../slices/courseSlice"
import viewCourseReducer from "../slices/viewCourseSlice"

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    profile: profileReducer,   
    course: courseReducer, 
    viewCourse: viewCourseReducer,
})

export default rootReducer  

