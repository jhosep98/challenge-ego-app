import styled from 'styled-components';
import { Link, Typography, Button } from '@material-ui/core';

// Product Header Component

export const TypographyTabs = styled(Typography)`
  color: #373737;
  cursor: pointer;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: ${(props) => (props.filter ? 700 : 'normal')};
  letter-spacing: 0.08px;
  line-height: 1;
  margin-right: ${(props) => (props.nomargin ? 'none' : '3rem')};
  text-transform: none;
`;

export const CustomOption = styled.option`
  color: #191919;
  display: ${(props) => (props.none ? 'none' : 'block')};
  padding: 2rem;
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
    background: #191919;
    content: '';
    display: inline-block;
    height: 13px;
    margin: 0 10px;
    width: 1px;
  }
`;
