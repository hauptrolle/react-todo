import React from "react";
import { Flex, Input, IconButton, Icon } from "@chakra-ui/core";
import { FaPlus } from "react-icons/fa";

import { Todo } from "../../App";

type Props = {
  addTodo: (todo: Todo) => void;
};

export const TodoForm = ({ addTodo }: Props) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

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
    <Flex as="form" mb={8} onSubmit={handleSubmit}>
      <Input
        id="todo"
        placeholder="Add todo ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton
        aria-label="Add todo"
        colorScheme="orange"
        icon={<Icon as={FaPlus} />}
        ml={4}
        type="submit"
      >
        Add
      </IconButton>
    </Flex>
  );
};
