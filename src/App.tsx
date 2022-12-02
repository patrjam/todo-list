import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { TodoList } from "./components/TodoList";
import { TodoDetail } from "./components/TodoDetail";
import { TodosProvider } from "./TodosContext";
import { routesList } from "./configs/routesList";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
`;

export const App = () => {
  const [todos, setTodos] = useState<{ id: string; title: string }[]>([]);

  useEffect(() => {
    const handleGetResponse = async () => {
      try {
        const data = await fetch(
          "https://6389f4ef4eccb986e89f6229.mockapi.io/todo/api/todos",
          { method: "GET" }
        );
        setTodos(await data.json());
      } catch (error) {
        console.log(error, "ERROR");
      }
    };

    handleGetResponse();
  }, []);

  return (
    <div>
      <StyledDiv>
        <TodosProvider value={{ todos, setTodos }}>
          <Routes>
            <Route path={routesList.home} element={<TodoList />} />
            <Route path={routesList.detailId} element={<TodoDetail />} />
          </Routes>{" "}
        </TodosProvider>
      </StyledDiv>
    </div>
  );
};
