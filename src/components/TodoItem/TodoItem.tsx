import React from "react";
import { Flex, Text, IconButton, Icon } from "@chakra-ui/core";
import { FaCheck, FaRegCircle } from "react-icons/fa";

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
  const getStatusIcon = () => {
    return isCompleted ? <Icon as={FaCheck} /> : <Icon as={FaRegCircle} />;
  };

  return (
    <Flex alignItems="center">
      <IconButton
        onClick={() => toggleTodo(index)}
        colorScheme={isCompleted ? "green" : "gray"}
        aria-label="checkmark"
        icon={getStatusIcon()}
        mr={4}
      />
      <Text
        color={isCompleted ? "gray.400" : "inherit"}
        as={isCompleted ? "s" : "p"}
      >
        {text}
      </Text>
    </Flex>
  );
};
