import React from 'react';
import '../../../App.css';
import './PageStyles.css';
import ClubsCards from '../../ClubsCards';
import EventsCards from '../../EventsCards';

export default function Profile() {
    return(
    <> 
    <div class="titlebar">
        <li>
            <h1 className='Profile'>Profile</h1>
        </li>
        <li><button class="editButton"> Edit Profile</button></li>
    </div>
        
    <h2 className='Contact'>Contact</h2>
    <hr />
    <h3>Mail: lorem.ipsum@ug.bilkent.edu.tr</h3>
    <button class="changePassword">Change Password</button>

    <h2 className='MyClubs'>My Clubs</h2>
    <hr />
    <ClubsCards></ClubsCards>
    <h2 className='EventsOfMyClubs'>Events of My Clubs</h2>
    <hr />
    <EventsCards></EventsCards>
        
    <h2 className='LikedEvents'>Liked Events</h2>
    <hr />
    <EventsCards></EventsCards>

    </>
    );
}