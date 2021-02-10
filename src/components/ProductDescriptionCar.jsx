import React from 'react';
import styled from 'styled-components';
import bitman1 from '../../public/img/bitmap@3x.jpg';
import bitman2 from '../../public/img/bitmap@3xx.jpg';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../styled/productDescription';

const CustomGridItem = styled(Grid)`
  padding: 1rem;
`;
const CustomGridContainer = styled(Grid)`
  margin-top: 4rem;
`;
const CustomTypographyParagraph = styled(Typography)`
  margin-top: 1.2rem;
`;
const CustomTypographyTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: -0.4px;
  color: #373737;
`;

export const ProductDescriptionCar = () => {
  const classes = useStyles();
  return (
    <>
      <CustomGridContainer
        container
        spacing={1}
        className={classes.containerGrid}
      >
        <CustomGridItem item xs={12} sm={6}>
          <CustomTypographyTitle variant="subtitle1">
            Título de 20 px
          </CustomTypographyTitle>
          <CustomTypographyParagraph paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            ipsum dolore atque eius, at aperiam recusandae laborum culpa
            blanditiis, error repudiandae ex iste itaque doloremque minus neque
            doloribus optio hic.
          </CustomTypographyParagraph>
        </CustomGridItem>

        <CustomGridItem item xs={12} sm={6}>
          <img src={bitman2} alt="hilux" />
        </CustomGridItem>
      </CustomGridContainer>

      <CustomGridContainer container spacing={1}>
        <CustomGridItem item xs={12} sm={6}>
          <img src={bitman1} alt=" hilux" />
        </CustomGridItem>
        <CustomGridItem item xs={12} sm={6}>
          <CustomTypographyTitle variant="subtitle1">
            Título de 20 px
          </CustomTypographyTitle>
          <CustomTypographyParagraph paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            ipsum dolore atque eius, at aperiam recusandae laborum culpa
            blanditiis, error repudiandae ex iste itaque doloremque minus neque
            doloribus optio hic.
          </CustomTypographyParagraph>
        </CustomGridItem>
      </CustomGridContainer>
    </>
  );
};
