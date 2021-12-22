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
    <div>
        {clubsList.map((value) => (
           
            <h1>Contact with {value.name} </h1>              
            ))}
        </div>

    <h2 className='ContactWithDevelopers'>Contact with Developers</h2>
    <hr />
    <a>Report a bug</a>
    <a>Make a suggestion</a>

    </>
    );
}