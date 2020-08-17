import React from "react";
import { Container, Heading } from "@chakra-ui/core";

type Props = {
  children: React.ReactNode;
};

export const Shell = ({ children }: Props) => {
  return (
    <Container bg="gray.900" mt={12} boxShadow="xl" borderRadius="md" p={4}>
      <Heading fontWeight="medium" size="lg" pb={4} mb={4}>
        React Todo{" "}
        <span role="img" aria-label="yeah emoji">
          👌
        </span>
      </Heading>
      {children}
    </Container>
  );
};
