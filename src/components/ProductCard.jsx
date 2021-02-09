import React, { Fragment, useEffect, useState } from 'react';
import { GridCars } from './GridCars';
import { Grid } from '@material-ui/core';
import { useStyles } from '../styled/productCard';
import { NewCarComponent } from './NewCarComponent';
import hilux from '../../public/img/hilux.png';

export const ProductCard = ({ filterCar, sortCar }) => {
  const [cars, setCars] = useState([]);
  const classes = useStyles();

  const newCar = {
    id: 12,
    name: 'Hilux',
    segment: 'Pickups y Comerciales',
    year: 2020,
    price: 1507000,
    photo: hilux,
  };

  const getCars = async () => {
    const url = 'https://challenge.agenciaego.tech/models';
    const resp = await fetch(url);
    const data = await resp.json();
    data.push(newCar);
    setCars(data);
  };

  useEffect(() => {
    getCars();
  }, []);

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
        {orderCar.length > 0 ||
          cars.map((car) => (
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
