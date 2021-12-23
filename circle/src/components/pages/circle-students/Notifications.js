import React from 'react';
import '../../../App.css';
import './PageStyles.css';


// homepage
export default function Notifications() {
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