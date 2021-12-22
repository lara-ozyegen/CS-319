import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useState } from "react";
import Event  from './EventComponent.js';
import Button from '@material-ui/core/Button';

const EventsGrid = (props) => {
  const [cart, setCart] = useState([]);
  const [spacing, setSpacing] = React.useState(4);
  
  const handleClick = (value) => {
    cart.push(value);
    setCart(cart);
    console.log(cart);
  }

  return (
    <div>
      <Grid spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="left" spacing={spacing}>
            {props.items.map((value) => (
              <Grid key={value.slug} item>
                <Event name={value.name} price={value.price}> <p>TL</p></Event>
                <Button itemSlug={value.slug} onChange={(e) => handleClick(e.target.value)} variant="contained" color="primary">Add</Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default EventsGrid;