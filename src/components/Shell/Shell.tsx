import React from "react";
import { Container, Heading, Link } from "@chakra-ui/core";

type Props = {
  children: React.ReactNode;
};

export const Shell = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Container bg="gray.900" mt={12} boxShadow="xl" borderRadius="md" p={4}>
        <Heading fontWeight="medium" size="lg" mb={4}>
          React Todo{" "}
          <span role="img" aria-label="yeah emoji">
            👌
          </span>
        </Heading>
        {children}
      </Container>
      <Container p={4} fontSize="sm" textAlign="center">
        Build with React & Chakra UI. Checkout on{" "}
        <Link
          color="orange.300"
          href="https://github.com/hauptrolle/react-todo"
        >
          GitHub
        </Link>{" "}
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>
      </Container>
    </React.Fragment>
  );
};
