import React from 'react';
import styled from 'styled-components';
import carHilux from '../../public/img/img@3x.jpg';
import { Grid, Typography } from '@material-ui/core';

const CustomGridItem = styled(Grid)`
  padding: 1rem;
`;
const CustomGridContainer = styled(Grid)`
  margin-top: 4rem;
`;

const CustomTypographyTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: normal;
  color: #373737;
`;

const CustomTypographySubtitle = styled(Typography)`
  font-size: 35px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: -0.7px;
  color: #191919;
`;

const CustomTypographyParagraph = styled(Typography)`
  margin-top: 1.2rem;
`;

export const ProductDescriptionHeader = () => {
  return (
    <CustomGridContainer container spacing={1}>
      <CustomGridItem item xs={12} sm={6}>
        <img src={carHilux} alt="camioneta marca hilux" />
      </CustomGridItem>
      <CustomGridItem item xs={12} sm={6}>
        <CustomTypographyTitle variant="subtitle1">
          Hilux DX/SR
        </CustomTypographyTitle>
        <CustomTypographySubtitle variant="h4">
          Preparada para cualquier desafío
        </CustomTypographySubtitle>
        <CustomTypographyParagraph paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          ipsum dolore atque eius, at aperiam recusandae laborum culpa
          blanditiis, error repudiandae ex iste itaque doloremque minus neque
          doloribus optio hic.
        </CustomTypographyParagraph>
      </CustomGridItem>
    </CustomGridContainer>
  );
};
