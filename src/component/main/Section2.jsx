import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Section2HD from './Section2HD'
function Section2() {
  return (
    <div className='sec-2-con'>
      <div className="hd">
        <Section2HD />
      </div>
      <div className='sec-2'>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  )
}

export default Section2