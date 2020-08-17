import React from "react";
import { Stack, Spinner, Flex } from "@chakra-ui/core";

import { firebaseDb } from "./firebase";
import { Shell } from "./components/Shell";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";

export type Todo = {
  text: string;
  isCompleted: boolean;
};

export type TodoList = {
  [key: string]: Todo;
};

const App = () => {
  const [todos, setTodos] = React.useState<TodoList>({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    firebaseDb.ref("todos").on("value", (snapshot) => {
      setTodos(snapshot.val());
      setLoading(false);
    });
  }, []);

  const addTodo = (todo: Todo) => {
    firebaseDb.ref("todos").push(todo);
  };

  const toggleTodo = (key: string) => {
    firebaseDb.ref(`todos/${key}`).set({
      ...todos[key],
      isCompleted: !todos[key].isCompleted,
    });
  };

  return (
    <React.Fragment>
      <Shell>
        <TodoForm addTodo={addTodo} />
        <Stack spacing={4}>
          {Object.keys(todos).map((key) => (
            <TodoItem
              key={key}
              id={key}
              todo={todos[key]}
              toggleTodo={toggleTodo}
            />
          ))}
        </Stack>
        {loading && (
          <Flex justify="center">
            <Spinner />
          </Flex>
        )}
      </Shell>
    </React.Fragment>
  );
};

export default App;
