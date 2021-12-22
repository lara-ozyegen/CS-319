import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"
//import Grid from '@material-ui/core/Grid';

// a class to represent all the cards
/*
<Grid container justifyContent="left" >
                            {props.items.map((value) => (
                            <Grid key={value.slug} item>
                                <Event name={value.name} price={value.price}> <p>TL</p></Event>
                                <Button itemSlug={value.slug} onChange={(e) => handleClick(e.target.value)} variant="contained" color="primary">Add</Button>
                            </Grid>
                            ))}
                        </Grid>
*/
const FilteringComponent = (props) =>{
    return (
        <div className='cards'>
        </div>
        
    );
}

export default FilteringComponent;
