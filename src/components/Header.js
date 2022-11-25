import React from 'react';
import '../styles/header.css';
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { BsFillMoonFill, BsFillBellFill, BsGrid3X3GapFill, BsSearch } from 'react-icons/bs'
export default function Header() {


    return (
        <div className='header-container-main'>

            <div className='first-sec-header'>
                <div className='header-container'>
                    <div className='header-logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='header-mid-items'>
                        <div className='nav-container'>
                            <li className='h-MItem'>Live Scores</li>
                            <li className='h-MItem'>Series</li>
                            <li className='h-MItem'>Teams</li>
                            <li className='h-MItem'>News</li>
                            <Link className='link' to={"/qeaTrophy"}><li className='h-MItem'>QEA Trophy</li></Link>
                            <Link className='link'  to={"/iosApp"}><li className='h-MItem'>iOs App</li></Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className='last-sec-header'>
                <div className='header-last-sec-container'>
                    <div className='last-nav-container'>
                        <ul>
                            <li className='h-MItem lastItem'>Edition PK</li>
                            <li className='h-MItem lastItem'><BsFillMoonFill /></li>
                            <li className='h-MItem lastItem'><BsFillBellFill /></li>
                            <li className='h-MItem lastItem'><BsGrid3X3GapFill /></li>
                            <li className='h-MItem lastItem'><BsSearch /></li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

