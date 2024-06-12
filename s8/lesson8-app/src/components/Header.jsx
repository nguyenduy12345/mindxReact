import React from 'react'
import './header.css'

const Header = () => {
  return (
    <ul className='nav_bar'>
        <a href="" ><li className='logo_home'>Anonime</li></a>
        <a href="" ><li className='nav_item'>Home</li></a>
        <a href="" ><li className='nav_item'>List anime</li></a>
        <a href="" >
            <li className='nav_search'> 
                <input type="text" placeholder='Search anime or movie' />
            </li> 
        </a>
    </ul>
  )
}

export default Header
