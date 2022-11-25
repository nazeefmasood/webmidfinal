import React from 'react'
import '../styles/RightCard.css'
export default function RightCard({ card }) {
    return (
        <div>
            {
                card.map((ca) => (
                    <div className='right-card-container'>
                        <h3 className='right-card-t-text'>{ca.trophyName}</h3>
                        {
                            ca.subItem.map((sub) => (
                                <div>
                                    <hr className='right-hr' />
                                    <h5 className='live-Status'>{sub.liveStat}</h5>
                                    <div className='teams-main'>
                                        <div className='team-1'>
                                            <h3>{sub.teamOne}</h3>
                                            <div className='team-1 match-details'>
                                                <h3>({sub.over} ovr)</h3><h3>{sub.scores}/{sub.out}</h3>
                                            </div>
                                        </div>
                                        <div className='team-2'><h3>{sub.teamTwo}</h3></div>
                                    </div>
                                    <h5 className='chose-to-bat'>{sub.batChoice}</h5>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}
