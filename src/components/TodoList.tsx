import React, { useContext } from "react";
import { Todo } from "./Todo";
import { todosContext } from "../TodosContext";
import styled from "styled-components";
import { TodoType } from "../types/TodoType";

const StyledLi = styled.li`
  display: flex;
  padding: 10px;
  flex-direction: column;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 12px;
  background-color: #fff;
  border-left: 4px solid #fff;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  border-left-color: #dc0069;
  font-weight: bold;
  position: relative;
  z-index: 1;
  font-size: 14px;
`;

const StyledOl = styled.ol`
  width: 100%;
  max-width: 50%;
  margin: auto;
`;

export const TodoList = () => {
  const { todos, setTodos } = useContext(todosContext);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <StyledOl>
          {todos.map((todo: TodoType, index: number) => (
            <StyledLi key={index}>
              <Todo todo={todo} />
            </StyledLi>
          ))}
        </StyledOl>
      </div>
    </div>
  );
};
