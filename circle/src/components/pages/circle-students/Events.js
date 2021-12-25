import React from 'react';
import '../../../App.css';
import './PageStyles.css';
import EventsCards from '../../EventsCards';
import eventsList from './eventsList';
import DropdownButton from "../../DropdownButton";

const tagsArr = [
    {
      name: "opt1",
      label: "Art",
      onClick: () => {}
    },
    {
      name: "opt2",
      label: "Music",
      onClick: () => {}
    },
    {
      name: "opt3",
      label: "Entrepreneurship",
      onClick: () => {}
    },
    {
      name: "opt4",
      label: "Literature",
      onClick: () => {filterLiterature()},
    },
    {
      name: "opt5",
      label: "Sports",
      onClick: () => {},
    },
    {
        name: "opt3",
        label: "History",
        onClick: () => {}
      },
      {
        name: "opt4",
        label: "Business",
        onClick: () => {},
      },
      {
        name: "opt5",
        label: "Hobbies",
        onClick: () => {},
      },
      {
        name: "opt3",
        label: "Design",
        onClick: () => {}
      },
      {
        name: "opt4",
        label: "Politics",
        onClick: () => {},
      },
      {
        name: "opt5",
        label: "Engineering",
        onClick: () => {},
      }
  ];

const jeepAutos = eventsList.filter( (value) => value.tags.includes("Jeep"))
  
export default function Events() {

/*    constructor(props) {
        super(props);
    
        this.state = {
          filteredAutos: [],
          autos: props.autos
        };
      }
    

    this.setState({
        filteredEvents: []
    })
*/
    return(
    <> 
    <div class="titlebar">
    <li>
        <h1>Events</h1>
    </li>
        <div class="search">
            <li><input type="text" placeholder="Search..."/></li>
            <DropdownButton buttonText="Filter" options={tagsArr} />
        </div>
    </div>

    <h2>This Week</h2>
    <hr />
    <EventsCards eventsList = {eventsList}/>

    <h2 id="secondTitle">Next Week</h2>
    <hr />
    <EventsCards eventsList = {eventsList}/>

    </>
    );
}
function filterLiterature(){

}