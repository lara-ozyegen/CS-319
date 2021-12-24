import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CirclePage from './components/pages/CirclePage';

import Navbar from './components/Navbar';

import Homepage from './components/pages/circle-students/Homepage';
import Clubs from './components/pages/circle-students/Clubs';
import Events from './components/pages/circle-students/Events';
import Contact from './components/pages/circle-students/Contact';
import Notifications from './components/pages/circle-students/Notifications';
import Profile from './components/pages/circle-students/Profile';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignUp, withAuthenticator } from '@aws-amplify/ui-react';

import NavbarClub from'./components/NavbarClub';
import HomepageClubs from './components/pages/circle-clubs/HomepageClubs.js';
import EventManagement from './components/pages/circle-clubs/EventManagement';
import ClubProfile from './components/pages/circle-clubs/ClubProfile';
import ContactClubs from './components/pages/circle-clubs/ContactClubs';
import NotificationsClub from './components/pages/circle-clubs/NotificationsClub';

import { Outlet } from 'react-router-dom';

Amplify.configure(awsconfig);

const NavbarLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const NavbarClubLayout = () => (
  <>
    <NavbarClub />
    <Outlet />
  </>
);

// every route must be inside <Routes></Routes>
function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<CirclePage />} />
        <Route path="*" element={<NavbarLayout />}>
          <Route path="homepage" element={<Homepage />} />
          <Route path="events" element={<Events />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NavbarClubLayout />}>
          <Route path="homepage-club" element={<HomepageClubs />} />
          <Route path="events-club" element={<EventManagement />} />
          <Route path="contact-clubs" element={<ContactClubs />} />
          <Route path="notifications-club" element={<NotificationsClub />} />
          <Route path="profile-club" element={<ClubProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default withAuthenticator(App);
