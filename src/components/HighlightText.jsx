import React from 'react'

const HighlightText = (props) => {
  return (
    <span className='font-bold text-[#29b7e6]'>
        {props.children}
    </span>
  )
}

export default HighlightText
