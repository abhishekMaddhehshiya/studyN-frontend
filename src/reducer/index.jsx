import {combineReducers} from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice.jsx'
import cartReducer from '../slices/cartSlice.jsx'
import profileReducer from '../slices/profileSlice.jsx'


const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    profile: profileReducer,    
})

export default rootReducer  

