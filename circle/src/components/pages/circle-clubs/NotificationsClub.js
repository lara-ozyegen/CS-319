import React from 'react';
import './PageStylesClub.css';


// homepage
export default function NotificationsClub() {
    return(
    <> 
    <div class="titlebar">
        <li>
            <h1 className='Notifications'>Notifications</h1>
        </li>
        <li><button class="clearButton"> Clear All</button></li>
    </div>
    
    </>
    );
}