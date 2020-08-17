import React from "react";
import { Container, Stack } from "@chakra-ui/core";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";

export type Todo = {
  text: string;
  isCompleted: boolean;
};

const TODOS: Todo[] = [
  {
    text: "Create Todo App",
    isCompleted: true,
  },
  {
    text: "Add unit tests",
    isCompleted: false,
  },
  {
    text: "Deploy to Vercel",
    isCompleted: false,
  },
  {
    text: "What to do next?",
    isCompleted: false,
  },
];

const App = () => {
  const [todos, setTodos] = React.useState<Todo[]>(TODOS);

  const addTodo = (todo: Todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <TodoForm addTodo={addTodo} />
        <Stack spacing={4}>
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.text}
              todo={todo}
              index={index}
              toggleTodo={toggleTodo}
            />
          ))}
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default App;
