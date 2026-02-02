import React, { useState } from 'react'
import { HomePageExplore } from '../../assets/data/homepage-explore.js';
import HighlightText from '../common/HighlightText';
import {TbBinaryTree2Filled} from "react-icons/tb";
import { IoIosMan } from "react-icons/io";

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"

]

const ExploreMore = () => {
    const [currrentTab,setCurrentTab] = useState("Free");
    const [courses,setCourses] = useState(HomePageExplore[0].courses);

    const setCards = (value)=>{
      setCurrentTab(value)
      const result = HomePageExplore.filter((course)=> course.tag === value)
      setCourses(result[0].courses);
    }


  return (
    <div className='flex flex-col items-center pt-15 gap-5 '>
        <div className='text-4xl font-semibold text-center '>
            Unlock the <HighlightText>Power of Code</HighlightText>
        </div>

        <div className='text-sm text-gray-400 font-semibold'>
            Learn to Build Anything You Can Imagine

        </div>

        <div className='flex rounded-full bg-[#161D29] px-6 py-2 text-gray-400 gap-6  ' >
            {
              tabsName.map((element,index) =>{
                return (
                  <div key={index} className={` text-sm px-4 py-1 rounded-full hover:bg-black ${currrentTab === element? "bg-black" : "bg-[#25282e]"} ` } onClick={()=>{
                    setCards(element);
                  }}>
                    {element}
                  </div>
                )
              })
            }
        </div>
        

        <div className='flex flex-col relative lg:flex-row gap-10 w-[80%] justify-center translate-y-15 '>
          {
            courses.map((element,index)=>{
              return (
                <div key={index} className='flex flex-col gap-5 p-5 bg-[#161D29] lg:w-[30%]'>
                  <h3 className='font-medium'>
                    {element.heading}
                  </h3>
                  <p className='text-sm text-gray-500'>
                    {element.description}
                  </p>

                  <div className='flex gap-20'>
                    <div className='gap-1 flex items-center' >
                      <IoIosMan/>
                      {element.level}
                    </div>
                    <div className='gap-1 flex items-center' >
                      <TbBinaryTree2Filled />
                      {element.lessionNumber} Lessons
                    </div>

                  </div>
                  
                </div>
              )
            })
          }
        </div>


      
    </div>
  )
}

export default ExploreMore
