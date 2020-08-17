import React from "react";
import { Stack, Spinner, Flex, Button, Box, Text } from "@chakra-ui/core";

import {
  firebaseDb,
  firebaseAuth,
  signInWithGoogle,
  signOut,
} from "./firebase";
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
  const [authLoading, setAuthLoading] = React.useState(true);
  const [user, setUser] = React.useState<firebase.User | undefined>(undefined);

  React.useEffect(() => {
    setAuthLoading(true);
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }

      setAuthLoading(false);
    });
  }, []);

  React.useEffect(() => {
    setLoading(true);
    firebaseDb.ref(`todos/${user?.uid}`).on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setTodos(snapshot.val());
      } else {
        setTodos({});
      }

      setLoading(false);
    });
  }, [user]);

  const addTodo = (todo: Todo) => {
    firebaseDb.ref(`todos/${user?.uid}`).push(todo);
  };

  const removeTodo = (key: string) => {
    firebaseDb.ref(`todos/${user?.uid}/${key}`).remove();
  };

  const toggleTodo = (key: string) => {
    firebaseDb.ref(`todos/${user?.uid}/${key}`).set({
      ...todos[key],
      isCompleted: !todos[key].isCompleted,
    });
  };

  const renderLoader = () => {
    return (
      <Flex justify="center">
        <Spinner />
      </Flex>
    );
  };

  return (
    <Shell user={user} signOut={signOut}>
      {user ? (
        <React.Fragment>
          <TodoForm addTodo={addTodo} />
          <Stack spacing={4}>
            {Object.keys(todos).map((key) => (
              <TodoItem
                key={key}
                id={key}
                todo={todos[key]}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
              />
            ))}
          </Stack>
          {loading && renderLoader()}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {authLoading ? (
            renderLoader()
          ) : (
            <Box>
              <Text mb={8}>A login is required to create a todo list.</Text>
              <Button onClick={signInWithGoogle}>Login with Google</Button>
            </Box>
          )}
        </React.Fragment>
      )}
    </Shell>
  );
};

export default App;
