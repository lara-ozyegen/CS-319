import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = (props) => { //takes the properties as a parameter and sets the values according to them
    return (
        <>
            <li className='cards--item'>
                <Link className='cards--item--link' to={props.path}>
                    <figure className='cards--item--pic--wrap' data-category={props.label}>
                        <img src={props.src} alt='Image' className='cards--item--img'/>
                    </figure>
                    <div className='cards--item--info'>
                        <h3 className='eventName'>{props.name}</h3>
                        <h5 className='eventLocation'>{props.location}</h5>
                        <h5 className='eventDate'>{props.date}</h5>
                        <h5 className='description'>{props.description}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;
