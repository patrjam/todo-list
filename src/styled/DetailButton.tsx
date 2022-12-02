import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

export const StyledCustomDetailButton = styled.button`
  width: 70px;
  height: 30px;
  color: white;
  background-color: black;
  font-size: 13px;
  border: none;
  cursor: pointer;
`;

export const CustomDetailButton = (props: {
  children: React.ReactNode;
  url: string;
  onClick?: React.MouseEventHandler;
}) => (
  <Link to={props.url}>
    <StyledCustomDetailButton onClick={props.onClick}>
      {props.children}
    </StyledCustomDetailButton>
  </Link>
);
