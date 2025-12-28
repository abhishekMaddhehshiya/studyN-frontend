import React from 'react'
import { GoArrowRight } from "react-icons/go"
import { Link } from 'react-router-dom'
import HighlightText from '../components/HighlightText'
import CTAButton from '../components/CTAButton'
import Banner from '../assets/banner.mp4'
import CodeBlocks from '../components/CodeBlocks'
import TimelineSection from '../components/TimelineSection'
import LearningLanguageSection from '../components/LearningLanguageSection'
import InstructorSection from '../components/InstructorSection'
import ReviewSection from '../components/ReviewSlider'
import ExploreMore from '../components/ExploreMore'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      {/* upper section  */}
      <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between'>
        
          <div className='group mt-26 pt-1 mx-auto rounded-full bg-[#161D29] font-bold text-[#999DAA] transition-all duration-200 hover:scale-97 shadow-amber-100 w-fit' >
            <Link to={"/signup"}>
            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-500 group-hover:bg-[#000814]'>
              <span>Become an Instructor</span>
              <GoArrowRight />
            </div>
            </Link>
          </div>

        <div className='text-center text-4xl font-semibold mt-5' >
          Empower Your Future with &nbsp;
          <HighlightText children={"Coding Skills"} />
        </div>

        <div className='w-[62%] text-center text-0.5xl text-[#bdc2d5] mt-5'>
          With our online coding courses, you can learn at your own pace from anywhere in the world, and get access to a wealth of resourses, including hands-on projects,quizzes and personalised feedback from instructors.
        </div>

        <div className='flex mt-5 gap-3'>
          <CTAButton active={true} to={"/about"} >
            Learn More
          </CTAButton>
          <CTAButton active={false} text={"Book a Demo"} to={"/signin"} >
            Book a Demo
          </CTAButton>
        </div>

        <div className='mx-3 my-10   flex justify-center'>

          <video className='max-w-[80%] rounded-[10px] shadow-[8px_8px_15px_rgba(255,255,255,0.2),-8px_-8px_15px_rgba(0,0,0,0.5)]' muted loop autoPlay > <source src={Banner} /></video>
        </div>

        <div >
          <CodeBlocks
            position={"flex-col lg:flex-row"}
            heading={
              <div className='text-4xl font-semibold'>
                Unlock your <HighlightText children={"Coding Potential"} /> with our online courses.
              </div>
            }

            subheading={

              "Our courses are designed and tought by inudstry experts who have years of experience in coding and are passionate about sharing their knowledge with you."

            }

            ctabtn1={
              {
                to: "/signin",
                text: "Try it Yourself",
                active: true

              }
            }
            ctabtn2={
              {
                to: "/about",
                text: "Learn More",
                active: false
              }
            }

            codeblock={
              `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n<title>StudyN</title>\n</head>\n<body>\n<div id="root"></div>\n<script type="module" src="/src/main.jsx"></script>\n</body>\n</html>`
            }
            
            codeColor={"#9E9E9E"}
            backgroudGradient={"gradient-to-br from-pink-400/40 via-pink-600/20 to-transparent"}
          />

          <CodeBlocks
            position={"flex-col  lg:flex-row-reverse"}
            heading={
              <div className='text-4xl font-semibold'>
                Start <HighlightText children={"Coding in seconds"} />
              </div>
            }

            subheading={

              "Go ahead, give it a try. Our hands-on learning environment is means you will be writing real code from your very first lesson"

            }

            ctabtn1={
              {
                to: "/signin",
                text: "Continue Lession",
                active: true

              }
            }
            ctabtn2={
              {
                to: "/about",
                text: "Learn More",
                active: false
              }
            }

            codeblock={
              `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n<title>StudyN</title>\n</head>\n<body>\n<div id="root"></div>\n<script type="module" src="/src/main.jsx"></script>\n</body>\n</html>`
            }

            backgroudGradient={"gradient-to-br from-cyan-400/40 via-cyan-600/20 to-transparent"}
            codeColor={"#866A04"}
          />
        </div>

        <ExploreMore/>

      </div>
      {/* upper section   */}



      {/* middile section  */}
      <div className='bg-[#F9F9F9] text-[#2C333F] '>
        <div className='homepage_bg h-[333px] '>

          <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
            <div className='h-[100px]'></div>
            <div className='flex flex-row gap-7 text-white'>
              <CTAButton to={"/signup"} active={true}>
                <div className='flex items-center gap-2'>

                  Explore Full Catalog
                  <GoArrowRight />
                </div>

              </CTAButton>

              <CTAButton active={false} to={"/signup"}>
                Learn More
              </CTAButton>



            </div>

          </div>

        </div>

        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center gap-7 justify-between'>

          <div className='flex flex-col lg:flex-row gap-5 items-center lg:items-start justify-center mt-[80px] mb-15'>

            <div className='text-4xl font-semibold w-[80%] lg:w-[40%]'>
              Get the skiils you need for a <HighlightText>job that is in demand</HighlightText>
            </div>

            <div className='flex flex-col w-[80%] lg:w-[40%] gap-10 items-start'>
              <div className='text-[16px] mb-3'>
                The modern StudyN is the detects its own terms. Today, to be a comptetive specialist requires more than professional skills.
              </div>
              <CTAButton to={"/signup"} active={true}>
                Learn More
              </CTAButton>
            </div>

          </div>

          <TimelineSection />
          <LearningLanguageSection />

        </div>


      </div>
      {/* middile section  */}



      {/* lower section  */}

      <div className='w-11/12 flex mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter:uppercase text-white '>

        <InstructorSection />

        <h2 className='text-center text-4xl font-semibold mt-10'>Review from others Learners</h2>
        <ReviewSection />



      </div>
            




      {/* lower section  */}
      {/* footer */}
      <Footer/>
      {/* footer */}

    </div >

  )
}

export default Home
