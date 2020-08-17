import React from "react";
import { Flex, Text, IconButton, Icon } from "@chakra-ui/core";
import { FaCheck, FaRegCircle } from "react-icons/fa";

import { Todo } from "../../App";

type Props = {
  todo: Todo;
  id: string;
  toggleTodo: (id: string) => void;
};

export const TodoItem = ({
  todo: { isCompleted, text },
  id,
  toggleTodo,
}: Props) => {
  const getStatusIcon = () => {
    return isCompleted ? <Icon as={FaCheck} /> : <Icon as={FaRegCircle} />;
  };

  return (
    <Flex alignItems="center">
      <IconButton
        onClick={() => toggleTodo(id)}
        colorScheme={isCompleted ? "green" : "gray"}
        aria-label="status"
        icon={getStatusIcon()}
        mr={4}
        size="sm"
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
