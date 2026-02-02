import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams, useLocation } from "react-router-dom"

import { markLectureAsComplete } from "../../services/oprations/courseDetailsAPI"
import { updateCompletedLectures } from "../../slices/viewCourseSlice"
import IconBtn from "../common/IconBtn"

const VideoDetails = () => {
  const { courseId, sectionId, subSectionId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const videoRef = useRef(null)
  const dispatch = useDispatch()

  const { token } = useSelector((state) => state.auth)
  const { courseSectionData, courseEntireData, completedLectures } =
    useSelector((state) => state.viewCourse)

  const [videoData, setVideoData] = useState([])
  const [previewSource, setPreviewSource] = useState("")
  const [videoEnded, setVideoEnded] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!courseSectionData.length) return

    if (!courseId || !sectionId || !subSectionId) {
      navigate(`/dashboard/enrolled-courses`)
      return
    }

    const filteredData = courseSectionData.filter(
      (course) => course._id === sectionId
    )

    const filteredVideoData = filteredData?.[0]?.subSection.filter(
      (data) => data._id === subSectionId
    )

    setVideoData(filteredVideoData?.[0])
    setPreviewSource(courseEntireData?.thumbnail)
    setVideoEnded(false)
  }, [courseSectionData, courseEntireData, location.pathname])

  /* ---------- navigation helpers (UNCHANGED LOGIC) ---------- */

  const isFirstVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    )

    const currentSubSectionIndx =
      courseSectionData[currentSectionIndx].subSection.findIndex(
        (data) => data._id === subSectionId
      )

    return currentSectionIndx === 0 && currentSubSectionIndx === 0
  }

  const isLastVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    )

    const noOfSubsections =
      courseSectionData[currentSectionIndx].subSection.length

    const currentSubSectionIndx =
      courseSectionData[currentSectionIndx].subSection.findIndex(
        (data) => data._id === subSectionId
      )

    return (
      currentSectionIndx === courseSectionData.length - 1 &&
      currentSubSectionIndx === noOfSubsections - 1
    )
  }

  const goToNextVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    )

    const currentSubSectionIndx =
      courseSectionData[currentSectionIndx].subSection.findIndex(
        (data) => data._id === subSectionId
      )

    if (
      currentSubSectionIndx !==
      courseSectionData[currentSectionIndx].subSection.length - 1
    ) {
      const nextSubSectionId =
        courseSectionData[currentSectionIndx].subSection[
          currentSubSectionIndx + 1
        ]._id

      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`
      )
    } else {
      const nextSectionId =
        courseSectionData[currentSectionIndx + 1]._id

      const nextSubSectionId =
        courseSectionData[currentSectionIndx + 1].subSection[0]._id

      navigate(
        `/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubSectionId}`
      )
    }
  }

  const goToPrevVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    )

    const currentSubSectionIndx =
      courseSectionData[currentSectionIndx].subSection.findIndex(
        (data) => data._id === subSectionId
      )

    if (currentSubSectionIndx !== 0) {
      const prevSubSectionId =
        courseSectionData[currentSectionIndx].subSection[
          currentSubSectionIndx - 1
        ]._id

      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${prevSubSectionId}`
      )
    } else {
      const prevSectionId =
        courseSectionData[currentSectionIndx - 1]._id

      const prevSubSectionLength =
        courseSectionData[currentSectionIndx - 1].subSection.length

      const prevSubSectionId =
        courseSectionData[currentSectionIndx - 1].subSection[
          prevSubSectionLength - 1
        ]._id

      navigate(
        `/view-course/${courseId}/section/${prevSectionId}/sub-section/${prevSubSectionId}`
      )
    }
  }

  const handleLectureCompletion = async () => {
    setLoading(true)
    const res = await markLectureAsComplete(
      { courseId: courseId, subsectionId: subSectionId },
      token
    )
    if (res) dispatch(updateCompletedLectures(subSectionId))
    setLoading(false)
  }

  /* ---------- UI ---------- */

  return (
    <div className="flex flex-col gap-5 text-white">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
        {videoData ? (
          <video
            ref={videoRef}
            src={videoData?.videoUrl}
            controls
            controlsList="nodownload"
            className="h-full w-full"
            onEnded={() => setVideoEnded(true)}
          />
        ) : (
          <img
            src={previewSource}
            alt="Preview"
            className="h-full w-full object-cover"
          />
        )}

        {videoEnded && (
          <div className="absolute inset-0 z-20 grid place-content-center bg-black/70">
            {!completedLectures.includes(subSectionId) && (
              <button
                disabled={loading}
                onClick={handleLectureCompletion}
                className="text-xl px-6 mx-auto bg-amber-100 text-black rounded-sm p-3"
              >{loading ? "Loading..." : "Mark As Completed"}</button>
            )}

            <button
              onClick={() => {
                videoRef.current.currentTime = 0
                videoRef.current.play()
                setVideoEnded(false)
              }}
           
              className="text-xl px-6 mx-auto mt-2 bg-amber-100 rounded-sm text-black p-2"
            >Rewatch</button>

            <div className="mt-8 flex justify-center gap-4">
              {!isFirstVideo() && (
                <button onClick={goToPrevVideo} className="blackButton">
                  Prev
                </button>
              )}
              {!isLastVideo() && (
                <button onClick={goToNextVideo} className="blackButton">
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <h1 className="mt-4 text-3xl font-semibold">{videoData?.title}</h1>
      <p className="pb-6 text-richblack-200">
        {videoData?.description}
      </p>
    </div>
  )
}

export default VideoDetails
