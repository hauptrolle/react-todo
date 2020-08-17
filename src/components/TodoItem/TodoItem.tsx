import React from "react";
import { Flex, Text, IconButton, Icon } from "@chakra-ui/core";
import { FaCheck, FaTimes } from "react-icons/fa";

import { Todo } from "../../App";

type Props = {
  todo: Todo;
  index: number;
  toggleTodo: (index: number) => void;
};

export const TodoItem = ({
  todo: { isCompleted, text },
  index,
  toggleTodo,
}: Props) => {
  return (
    <Flex
      p={4}
      bg="gray.100"
      borderRadius={4}
      alignItems="center"
      justify="space-between"
    >
      <Text as={isCompleted ? "s" : "p"}>{text}</Text>
      <IconButton
        onClick={() => toggleTodo(index)}
        aria-label="checkmark"
        icon={isCompleted ? <Icon as={FaTimes} /> : <Icon as={FaCheck} />}
      />
    </Flex>
  );
};
