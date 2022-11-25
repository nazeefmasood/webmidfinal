import React from 'react'
import '../styles/newLeft.css'
import { BiChevronRight } from 'react-icons/bi'
export default function ({ card }) {
    return (
        <div>
            {
                card.map((ca) => (
                    <div className='left-card-container'>
                        <h3 className='left-card-title'>{ca.heading}</h3>
                        <hr className='left-card-hr' />
                        {
                            ca.subItems.map((sub) => (
                                <span className='left-card-text-main'><BiChevronRight className='left-card-icon' /><span className='left-card-text'>{sub.item}</span></span>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}
