import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

const CustomFooter = styled.footer`
  height: 50px;
  margin: 70px 0 0;
  background-color: #000000;
  flex-shrink: 0;
  margin-top: auto;
`;

export const Footer = () => {
  return <CustomFooter />;
};
