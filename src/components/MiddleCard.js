import React from 'react'
import '../styles/MiddleCard.css'

export default function MiddleCard({ card, del }) {
    return (
        <div>
            {
                card.map((ca) => (
                    <div className='middle-card-container' key={ca.id}>
                        <h4 className='m-top-text'>{ca.topText}</h4>
                        <div className='m-Sec-1'>
                            <div className='img-lrg-container'> <img src={ca.largeImg} /></div>
                            <div className='card-sec-text-main'>
                                <h1>{ca.heading}</h1>
                                <p>{ca.headDesc}</p>
                                <button className='btnDel'onClick={()=>del(ca.id)}>Delete</button>
                            </div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}
