import React, { useEffect, useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  Typography,
} from '@material-ui/core';
import { useStyles } from '../styled/productHeader';
import CarsFinder from '../api/CarsFinder';
import hilux from '../../public/img/hilux.png';
import { orderedCar } from '../helpers/orderCar';
import { filteredCar } from '../helpers/filterCar';

export const ProductHeader = () => {
  const classes = useStyles();

  // const [filterCar, setFilterCar] = useState('todos');
  const [orderCar, setOrderCar] = useState('nada');
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CarsFinder.get('/');
        response.data.push({
          id: 12,
          name: 'Hilux',
          photo: hilux,
          price: 1507000,
          segment: 'Pickups y Comerciales',
          year: 2020,
        });
        const { data } = response;
        setCars(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setCars]);

  // filter
  // const handleChangeFilter = (e) => {
  //   const value = e.target.value;
  //   setFilterCar(value);
  //   filteredCar(value, cars);
  // };

  // order
  const handleChangeOrder = (e) => {
    const value = e.target.value;
    setOrderCar(value);
    orderedCar(value, cars);
  };

  return (
    <Box component="section" m={1} className={classes.customSection}>
      <Typography variant="h4" className={classes.customTypography}>
        Descubrí todos los modelos
      </Typography>
      <div className={classes.containerFilters}>
        {/* <div className={classes.selectOrder}>
          <FormControl>
            <InputLabel htmlFor="filter-car">Filtrar por:</InputLabel>
            <NativeSelect
              id="filter-car"
              value={filterCar}
              onChange={handleChangeFilter}
              disableUnderline={true}
            >
              <option value="todos">Todos</option>
              <option value="autos">Autos</option>
              <option value="pickups">Pickups y Comerciales</option>
              <option value="suvs">SUVs y Crossovers</option>
            </NativeSelect>
          </FormControl>
        </div> */}

        <div>
          <FormControl>
            <InputLabel htmlFor="order-car">Ordenar por:</InputLabel>
            <NativeSelect
              id="order-car"
              value={orderCar}
              onChange={handleChangeOrder}
              disableUnderline={true}
            >
              <option value="nada">Nada</option>
              <option value="menor">De menor a mayor precio</option>
              <option value="mayor">De mayor a menor precio</option>
              <option value="nuevos">Más nuevos primero</option>
              <option value="viejos ">Más viejos primero</option>
            </NativeSelect>
          </FormControl>
        </div>
      </div>
      <Divider variant="middle" />
      <ProductCard cars={cars} />
    </Box>
  );
};
