import React from 'react';
import '../../../App.css';
import './PageStylesClub.css';



// add image float:right or inline near the information and add rating
export default function ClubProfile() {
    return(
    <> 
    <div class="titlebar">
        <li>
            <h1 className='Profile'>Young Entrepreneurs Society</h1>
        </li>
        <li><button class="editButton"> Edit Profile</button></li>
    </div>
        
    <h2 className='Contact'>Information</h2>
    <hr />

    <h2 className='MyClubs'>Contact</h2>
    <hr />

    <h2 className='EventsOfMyClubs'>Events of My Clubs</h2>
    <hr />
    </>
    );
}