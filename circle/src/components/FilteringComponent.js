import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

const FilteringComponent = () =>{
    return (
        <div>
            <div class="search">
                <li><input type="text" placeholder="Search..."/></li>
                <li><button class="filterButton"> Filter </button></li>
            </div>
        </div>
    );
}

export default FilteringComponent;
