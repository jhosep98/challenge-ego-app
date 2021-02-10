import React from 'react';
import styled from 'styled-components';
import { Grid, Hidden, Typography } from '@material-ui/core';

import transmisionAut from '../../public/img/image@3x.jpg';
import transmisionMan from '../../public/img/image@3xm.jpg';
import suspension from '../../public/img/image@3xs.jpg';
import motores from '../../public/img/image@3xt.jpg';

const CustomTypographyParagraph = styled(Typography)`
  margin-top: 1rem;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: -0.1px;
  color: #373737;
`;
const CustomTypographyTitle = styled(Typography)`
  margin-top: 0.7rem;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: -0.4px;
  color: #373737;
`;
const GridItem = styled(Grid)`
  padding: 0.1rem;
`;
const GridContainer = styled(Grid)`
  margin-top: 0.7rem;
`;
export const ProductDescriptionCarousel = () => {
  return (
    <GridContainer container spacing={2}>
      <GridItem item xs={12} sm={6} md={3}>
        <div>
          <img src={motores} alt="motores" />
        </div>
        <CustomTypographyTitle variant="subtitle1">
          Nuevos motores Toyota
        </CustomTypographyTitle>
        <CustomTypographyParagraph paragraph>
          Dos alternativas diesel con turbo de geometría variable, 1GD (2.8 L) y
          2GD (2.4 L)
        </CustomTypographyParagraph>
      </GridItem>
      <Hidden xsDown>
        <GridItem item xs={12} sm={6} md={3}>
          <div>
            <img src={suspension} alt="suspension" />
          </div>
          <CustomTypographyTitle variant="subtitle1">
            Suspensión mejorada
          </CustomTypographyTitle>
          <CustomTypographyParagraph paragraph>
            Mayor confort de marcha, estabilidad y capacidad Off Road.
          </CustomTypographyParagraph>
        </GridItem>
        <GridItem item xs={12} sm={6} md={3}>
          <div>
            <img src={transmisionAut} alt="trasmisión automatica" />
          </div>
          <CustomTypographyTitle variant="subtitle1">
            Transmisión automática
          </CustomTypographyTitle>
          <CustomTypographyParagraph paragraph>
            Posibilidad de elección de caja automática de manejo.
          </CustomTypographyParagraph>
        </GridItem>
        <GridItem item xs={12} sm={6} md={3}>
          <div>
            <img src={transmisionMan} alt="trasmisión manual" />
          </div>
          <CustomTypographyTitle variant="subtitle1">
            Transmisión manual
          </CustomTypographyTitle>
          <CustomTypographyParagraph paragraph>
            Posibilidad de elección de caja automática de manejo.
          </CustomTypographyParagraph>
        </GridItem>
      </Hidden>
    </GridContainer>
  );
};
