import React from 'react'
import './footer.css'
import Copy_Icon from './Copy_Icon'
import Insta_icon from './Insta_icon'
import Facebook_icon from './Facebook_icon'
import Git_icon from './Git_icon'

function Footer() {
  return (
    <div className='footer'>
        <Copy_Icon />
        <Insta_icon />
        <Facebook_icon />
        <Git_icon />
    </div>
  )
}

export default Footer