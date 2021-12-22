import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

const ClubCardItem = (props) => { //takes the properties as a parameter and sets the values according to them
    return (
        <><div class="flex-container">
            <div class="card">
				<img src={props.src} alt='Image' className='img'/>
                <h3 className='clubName'>{props.name}</h3>
                <p className='description'>{props.description}</p>
                <p className='tags'>Tags: {props.tags}</p>
			</div>
            </div>
        </>
    )
}

export default ClubCardItem;