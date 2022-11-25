import React from 'react'
import '../styles/newLeft.css'
export default function RightCard({ card }) {
    return (
        <div>
            {
                card.map((ca) => (
                    <div className='new-left-card-container'>
                        <h5 className='live-Status'>{ca.liveStat}</h5>
                        <div className='teams-main'>
                            <div className='team-1'>
                                <h5>{ca.teamOne}</h5>
                                <div className='team-1 match-details'>
                                    <h5>{ca.over}</h5><h5 className='text'> {ca.scores}/{ca.out}</h5>
                                </div>
                            </div>
                            <div className='team-1'>
                                <h5>{ca.teamTwo}</h5>
                                <div className='team-1 match-details'>
                                    <h5>({ca.over})</h5><h5>{ca.scores}/{ca.out}</h5>
                                </div>
                            </div>
                        </div>
                        <p className='chose-to-bat'>{ca.batChoice}</p>
                    </div>
                ))
            }
        </div>
    )
}
