import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import{Link} from 'react-router-dom'
import {FiMenu,FiX} from 'react-icons/fi'


 function Navbar() {
const [open,setOpen]=useState(false);
const handleClick=()=>setOpen(!open);
const closeMenu =()=>setOpen(false)




  return (
    <>
    
<nav className='navbar'>
<Link to='/' className='nav-logo'>Stopee</Link>
    <div  onClick={handleClick}className='nav-icons'>
      {open?<FiMenu/>:
      <FiX/>}
    </div>
    <ul className={open? 'nav-list active':'nav-list'}>
    <li onClick={closeMenu} className='nav-item'><Link to='/' className='nav-link'>Home</Link></li>
    
        <li onClick={closeMenu}className='nav-item'><Link to='/about' className='nav-link'>About</Link></li>
        
        <li onClick={closeMenu} className='nav-item'><Link to='/contact' className='nav-link'>Contact</Link></li>
        <li onClick={closeMenu}className='nav-item'><Link to='/shop' className='nav-link'>Shop</Link></li>
        
    </ul>
</nav>
</>
  )
}
export default Navbar
