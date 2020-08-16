import React from "react";
import { Container } from "@chakra-ui/core";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <TodoForm />
        <TodoItem />
      </Container>
    </React.Fragment>
  );
};

export default App;
