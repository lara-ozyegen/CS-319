import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

const CardItem = (props) => { //takes the properties as a parameter and sets the values according to them
    /*
    
            <li className='card'>
                <Link className='cards--item--link' to={props.path}>
                    <figure className='img' data-category={props.label}>
                        <img src={props.src} alt='Image' className='cards--item--img'/>
                    </figure>
                    <div className='info'>
                        <h3 className='eventName'>{props.name}</h3>
                        <h5 className='eventLocation'>{props.location}</h5>
                        <h5 className='eventDate'>{props.date}</h5>
                        <h5 className='description'>{props.description}</h5>
                    </div>
                </Link>
            </li>
    */

    return (
        <><div class="flex-container">
            <div class="card">
				<img src={props.src} alt='Image' className='img'/>
                <h3 className='eventName'>{props.name}</h3>
                <h5 className='eventLocation'>Location: {props.location}</h5>
                <h5 className='eventDate'>Date: {props.date}</h5>
                <p className='description'>{props.description}</p>
                <p class='tags'>Tags: {props.tags}</p>
			</div>
            </div>
        </>
    )
}

export default CardItem;
