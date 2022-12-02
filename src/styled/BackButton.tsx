import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCustomBackButton = styled.button`
  margin: 80px auto;
  float: right;
  margin-right: 25rem;
  width: 80px;
  height: 35px;
  background-color: white;
  font-size: 13px;
  border: 1px solid black;

  cursor: pointer;
`;

export const CustomBackButton = (props: {
  children: React.ReactNode;
  url: string;
}) => (
  <Link to={props.url}>
    <StyledCustomBackButton>{props.children}</StyledCustomBackButton>
  </Link>
);
