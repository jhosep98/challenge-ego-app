import React, { Fragment, useContext, useEffect, useState } from 'react';
import { GridCars } from './GridCars';
import { Grid } from '@material-ui/core';

import { useStyles } from '../styled/productCard';
import { NewCarComponent } from './NewCarComponent';

export const ProductCard = ({ cars }) => {
  const classes = useStyles();
  return (
    <div className={classes.containerCars}>
      <Grid container spacing={3}>
        {cars.map((car) => (
          <Fragment key={car.id}>
            {car.id === 12 ? (
              <NewCarComponent
                name={car.name}
                year={car.year}
                price={car.price}
                photo={car.photo}
              />
            ) : (
              <GridCars
                name={car.name}
                year={car.year}
                price={car.price}
                photo={car.photo}
              />
            )}
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};
