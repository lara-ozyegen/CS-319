import React from 'react';
import '../../App.css';
import './PageStyles.css';
import clubsList from './clubsList.js'

// homepage
export default function Contact() {

    return(
    <> 
        <div class="titlebar">
            <li>
                <h1 className='Contact'>Contact</h1>
            </li>
        </div>

        <h2 className='ContactWithCLub'>Contact with Your Clubs</h2>
        <hr />
        <div className="contactClubs">
            {clubsList.map((value) => (
            
                <h3>Contact with {value.name} </h3>              
                ))}
        </div>

        <h2 className='ContactWithDevelopers'>Contact with Developers</h2>
        <hr />
        <div className="contactClubs">
            <h3>Report a bug</h3>
            <h3>Make a suggestion</h3>
        </div>
    </>
    );
}