import React from 'react';
import '../../App.css';
import './PageStyles.css';


// profile
const Profile = () => { 
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

    <h2 className='MyClubs'>My Clubs</h2>
    <hr />

    <h2 className='EventsOfMyClubs'>Events of My Clubs</h2>
    <hr />
        
    <h2 className='LikedEvents'>Liked Events</h2>
    <hr />

    </>
    );
}

export default Profile;