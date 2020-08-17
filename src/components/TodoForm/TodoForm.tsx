import React from "react";
import { Flex, Input, Button } from "@chakra-ui/core";

import { Todo } from "../../App";

type Props = {
  addTodo: (todo: Todo) => void;
};

export const TodoForm = ({ addTodo }: Props) => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (value !== "" && value.trim() !== "") {
      addTodo({
        text: value,
        isCompleted: false,
      });
      setValue("");
      inputRef.current?.focus();
    } else {
      window.alert("Please add a taks text");
    }
  };

  return (
    <Flex mb={4}>
      <Input
        id="todo"
        placeholder="Add todo ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
      />
      <Button colorScheme="teal" ml={4} onClick={handleButtonClick}>
        Add
      </Button>
    </Flex>
  );
};
