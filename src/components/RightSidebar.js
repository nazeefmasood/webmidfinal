import React, { useState } from 'react'
import RightCard from './RightCard'

export default function RightSidebar() {
  const [rightCardDetails, setRightCardDetails] = useState([
    {
      id: '1',
      trophyName: 'Abu Dhabi T10',
      subItem: [
        {
          liveStat: 'NOT COVERED LIVE',
          teamOne: 'INDIA',
          teamTwo: 'England',
          over: '8',
          scores: '100',
          out: '9',
          batChoice: 'England Chose to bat first',
        },
        {
          liveStat: 'NOT COVERED LIVE',
          teamOne: 'Australia',
          teamTwo: 'England',
          over: '4',
          scores: '49',
          out: '3',
          batChoice: 'Australia Chose to bat first',
        },
        {
          liveStat: 'NOT COVERED LIVE',
          teamOne: 'Pakistan',
          teamTwo: 'Australia',
          over: '6',
          scores: '80',
          out: '5',
          batChoice: 'Australia Chose to bat first',
        },
      ]
    },
    {
      id: '2',
      trophyName: 'T20 World cup',
      subItem: [
        {
          liveStat: 'NOT COVERED LIVE',
          teamOne: 'INDIA',
          teamTwo: 'Pakistan',
          over: '18',
          scores: '112',
          out: '6',
          batChoice: 'INDIA Chose to bat first',
        }
      ]
    },
  ])
  return (
    <div><RightCard card={rightCardDetails}/></div>
  )
}
