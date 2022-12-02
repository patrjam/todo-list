import React from "react";
import { CustomDetailButton } from "../styled/DetailButton";
import { getTodoDetail } from "../configs/routesList";
import styled from "styled-components";
import { TodoType } from "../types/TodoType";

const StyledDiv = styled.div`
  font-weight: bold;
  font-size: 18px;
  position: relative;
  z-index: 1;
  line-height: 24px;
  opacity: 0.7;
`;

export const Todo = (props: { todo: TodoType }) => {
  return (
    <div>
      <div>
        {" "}
        <StyledDiv>{props.todo.id}</StyledDiv>
        <div>{props.todo.title}</div>
        <br />
        <CustomDetailButton url={getTodoDetail(props.todo.id)}>
          Detail
        </CustomDetailButton>
      </div>
    </div>
  );
};
