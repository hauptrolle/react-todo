import React from "react";
import { Flex, Text, IconButton, Icon } from "@chakra-ui/core";
import { FaCheck, FaRegCircle, FaTrashAlt } from "react-icons/fa";

import { Todo } from "../../App";

type Props = {
  todo: Todo;
  id: string;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoItem = ({
  todo: { isCompleted, text },
  id,
  toggleTodo,
  removeTodo,
}: Props) => {
  const getStatusIcon = () => {
    return isCompleted ? <Icon as={FaCheck} /> : <Icon as={FaRegCircle} />;
  };

  return (
    <Flex justifyContent="space-between">
      <Flex alignItems="center">
        <IconButton
          onClick={() => toggleTodo(id)}
          colorScheme={isCompleted ? "green" : "gray"}
          aria-label="todo status"
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
      <Flex alignItems="center">
        <IconButton
          onClick={() => removeTodo(id)}
          aria-label="remove todo"
          icon={<Icon as={FaTrashAlt} />}
          size="xs"
        />
      </Flex>
    </Flex>
  );
};
