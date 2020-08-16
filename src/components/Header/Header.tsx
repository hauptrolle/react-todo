import React from "react";
import { Box, Heading } from "@chakra-ui/core";

export const Header = () => {
  return (
    <Box p={4} bg="gray.200" textAlign="center" mb={4}>
      <Heading size="lg">React Todo</Heading>
    </Box>
  );
};
