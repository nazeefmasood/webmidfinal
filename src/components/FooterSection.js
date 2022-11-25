import React, { useState } from 'react'
import Footer from './Footer'

export default function FooterSection() {
    const [footerDetail, setFooterDetail] = useState([
        {
            footHead: 'Key Series',
            subItem: [
                {
                    category: 'QEA Trophy'
                },
                {
                    category: 'WBBL 2022'
                },
                {
                    category: 'Marsh Cup'
                },
            ]
        },
        {
            footHead: 'Quick Links',
            subItem: [
                {
                    category: 'T20 Timeout'
                },
                {
                    category: 'T20 Time Out'
                },
                {
                    category: 'Fantasy Pick'
                },
                {
                    category: 'ICC Rankings'
                }
            ]
        },
        {
            footHead: 'ESPN Sites',
            subItem: [
                {
                    category: 'The Cricket Monthly'
                },
                {
                    category: 'ESPN '
                }
            ]
        },
        {
            footHead: 'Follow ESPNcricinfo',
            subItem: [
                {
                    category: 'Instagram'
                },
                {
                    category: 'Twitter'
                },
                {
                    category: 'Facebook'
                },
                {
                    category: 'YouTube'
                }
            ]
        },
        {
            footHead: 'ESPNcricinfo Apps',
            subItem: [
                {
                    category: 'Android Apps'
                },
                {
                    category: 'IOS Apps'
                }
            ]
        }
    ])
    return (
        <div><Footer card={footerDetail} /></div>
    )
}
