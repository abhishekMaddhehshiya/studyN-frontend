import React from 'react'
import tlLogo1 from "../../assets/tlLogo1.png"
import tlLogo2 from "../../assets/tlLogo2.png"
import tlLogo3 from "../../assets/tlLogo3.png"
import tlLogo4 from "../../assets/tlLogo4.png"
import girlImage from "../../assets/girlImage.png"

const timeline = [
  {
    Logo: tlLogo1,
    Heading: "Leadership",
    Discription: "Fully commited to the success company",

  },
  {
    Logo: tlLogo2,
    Heading: "Responsibility",
    Discription: "Students will always e our first priority",

  },
  {
    Logo: tlLogo3,
    Heading: "Flexibility",
    Discription: "The ability to switch is an important skill",

  },
  {
    Logo: tlLogo4,
    Heading: "Solve the problem",
    Discription: "Code your way to a solution",

  }
]

const TimelineSection = () => {
  return (
    <div >
    <div className='flex flex-col lg:flex-row gap-15 items-center pb-20' >
      <div className='flex flex-col gap-5 w-[80%] lg:w-[45%]'>
        {
          timeline.map((element,index) =>{
            return (
              <div key={index} className='flex flex-row gap-2 items-center  '>
                <div className='w-8 h-8'>
                  <img src={element.Logo}  />

                </div>
                  <div className='flex flex-col gap-1 '>
                    <p className='font-semibold'>{element.Heading}</p>
                    <p className='text-sm'>{element.Discription}</p>

                  </div>

              </div>
            )
          })
        }

      </div>
      <div className='relative shadow-blue-200 '>
        <img src={girlImage} className='rounded-[2px]' />
        <div className='absolute flex flex-row bg-[#014A32] text-white uppercase py-7 rounded-[1px] gap-5 px-4 left-[10%] top-[85%] '>
          <div className='flex flex-row items-center gap-2 border-r-2 border-[#05A77B] px-3'>
            <div className='text-4xl '>10</div>
            <div  className='text-[12px] text-[#05A77B]'>Year Experience</div>

          </div >
          <div className='flex flex-row items-center gap-2'>
            <div className='text-4xl '>250</div>
            <div className='text-[12px] text-[#05A77B]'>types of Courses</div>

          </div>
          </div>

      </div>
      
    </div>
    </div>
  )
}

export default TimelineSection
