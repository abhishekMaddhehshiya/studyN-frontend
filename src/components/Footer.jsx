import React from 'react'
import { FaGoogle, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import logo from "../assets/Logos.png"

const Footer = () => {
  return (
    <div>
            {/* footer  */}
      <div className='bg-[#2a2d38] text-[#716f6f] text-[14px]'>

        <div className='flex flex-col justify-center items-center lg:items-start lg:flex-row gap-40 pb-20'>

          <div className=' flex flex-row gap-29  justify-center pt-25 '>
            <ul >
              <li>
                <div className='flex gap-2 text-[20px] font-semibold items-center' >
                  <img src={logo} width={"20px"} className='rounded-full'/>
                  <h3>StudyN</h3>
                </div>
              </li>
              <li className='text-[17px] font-bold'>
                Company
              </li>
              <li>
                About
              </li>
              <li>Careers</li>
              <li>Affiliates</li>
              <li className='flex gap-2 py-2'>
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />

              </li>

            </ul>
            <ul>
              <li className='text-[17px] font-bold' >Resourses</li>
              <li>Article</li>
              <li>Blog</li>
              <li>Chart Sheet</li>
              <li>Code Challenges</li>
              <li>Docs</li>
              <li>Projects</li>
              <li>Videos</li>
              <li>Workspaces</li>
              <li className='text-[17px] font-bold pt-15' >Support</li>
              <li>Help center</li>
            </ul>
            <ul>
              <li className='text-[17px] font-bold ' >Plans</li>
              <li>Paid Membership</li>
              <li>For Students</li>
              <li>Business Solutions</li>
              <li className='text-[17px] font-bold pt-15'>Community</li>
              <li>Forums</li>
              <li>Chapters</li>
              <li>Events</li>
            </ul>
            
        </div>




        <div className=' flex fex-row gap-29 justify-center  pt-25'>
              <ul>
                <li className='text-[17px] font-bold '> Subjects</li>
                <li>AI</li>
                <li>Cloud Computing</li>
                <li>Code Foundations</li>
                <li>Computer Science</li>
                <li>Data Analytics</li>
                <li>Cyber Security</li>
                <li>Data Science</li>
                <li>Data Visualisation</li>
                <li>Developer Tools</li>
                <li>Devops</li>
                <li>Game Development</li>
                <li>IT</li>
                <li>Machine Learning</li>
                <li>Math</li>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Mobile Development</li></ul>
              <ul>
                <li className='text-[17px] font-bold '> Languages</li>
                <li>Bash</li>
                <li>C</li>
                <li>C++</li>
                <li>HTML and CSS</li>
                <li>C#</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Kotlin</li>
                <li>PHP</li>
                <li>Python</li>
                <li>R</li>
                <li>Ruby</li>
                <li>SQL</li>
                <li>Swift</li>
                <li>Go</li>
              </ul>
              <ul>
                <li className='text-[17px] font-bold '>Career Building</li>
                <li>Career Paths</li>
                <li>Career services</li>
                <li>Interview prep</li>
                <li>Professional Certification</li>
                <li>Full Catalog</li>
                <li>Beta Cotent</li>
              </ul>
          </div>
      </div>

      <div className='pl-30 pb-10 gap-6'>
      
            <span className='border-r-1 pr-2'>Privacy policy</span>
            <span className='border-r-1 pl-2 pr-2'>Cookie policy</span>
            <span className='pl-2'>Terms </span>
        
      </div>
      </div>
    
      {/* footer  */ }
    </div>
  )
}

export default Footer
