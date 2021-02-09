import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../styled/productCard';
import { CustomTypography } from '../styled';

export const GridCars = ({ name, year, price, photo }) => {
  const classes = useStyles();
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
      <Typography variant="h6" className={classes.titleCar}>
        {name}
      </Typography>
      <div className={classes.paragraphDivider}>
        <CustomTypography paragraph>{year}</CustomTypography>
        <Typography paragraph>{formatter.format(price)}</Typography>
      </div>
      <div>
        <img
          src={`https://challenge.agenciaego.tech${photo}`}
          alt={name}
          className={classes.imgCar}
        />
      </div>
    </Grid>
  );
};
