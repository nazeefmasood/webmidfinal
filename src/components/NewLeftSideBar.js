import React, { useState } from 'react'
import NewLeftCard from '../components/NewLeftCard'

export default function RightSidebar() {
  const [rightCardDetails, setRightCardDetails] = useState([
    {
      id: '1',

      liveStat: 'Stumps',
      teamOne: 'INDIA',
      teamTwo: 'England',
      over: '',
      scores: '501',
      out: '7D',
      batChoice: 'Day two lion trail by 89 runs ',

    },
    {
      id: '2',
      liveStat: 'Innings Break',
      teamOne: 'INDIA',
      teamTwo: 'Pakistan',
      over: '18 over',
      scores: '112',
      out: '6',
      batChoice: 'INDIA Chose to bat first',

    },
  ])
  return (
    <div><NewLeftCard card={rightCardDetails} /></div>
  )
}
