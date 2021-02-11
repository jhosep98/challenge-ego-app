import React, { useEffect, useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import {
  Box,
  Divider,
  FormControl,
  Hidden,
  NativeSelect,
  Typography,
} from '@material-ui/core';
import { useStyles } from '../styled/productHeader';
import { CustomLink, TypographyTabs } from '../styled/index';
import CarsFinder from '../api/CarsFinder';
import hilux from '../../public/img/hilux.png';

export const ProductHeader = () => {
  const classes = useStyles();

  const [filterCar, setFilterCar] = useState({
    type: '',
  });

  const [orderCar, setOrderCar] = useState({
    order: '',
  });

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

  const autos = useMemo(
    () => cars && cars.filter((c) => c.segment === 'Autos'),
    [cars]
  );
  console.log(autos);

  const pickups = useMemo(
    () => cars && cars.filter((c) => c.segment === 'Pickups y Comerciales'),
    [cars]
  );

  const suvs = useMemo(
    () => cars && cars.filter((c) => c.segment === 'SUVs y Crossovers'),
    [cars]
  );

  const handleFilterAutos = () => {
    setCars(autos);
  };

  const handleFilterPickups = () => {
    setCars(pickups);
  };

  const handleFilterSuvs = () => {
    setCars(suvs);
  };

  // filter
  const handleChangeFilter = (event) => {
    const type = event.target.name;
    setFilterCar({
      [type]: event.target.value,
    });
    setCars(cars.filter((car) => car.segment === event.target.value));
  };

  // order
  const handleChangeOrder = (event) => {
    const type = event.target.name;
    setOrderCar({
      [type]: event.target.value,
    });
    setCars(cars.sort((a, b) => a.price - b.price));
  };

  return (
    <Box component="section" m={1} className={classes.customSection}>
      <Typography variant="h4" className={classes.customTypography}>
        Descubrí todos los modelos
      </Typography>
      <div className={classes.containerFilters}>
        <Hidden smDown>
          <div className={classes.containerTabsFilter}>
            <TypographyTabs paragraph filter="true">
              Filtrar por
            </TypographyTabs>

            <TypographyTabs
              paragraph
              onClick={() => {
                setCars(cars);
              }}
            >
              <CustomLink color="inherit">Todos</CustomLink>
            </TypographyTabs>

            <TypographyTabs paragraph onClick={handleFilterAutos}>
              <CustomLink color="inherit">Autos</CustomLink>
            </TypographyTabs>

            <TypographyTabs paragraph onClick={handleFilterPickups}>
              <CustomLink color="inherit">Pickups y Comerciales</CustomLink>
            </TypographyTabs>

            <TypographyTabs
              paragraph
              nomargin="true"
              onClick={handleFilterSuvs}
            >
              <CustomLink color="inherit">SUVs Y Crossovers</CustomLink>
            </TypographyTabs>
          </div>
        </Hidden>
        <Hidden mdUp>
          <FormControl>
            <NativeSelect
              value={filterCar.type}
              name="filter"
              onChange={handleChangeFilter}
              inputProps={{ 'aria-label': 'filter' }}
              disableUnderline={true}
            >
              <option value="" disabled>
                Filtrar por
              </option>
              <option value="Todos">Todos</option>
              <option value="Autos">Autos</option>
              <option value="Pickups y Comerciales">
                Pickups y Comerciales
              </option>
              <option value="SUVs y Crossovers">SUVs y Crossovers</option>
            </NativeSelect>
          </FormControl>
        </Hidden>

        <FormControl>
          <NativeSelect
            value={orderCar.order}
            name="filter"
            onChange={handleChangeOrder}
            inputProps={{ 'aria-label': 'order' }}
            disableUnderline={true}
          >
            <option value="" disabled>
              Ordernar por
            </option>
            <option value="Nada">Nada</option>
            <option value="De menor a mayor precio">
              De menor a mayor precio
            </option>
            <option value="De mayor a menor precio">
              De mayor a menor precio
            </option>
            <option value="Más nuevos primero">Más nuevos primero</option>
            <option value="Más viejos primero">Más viejos primero</option>
          </NativeSelect>
        </FormControl>
      </div>
      <Divider variant="middle" />
      <ProductCard cars={cars} />
    </Box>
  );
};
