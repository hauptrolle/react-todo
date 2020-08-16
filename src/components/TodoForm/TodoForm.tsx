import React from "react";
import { Flex, Input, Button } from "@chakra-ui/core";

export const TodoForm = () => {
  return (
    <Flex mb={4}>
      <Input id="todo" placeholder="Add todo ..." />
      <Button colorScheme="teal" ml={4}>
        Add
      </Button>
    </Flex>
  );
};
