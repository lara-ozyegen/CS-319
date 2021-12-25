import React from 'react';
import '../../../App.css';
import './PageStylesClub.css';

function members(){
    return(
        <> 
            <div class="titlebar">
                <li>
                    <h1 className='members'>Members</h1>
                </li>
            </div>
    
            <h2 className='membersOfYES'>Members of the Club</h2>
            <hr />
        </>
        );
}
export default members;