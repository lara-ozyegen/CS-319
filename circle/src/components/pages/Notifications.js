import React from 'react';
import '../../App.css';
import './PageStyles.css';

const Notifications = () => {  
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
export default Notifications;