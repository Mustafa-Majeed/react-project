import React from 'react'
import List_item_1 from './List_item_1'
import List_item_2 from './List_item_2'
import List_item_3 from './List_item_3'
import List_item_4 from './List_item_4'
import './navbar.css'
function Navbar_list() {
  return (
    <>
    <ul>
      <li><a href="#"> <List_item_1 /> </a></li>
      <li><a href="#"> <List_item_2 /> </a></li>
      <li><a href="#"> <List_item_3 /> </a></li>
      <li><a href="#"> <List_item_4 /> </a></li>
    </ul>
    
    </>
  )
}

export default Navbar_list