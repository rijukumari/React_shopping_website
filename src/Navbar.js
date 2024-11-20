import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { IoBagOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";



export const Navbar = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <h3>Roby</h3>

        </div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/featured'>Featured</Link></li>
                <li><Link to='/women'>Women</Link></li>
                <li><Link to='/new'>New</Link></li>
                <li><Link to='/shop'>Shop</Link></li>


            </ul>
            <IoBagOutline className='icon'/>
      
        </nav>
    </div>
  )
}
