export const API_BASE_URL = "http://localhost:4000/api/v1";


export const endpoints = {
  SENDOTP_API:  "/auth/send-otp",
  SIGNUP_API:  "/auth/signup",
  LOGIN_API:  "/auth/signin",
  RESETPASSTOKEN_API:  "/auth/reset-password-token",
  RESETPASSWORD_API:  "/auth/reset-password",
}


export const courseEndpoints = {
  // Course Endpoints
  COURSE_DETAILS_API: "/course/get-course-details",
  COURSE_CATEGORIES_API: "/course/show-all-categories", 
  GET_ALL_COURSE_API: "/course/get-all-courses",
    CREATE_COURSE_API: "/course/create-course",
    DELETE_COURSE_API: "/course/delete-course",
    EDIT_COURSE_API: "/course/edit-course",
    CREATE_CATEGORY: "/course/create-category",
    GET_CATEGORY_DETAILS: "/course/get-category-details",
    GET_ALL_INSTRUCTOR_COURSES_API: "/course/all-instructor-courses",
    GET_FULL_COURSE_DETAILS_AUTHENTICATED:"/course/get-full-course-details-auth",
    // Section Endpoints
    CREATE_SECTION_API: "/course/add-section",
    UPDATE_SECTION_API: "/course/update-section",
    DELETE_SECTION_API: "/course/delete-section",   
    // SubSection Endpoints
    CREATE_SUBSECTION_API: "/course/add-subsection",
    UPDATE_SUBSECTION_API: "/course/update-subsection", 
    DELETE_SUBSECTION_API: "/course/delete-subsection",
    // Rating and Review Endpoints
    LECTURE_COMPLETION_API:"/course/updateCourseProgress",
    CREATE_RATING_API: "/course/create-rating",
    GET_ALL_RATINGANDREVIEWS: "/course/get-all-ratingandreviews",   
    GET_AVG_RATING: "/course/get-avg-rating",
}

export const profileEndpoints = {
  GET_USER_DETAILS_API:  "/profile/get-user-details",
  GET_USER_ENROLLED_COURSES_API:  "/profile/get-enrolled-courses",
  GET_INSTRUCTOR_DATA_API:  "/profile/instrustor-dashboard",
}

export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API:  "/profile/change-profile-picture",
  UPDATE_PROFILE_API:  "/profile/update-account",
  CHANGE_PASSWORD_API:  "/auth/change-password",
  DELETE_PROFILE_API:  "/profile/delete-account",
}

export const catalogData = {
  CATALOGPAGEDATA_API: "/course/get-category-details",
}

export const studentEndpoints = {

}

export const ratingsEndpoints = {
  REVIEWS_DETAILS_API:  "/course/get-all-ratingandreviews",
}