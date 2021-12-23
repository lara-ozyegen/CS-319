import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavbarClub.css';

function NavbarClub() {
    const [click, setClick] = useState(false);  //initial value is false
    const [button ,setButton] = useState(true);

    const handleClick = () => setClick(!click); //sets the opposite value of click on click
    const closeMobileMenu = () => setClick(false);

    const displayButton = () => { // if the navbar is not visible, change it to a little menu
        if(window.innerWidth <= 960)
            setButton(false);
        else 
            setButton(true);
    };

    window.addEventListener( 'resize', displayButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container-c">
                    <Link to="/homepage-club" className="navbar-logo-c">
                        Circle
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/homepage-club' className='nav-links' onClick={closeMobileMenu}>
                                Homepage
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/events-club' className='nav-links' onClick={closeMobileMenu}>
                                Event Management
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/members-club' className='nav-links' onClick={closeMobileMenu}>
                                Members
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact-club' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <ul className={click ? 'nav-menu active' : 'nav-menu-second'}>
                        <li className='nav-item'>
                            <Link to='/notifications-club' className='nav-links' onClick={closeMobileMenu}>
                                Notifications
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/profile-club' className='nav-links' onClick={closeMobileMenu}>
                                Club Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavbarClub;
