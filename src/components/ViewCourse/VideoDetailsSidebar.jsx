import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import IconBtn from "../common/IconBtn";

export default function VideoDetailsSidebar({ setReviewModal, closeSidebar }) {
  const [activeSection, setActiveSection] = useState("");
  const [activeVideo, setActiveVideo] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { sectionId, subSectionId } = useParams();

  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse);

  useEffect(() => {
    if (!courseSectionData.length) return;

    setActiveSection(sectionId);
    setActiveVideo(subSectionId);
  }, [courseSectionData, location.pathname, sectionId, subSectionId]);

  return (
    <aside className="flex h-full w-full flex-col bg-[#161D29] text-gray-200">

      {/* Header */}
      <div className="border-b border-gray-700 px-5 py-4 space-y-3">
        <div className="flex items-center justify-between">

          {/* Back */}
          <button
            onClick={() => navigate("/dashboard/enrolled-courses")}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-900 transition hover:scale-95 md:hidden"
          >
            <IoIosArrowBack size={20} />
          </button>

          {/* Review */}
          <IconBtn
            text="Add Review"
            customClasses="ml-auto"
            onclick={() => {
              setReviewModal(true);
              closeSidebar?.();
            }}
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-white">
            {courseEntireData?.courseName}
          </p>
          <p className="text-xs text-gray-400">
            {completedLectures?.length} / {totalNoOfLectures} Lectures
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="flex-1 overflow-y-auto pb-10">

        {courseSectionData.map((section) => (
          <div key={section._id} className="border-b border-gray-800">

            {/* Section Header */}
            <button
              onClick={() =>
                setActiveSection(
                  activeSection === section._id ? "" : section._id
                )
              }
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium hover:bg-[#1E293B]"
            >
              <span className="w-[85%] truncate">
                {section.sectionName}
              </span>

              <BsChevronDown
                className={`transition-transform duration-300 ${
                  activeSection === section._id ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Subsections */}
            {activeSection === section._id && (
              <div className="space-y-1 bg-[#0F172A] py-2">

                {section.subSection.map((topic) => {
                  const isActive = activeVideo === topic._id;
                  const isCompleted = completedLectures.includes(topic._id);

                  return (
                    <button
                      key={topic._id}
                      onClick={() => {
                        navigate(
                          `/view-course/${courseEntireData?._id}/section/${section._id}/sub-section/${topic._id}`
                        );
                        setActiveVideo(topic._id);
                        closeSidebar?.();
                      }}
                      className={`flex w-full items-center gap-3 px-6 py-2 text-left text-sm transition
                        ${
                          isActive
                            ? "bg-yellow-400 text-gray-900 font-semibold"
                            : "hover:bg-[#1E293B]"
                        }`}
                    >
                      <input
                        type="checkbox"
                        checked={isCompleted}
                        readOnly
                        className="accent-yellow-400"
                      />
                      <span className="truncate">{topic.title}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
