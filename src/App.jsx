import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import MyProfile from "./components/dashboard/MyProfile"
import Setting from "./components/dashboard/settings"
import EnrolledCourses from "./components/dashboard/EnrolledCourses"
import PrivateRoute from "./components/auth/PrivateRoute"
import Error from "./pages/Error"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ACCOUNT_TYPE } from "./utils/constants"
import AddCourse from "./components/dashboard/AddCourse/index"
import MyCourses from "./components/dashboard/MyCourses"
import EditCourse from "./components/dashboard/EditCourse"
import Instructor from "./components/dashboard/InstructorDashboard/Instructor"
import VerifyEmail from "./pages/VerifyEmail"
import Cart from "./components/dashboard/Cart"
import Catalog from "./pages/Catalog"
import CourseDetails from "./pages/CourseDetails"
import './App.css'
import ViewCourse from "./pages/ViewCourse"
import VideoDetails from "./components/ViewCourse/VideoDetails"


function App() {
  const dipatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.profile)

  return (
    <div className="w-screen min-h-screen bg-[#000814] ">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/verify-email" element={<VerifyEmail/>} />
        <Route path="/signin" element={<Login />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="category/:categoryId" element={<Catalog/>} />
        <Route path="courses/:courseId" element={<CourseDetails/>} />

        <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          } >

          <Route path="/dashboard/my-profile" element={<PrivateRoute><MyProfile/></PrivateRoute>} />
          <Route path="/dashboard/settings" element={<PrivateRoute><Setting/></PrivateRoute>} />
          {
              user && user?.accountType === ACCOUNT_TYPE.STUDENT ? (
                <>
                <Route path="/dashboard/enrolled-courses" element={<PrivateRoute><EnrolledCourses/></PrivateRoute>} />
                <Route path="/dashboard/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
                </>
              ) : null
            }
            {
              user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR ? (
              <>
              <Route path="/dashboard/instructor" element={<Instructor />} />
              <Route path="/dashboard/add-course" element={<AddCourse />} />
              <Route path="/dashboard/my-courses" element={<MyCourses />} />
              <Route path="/dashboard/edit-course/:courseId" element={<EditCourse />} />
              </>
              ): null
              
            }
          
        </Route>
              <Route path={"/view-course/:courseId"} element={
                <PrivateRoute>
                  <ViewCourse />
                </PrivateRoute>
              }>

              {
                user?.accountType === ACCOUNT_TYPE.STUDENT && (
                  <>
                  <Route 
                    path="/view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                    element={<VideoDetails />}
                  />
                  </>
                )
              }

      </Route>

        <Route path="*" element={<Error/>} />
      </Routes>
      
    </div>
    
  )
}

export default App
