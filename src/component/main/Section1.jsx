import React from 'react'
import Secimg from './Secimg'
import Sec1text from './Sec1text'
import "./main.css"
function Section1() {
  return (
    <div className='sec-1'>
      <div className="text">
        <Sec1text />
      </div>
      <div className="img">
        <Secimg />
      </div>    
    </div>
  )
}

export default Section1