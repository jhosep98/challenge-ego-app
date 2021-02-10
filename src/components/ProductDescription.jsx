import React from 'react';
import { Container } from '@material-ui/core';
import { ProductDescriptionHeader } from './ProductDescriptionHeader';
import { ProductDescriptionCar } from './ProductDescriptionCar';
import { ProductDescriptionCarousel } from './ProductDescriptionCarousel';

export const ProductDescription = () => {
  return (
    <Container>
      <ProductDescriptionHeader />
      <ProductDescriptionCarousel />
      <ProductDescriptionCar />
    </Container>
  );
};
