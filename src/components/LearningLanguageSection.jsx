import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from '../assets/Know_your_progress.png'
import compare_with_others from '../assets/Compare_with_others.png'
import plan_your_lessons from '../assets/Plan_your_lessons.png'
import CTAButton from './CTAButton'

const LearningLanguageSection = () => {
  return (
    <div>
      <div className=' flex flex-col gap-5 items-center pb-30'>
          <div className='text-4xl text-center font-semibold '>
            Your Swiss knife for <HighlightText>learning any language</HighlightText>
          </div>

          <div className='text-sm text-center mx-auto mt-3 w-[70%]  '>
            Using spin making learning multiple languages easy, with 20+ languages realistic voice-over, progress tracking, custome schedule and more.
          </div>

          <div className='flex flex-col lg:flex-row items-center mb-14'>

            <img src={know_your_progress} className=' object-contain -mb-36 lg:-mr-36 ' />
            <img src={compare_with_others} className=' object-contain'/>
            <img src={plan_your_lessons} className=' object-contain -mt-36 lg:-ml-36 '/>


          </div>

          <div className='w-fit'>
            <CTAButton active={true} to={"/signin"} >Learn More</CTAButton>
          </div>



    </div>
    </div>
  )
}

export default LearningLanguageSection
