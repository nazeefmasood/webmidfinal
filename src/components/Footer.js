import React from 'react'
import '../styles/Footer.css'
export default function ({ card }) {
    return (
        <div>
            <div className='footer-main'>
                {
                    card.map((ca) => (
                        <div className='footer-container'>
                            <div className='foot-sect-1'>
                                <h3 className='foot-sec-Heading'>{ca.footHead}</h3>
                                {
                                    ca.subItem.map((sub) => (
                                       <span className='foot-sectCategory'>{sub.category}</span>
                                    ))
                                }
                            </div>
                                
                        </div>
                    ))
                }
                </div>
                
                <p className='foot-copy'>
                    Term of use| privacy policy| Interested-Based-Ads| Feedback        &copy;{new Date().getFullYear()} ESPN Sport Media Ltd. All Rights Reserved
                </p>
        </div>
    )
}
