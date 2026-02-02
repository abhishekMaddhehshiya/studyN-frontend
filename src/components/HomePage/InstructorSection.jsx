import React from 'react'
import instructorImage from "../../assets/instructorImage.png"
import HighlightText from '../common/HighlightText'
import CTAButton from '../common/CTAButton'
import { GoArrowRight } from 'react-icons/go'

const InstructorSection = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-20 pb-20 mt-14 text-white justify-center items-center lg:items-start '>
                <div className=' w-[80%] lg:w-[45%]  '>
                    <img src={instructorImage} />
                </div>

                <div className='flex flex-col items-start w-[80%] lg:w-[45%] gap-5'>
                    <div className='text-4xl font-semibold'>
                        Become an <HighlightText>Instructor</HighlightText>
                    </div>
                    <div className='text-sm' >
                        Instructor from around the world teach millions of students on studyN. We provide the tools and skills to teach what you love.
                    </div>

                    <div className='w-fit pt-10'>
                        <CTAButton active={true} to={"/signin"}>
                            <div className='flex gap-2 items-center'>
                                <span>Start Teaching Today</span>
                                <GoArrowRight />
                            </div>
                        </CTAButton>

                    </div>



                </div>

            </div>

        </div>
    )
}

export default InstructorSection
