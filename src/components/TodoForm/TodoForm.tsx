import React from "react";
import { Flex, Input, Button } from "@chakra-ui/core";

import { Todo } from "../../App";

type Props = {
  addTodo: (todo: Todo) => void;
};

export const TodoForm = ({ addTodo }: Props) => {
  const [value, setValue] = React.useState("");

  const handleButtonClick = () => {
    if (value !== "" && value.trim() !== "") {
      addTodo({
        text: value,
        isCompleted: false,
      });
      setValue("");
    } else {
      window.alert("Please add a taks text");
    }
  };

  return (
    <Flex mb={4}>
      <Input
        id="todo"
        placeholder="Add todo ..."
        onChange={(e) => setValue(e.target.value)}
      />
      <Button colorScheme="teal" ml={4} onClick={handleButtonClick}>
        Add
      </Button>
    </Flex>
  );
};
