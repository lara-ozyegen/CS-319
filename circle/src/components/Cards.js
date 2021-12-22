import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

// a class to represent all the cards
const Cards = () => {
    return (
        <div className='cards'>
            <div className='cards--container'>
                <div className='cards--wrapper'>
                    <ul className='cards--items'>
                        <CardItem src="images/kadın-akademisyen.jpg" text="Kadın Akademisyenler Buluşması" label="YES" path="/events"/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
