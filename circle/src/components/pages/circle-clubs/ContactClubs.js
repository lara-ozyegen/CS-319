import React from 'react';
import '../../../App.css';
import './PageStylesClub.css';

// homepage
export default function ContactClubs() {

    return(
    <> 
        <div class="titlebar">
            <li>
                <h1 className='Contact'>Contact</h1>
            </li>
        </div>

        <h2 className='ContactWithCLub'>Contact with Advisor</h2>
        <hr />
        <div className="contactClubs">
        </div>

        <h2 className='ContactWithSAC'>Contact with Student Activities Center</h2>
        <hr />
        <div className="contactClubs">
            <h3>SACC</h3>
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