import React from 'react'
import CTAButton from '../common/CTAButton'
import { GoArrowRight } from 'react-icons/go'
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
    position, heading,subheading, ctabtn1, ctabtn2, codeblock, bgGradient, codeColor,backgroudGradient
}) => {
  return (
    
    <div className={`flex ${position} py-15 ml-[5%] max-w-[90%] justify-center gap-10 items-center lg:items-start`}>
        {/* section 1 */}
        <div className=' flex flex-col gap-4 w-[80%] lg:w-[45%] m-0'>
            {heading}
            <div className='text-[#bdc2d5] '>

            {subheading}
            </div>

            <div className='flex gap-5 mt-4'>
                <CTAButton to={ctabtn1.to}  active={ctabtn1.active} >
                    <div className='flex gap-2 items-center'>
                        {ctabtn1.text}
                        <GoArrowRight/>
                    </div>
                </CTAButton>
                    
                <CTAButton to={ctabtn2.to}  active={ctabtn2.active} >
                        {ctabtn2.text}

                </CTAButton>
            </div>





        </div>
        {/* section 2 */}
        <div className={` rounded-xl p-[2px]  shadow-[8px_8px_15px_rgba(255,255,255,0.2),-8px_-8px_15px_rgba(0,0,0,0.5)] w-[70%] lg:w-[500px]`}>
            
        <div className={`h-fit rounded-xl  to-[#000820] bg-[#000820] px-2 text-[13px] flex py-6 `}>
                <div className=' flex flex-col w-[10%]  text-[#6E727F] font-inter font-bold'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>
 
                <div className={`flex flex-col font-mono font-bold w-[90%] relative` }> 
                    <TypeAnimation
                        sequence={[codeblock, 2000, ""]}
                        repeat={Infinity}
                        curser={true}
                        style={
                            {
                                whiteSpace:"pre-line",
                                display:"block",
                                color: `${codeColor}`,

                            }
                        }
                        omitDeletionAnimation={true}
                    
                    />

                </div>
        </div>
        </div>
      
    </div>
  )
}

export default CodeBlocks
