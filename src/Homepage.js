import React from 'react';
import Header from './components/Header';
import MiddleSection from './components/MiddleSection';
import RightSidebar from './components/RightSidebar';
import FooterSection from './components/FooterSection';
import NewLeftSideBar from './components/NewLeftSideBar'
export default function Homepage() {
    return (
        <div>
            <div className='main'>
                <div className='header-grid'><Header/></div>
                <div className='middle-grid'>
                    <div className='left-sidebar-grid'><NewLeftSideBar/></div>
                    <div className='middle-sec-grid'><MiddleSection /></div>
                    <div className='rightSidebar-grid'><RightSidebar /></div>
                </div>
                <div className='footer-grid'><FooterSection/></div>
            </div>
        </div>
    )
}
