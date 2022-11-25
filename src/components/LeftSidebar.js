import React, { useState } from 'react'
import LeftCard from './LeftCard';

export default function LeftSidebar() {
  const [leftCardDetails, setLeftCard] = useState([
    {
      id: '1',
      heading: 'Quick Links',
      subItems: [
        {
          item: 'T20 timeout'
        },
        {
          item: 'T20Timeout'
        },
        {
          item: 'Fantasy Pick'
        },
        {
          item: 'ICC Ranking'
        }
      ]
    },
    {
      id: '2',
      heading: 'ESPN Cric Info Apps',
      subItems: [
        {
          item: 'Android Apps'
        },
        {
          item: 'IOS App'
        }
      ]
    },
    {
      id: '3',
      heading: 'Follow ESPN Cric Info',
      subItems: [
        {
          item: 'Instagram'
        },
        {
          item: 'Twitter'
        },
        {
          item: 'Facebook'
        },
        {
          item: 'Youtube'
        }
      ]
    },
    {
      id: '4',
      heading: 'ESPN Sites',
      subItems: [
        {
          item: 'The Cricket Monthly'
        },
        {
          item: 'ESPN'
        }
      ]
    }
  ]);
  return (
    <div className='sidebar-container'>
      <LeftCard card={leftCardDetails} />
    </div>
  )
}
