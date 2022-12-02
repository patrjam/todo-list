import React, { useContext } from "react";
import { todosContext } from "../TodosContext";
import { useParams } from "react-router-dom";
import { CustomBackButton } from "../styled/BackButton";
import { routesList } from "../configs/routesList";
import styled from "styled-components";
import { TodoType } from "../types/TodoType";

const StyledLi = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  font-weight: bold;
  max-width: 50%;
  margin: auto;
  padding: 15px;
`;

export const TodoDetail = () => {
  const { todos, setTodos } = useContext(todosContext);

  const { id } = useParams();

  const todoDetail = todos.filter(
    (todo: TodoType) => Number(todo.id) === Number(id)
  );

  return (
    <div>
      <h1>Detail</h1>

      <StyledLi>
        <div>ID: {todoDetail[0]?.id}</div>{" "}
        <div> Title: {todoDetail[0]?.title}</div>
        <br />
        <img alt={""} src={"https://picsum.photos/200"}></img>
      </StyledLi>

      <CustomBackButton url={routesList.home}>Back</CustomBackButton>
    </div>
  );
};
