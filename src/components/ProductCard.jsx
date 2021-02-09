import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useStyles } from '../styled/productCard';
import { Grid, Typography } from '@material-ui/core';

export const ProductCard = ({ filterCar, sortCar }) => {
  const [cars, setCars] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const url = 'https://challenge.agenciaego.tech/models';
    const resp = await fetch(url);
    const data = await resp.json();
    setCars(data);
  };

  const newData = cars.filter((car) => car.segment === filterCar);

  const orderBy = (order, data) => {
    switch (order) {
      case 'menor':
        return data.sort((a, b) => a.price - b.price);
      case 'mayor':
        return data.sort((a, b) => b.price - a.price);
      case 'nuevo':
        return data.sort((a, b) => b.year - a.year);
      case 'viejo':
        return data.sort((a, b) => a.year - b.year);
      default:
        return data;
    }
  };

  const orderCar = orderBy(sortCar, newData);

  return (
    <div className={classes.containerCars}>
      <Grid container spacing={3}>
        {orderCar &&
          orderCar.map((car) => (
            <Cars
              key={car.id}
              name={car.name}
              year={car.year}
              price={car.price}
              photo={car.photo}
            />
          ))}
        {orderCar.length > 0 ||
          cars.map((car) => (
            <Cars
              key={car.id}
              name={car.name}
              year={car.year}
              price={car.price}
              photo={car.photo}
            />
          ))}
      </Grid>
    </div>
  );
};

const CustomTypography = styled(Typography)`
  &::after {
    content: '';
    width: 1px;
    height: 13px;
    display: inline-block;
    background: #191919;
    margin: 0 10px;
  }
`;

const Cars = ({ name, year, price, photo }) => {
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
