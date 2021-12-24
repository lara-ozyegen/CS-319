import React from 'react';
import '../../App.css';
import './CirclePage.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './circle-students/Homepage';

// first screen
function CirclePage() {
    return(
        <>
            <Routes>
            <Route path = "/homepage" exact element={<Homepage />}/>
            </Routes>
            <div className='main-container'>
                <div className='main'>
                <img className='logo' src="/logo-designs/circle-main.png" alt="image" />
                <h1> Circle </h1>
                </div>
            </div>

            <div className='sub-container'>
                <div className='circle'>
                    <img className='logo' src="/logo-designs/circle.png" alt="image" />
                    <h2 className='circle'> <a href='/homepage'>Circle </a></h2>
                </div>
                <div className='circle-for-students'>
                    <img className='logo' src="/logo-designs/circle-clubs.png" alt="image" />
                    <h2 className='circle-clubs'> <a href='/homepage-club'>Circle for Clubs </a></h2>
                </div>
                <div className='circle-for-advisors'>
                    <img className='logo' src="/logo-designs/circle-advisors.png" alt="image" />
                    <h2 className='circle-advisors'> <a href='homepage-advisor'>Circle for Advisors </a></h2>
                </div>
            </div>
        </>
    );
}

export default CirclePage;