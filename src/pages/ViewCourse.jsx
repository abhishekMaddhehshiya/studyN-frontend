import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import CourseReviewModal from "../components/ViewCourse/CourseReviewModal";
import VideoDetailsSidebar from "../components/ViewCourse/VideoDetailsSidebar";
import { getFullDetailsOfCourse } from "../services/oprations/courseDetailsAPI";
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice";

export default function ViewCourse() {
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [reviewModal, setReviewModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    (async () => {
      const courseData = await getFullDetailsOfCourse({ courseId }, token);

      dispatch(setCourseSectionData(courseData.courseDetails.courseContent));
      dispatch(setEntireCourseData(courseData.courseDetails));
      dispatch(setCompletedLectures(courseData.completedVideos));

      let lectures = 0;
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection.length;
      });
      dispatch(setTotalNoOfLectures(lectures));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="relative flex min-h-[calc(100vh-3.5rem)] bg-[#0F172A]">

        {/* Mobile Menu Button */}
        <button
          className="fixed left-3 top-[4.25rem] z-50 rounded-lg bg-[#1E293B] p-2 text-white shadow-lg md:hidden"
          onClick={() => setShowSidebar(true)}
        >
          <FiMenu size={20} />
        </button>

        {/* Sidebar */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-40 w-[260px] bg-[#161D29]
            transform transition-transform duration-300 ease-in-out
            ${showSidebar ? "translate-x-0" : "-translate-x-full"}
            md:static md:translate-x-0 md:shadow-none
          `}
        >
          <VideoDetailsSidebar
            setReviewModal={setReviewModal}
            closeSidebar={() => setShowSidebar(false)}
          />
        </aside>

        {/* Mobile Overlay */}
        {showSidebar && (
          <div
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setShowSidebar(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="mx-4 md:mx-6 lg:mx-10 py-4 md:py-6">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Review Modal */}
      {reviewModal && (
        <CourseReviewModal setReviewModal={setReviewModal} />
      )}
    </>
  );
}
