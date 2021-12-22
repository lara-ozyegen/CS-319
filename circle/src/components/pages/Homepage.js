import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import './PageStyles.css';


// homepage
function Homepage() {
    return(
    <>

    <div class="titlebar">
        <h1>Welcome to Circle.</h1>
    </div>
    
    <h2 className='Recommended'>Recommended Events for You</h2>
    <hr />
    <Cards/>

    <h2 id='secondTitle'>My Clubs</h2>
    <hr />
            
    </>
    );
}

export default Homepage;