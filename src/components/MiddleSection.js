import React, { useState } from 'react'
import MiddleCard from './MiddleCard'
import Card_1 from '../assets/card-1.jpg'
import Card_2 from '../assets/card-2.jpg';
import CardSmall_2 from '../assets/card-2-small.jpg';
import Card_3 from '../assets/card-3.jpg';

export default function MiddleSection() {
    const [middleCardDetails, setMiddleCardDetails] = useState([
        {
            id:'1',
            topText:'Latest News',
            largeImg:Card_1,
            heading:'SL need all the Super League points they can get',
            headDesc:'Bilateral ODIs might not excite too many but ',
            
        },
        {
            id:'2',
            topText:'Trending News',
            largeImg:Card_2,
            heading:'West Indians Pooran, Lewis, Pollard sizzle on ',
            headDesc:'There were reminders galore of the abundance of quality that comes from the Caribbean',
            smallImg:CardSmall_2,
            smallHead:'Tim David puts on power-hitting masterclass',
            smallDesc:'He smashed 42 off 18 balls to help Delhi',
            
        },
        {
            id:'3',
            topText:'Top News',
            largeImg:Card_3,
            heading:'Tim David puts on power-hitting masterclass on Abu Dhabi T10 debut',
            headDesc:'David had made his debut for Australia just a month',
        },
        {
            id:'4',
            topText:'Top News',
            largeImg:Card_3,
            heading:'Tim David puts on power-hitting masterclass on Abu Dhabi T10 debut',
            headDesc:'David had made his debut for Australia just a month',
        },
    ])
    
    function handleDel(id){
        const newU = middleCardDetails.filter((cs)=> cs.id !=id)
        setMiddleCardDetails(newU)
    }
 
    return (
        <div className='middle-sect-container'>
        <MiddleCard className="grid-1" card={middleCardDetails} del={handleDel}/>
        </div>
    )
}
