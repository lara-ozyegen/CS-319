import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

const CardItem = (props) => { //takes the properties as a parameter and sets the values according to them
    return (
        <><div class="flex-container">
            <div class="card">
                <Link className='cards-link' to={props.path}>
                    <img src={props.src} alt='Image' className='img'/>
                    <h3 className='eventName'>{props.name}</h3>
                    <h5 className='eventLocation'>Location: {props.location}</h5>
                    <h5 className='eventDate'>Date: {props.date}</h5>
                    <p className='description'>{props.description}</p>
                    <ul>Tags: 
                        {props.tags.map(option => 
                        <li> {option} </li>
                        )}
                    </ul>
                </Link>
			</div>
            </div>
        </>
    )
}

export default CardItem;
