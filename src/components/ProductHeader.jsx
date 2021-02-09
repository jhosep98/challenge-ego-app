import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Divider, Hidden, Link, Typography } from '@material-ui/core';
import { useStyles } from '../styled/productHeader';
import { ProductCard } from './ProductCard';

const TypographyTabs = styled(Typography)`
  text-transform: none;
  font-size: 14px;
  font-weight: ${(props) => (props.filter ? 700 : 'normal')};
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.08px;
  color: #373737;
  margin-right: ${(props) => (props.nomargin ? 'none' : '3rem')};
  cursor: pointer;
`;

const CustomOption = styled.option`
  color: #191919;
  padding: 2rem;
  display: ${(props) => (props.none ? 'none' : 'block')};
`;

const CustomLink = styled(Link)`
  &:hover {
    text-decoration: none;
    background-color: #ddd;
    padding: 0.4rem;
    border-radius: 10px;
  }
`;

export const ProductHeader = () => {
  const [filterCar, setFilterCar] = useState('filter');
  const [sortCar, setSortCar] = useState('order');
  const classes = useStyles();

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

            <TypographyTabs paragraph>
              <CustomLink color="inherit">Todos</CustomLink>
            </TypographyTabs>

            <TypographyTabs paragraph>
              <CustomLink color="inherit">Autos</CustomLink>
            </TypographyTabs>
            <TypographyTabs paragraph>
              <CustomLink color="inherit">Pickups y Comerciales</CustomLink>
            </TypographyTabs>
            <TypographyTabs paragraph nomargin="true">
              <CustomLink color="inherit">SUVs Y Crossovers</CustomLink>
            </TypographyTabs>
          </div>
        </Hidden>
        <Hidden mdUp>
          <form>
            <select
              onChange={(e) => setFilterCar(e.target.value)}
              value={filterCar}
              className={classes.selectControl}
            >
              <CustomOption value="filter" disabled none="true">
                Filtrar por
              </CustomOption>
              <CustomOption value="todos">Todos</CustomOption>
              <CustomOption value="Autos">Autos</CustomOption>
              <CustomOption value="Pickups y Comerciales">
                Pickups y Comerciales
              </CustomOption>
              <CustomOption value="SUVs y Crossovers">
                SUVs Y Crossovers
              </CustomOption>
            </select>
          </form>
        </Hidden>
        <div className={classes.selectOrder}>
          <form>
            <select
              className={classes.selectControl}
              onChange={(e) => setSortCar(e.target.value)}
              value={filterCar}
            >
              <CustomOption
                value="order"
                selected
                disabled
                classes={classes.customOptionNone}
                none="true"
              >
                Ordenar por
              </CustomOption>
              <CustomOption value="nada">Nada</CustomOption>
              <CustomOption value="menor">De menor a mayor precio</CustomOption>
              <CustomOption value="mayor">De mayor a menor precio</CustomOption>
              <CustomOption value="nuevo">Más nuevos primero</CustomOption>
              <CustomOption value="viejo">Más viejos primero</CustomOption>
            </select>
          </form>
        </div>
      </div>
      <Divider variant="middle" />
      <ProductCard filterCar={filterCar} sortCar={sortCar} />
    </Box>
  );
};
