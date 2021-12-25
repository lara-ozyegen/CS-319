import React from 'react';
import './circle-students/PageStyles.css';

export default function SampleEvent() {
        return(
        <> 
        <div class="titlebar">
        <li>
            <h1>Ankara Start-up Zirvesi</h1>
        </li>
        <li><button class="editButton"> Add to Your Calendar</button></li>
        <li><button class="editButton"> Feedbacks </button></li>
        </div>
    
        <h2>Information</h2>
        <hr />
        <p>Türkiye'nin ilk startup zirvesi olan Ankara Start-up Zirvesi için başvurular açıldı! Zirvemiz için başvurunu yapabilirsin.</p>
    
        <h2 id="secondTitle">Details</h2>
        <hr />
    
        </>
        );
    }