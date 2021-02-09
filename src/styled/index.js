import styled from 'styled-components';
import { Link, Typography, Button } from '@material-ui/core';

// Product Header Component

export const TypographyTabs = styled(Typography)`
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

export const CustomOption = styled.option`
  color: #191919;
  padding: 2rem;
  display: ${(props) => (props.none ? 'none' : 'block')};
`;

export const CustomLink = styled(Link)`
  &:hover {
    text-decoration: none;
    background-color: #ddd;
    padding: 0.4rem;
    border-radius: 10px;
  }
`;

// Product Card Component

export const CustomButton = styled(Button)`
  margin-top: 1rem;
  background-color: #191919;
  color: #fff;
  &:hover {
    background-color: #191919;
  }
`;

export const CustomTypography = styled(Typography)`
  &::after {
    content: '';
    width: 1px;
    height: 13px;
    display: inline-block;
    background: #191919;
    margin: 0 10px;
  }
`;
