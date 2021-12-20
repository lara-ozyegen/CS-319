import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Clubs from './components/pages/Clubs';
import Events from './components/pages/Events';
import Contact from './components/pages/Contact';
import Notifications from './components/pages/Notifications';
import Profile from './components/pages/Profile';


// every route must be inside <Routes></Routes>
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes> 
          <Route path='/' exact element={<Homepage />}/> 
          <Route path='/events' exact element={<Events/>}/>
          <Route path='/clubs' exact element={<Clubs/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
          <Route path='/notifications' exact element={<Notifications/>}/>
          <Route path='/profile' exact element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
