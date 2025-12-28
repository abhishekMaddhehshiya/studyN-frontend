import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({to,children,active}) => {
  return (
    <Link  to={to}>
        <div className={`text-center text-[14px] px-6 py-3 rounded-md font-semibold transition-all duration-200 hover:scale-97 ${active? "bg-yellow-300 hover:bg-yellow-400 text-black" : "bg-[#161D29] hover:bg-[#000814]"}`}> 

        {children}
        </div>

    </Link>
  )
}

export default CTAButton
