import React from "react";
import { Flex, Text, IconButton, Icon } from "@chakra-ui/core";
import { FaCheck } from "react-icons/fa";

export const TodoItem = () => {
  return (
    <Flex
      p={4}
      bg="gray.100"
      borderRadius={4}
      alignItems="center"
      justify="space-between"
    >
      <Text>Todo Item</Text>
      <IconButton aria-label="checkmark" icon={<Icon as={FaCheck} />} />
    </Flex>
  );
};
