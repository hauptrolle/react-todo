import React from "react";
import {
  Container,
  Heading,
  Link,
  Flex,
  Image,
  Icon,
  IconButton,
} from "@chakra-ui/core";
import { FaSignOutAlt } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
  signOut: () => void;
  user?: firebase.User;
};

export const Shell = ({ children, user, signOut }: Props) => {
  return (
    <React.Fragment>
      <Container bg="gray.900" mt={12} boxShadow="xl" borderRadius="md" p={4}>
        <Flex justifyContent="space-between" alignItems="center" mb={8}>
          <Heading fontWeight="medium" size="lg">
            React Todo{" "}
            <span role="img" aria-label="yeah emoji">
              👌
            </span>
          </Heading>
          {user && user.photoURL && (
            <Flex justifyContent="space-between" alignItems="center">
              <Image w={30} borderRadius="full" mr={4} src={user.photoURL} />
              {user.displayName}
              <IconButton
                onClick={signOut}
                icon={<Icon as={FaSignOutAlt} />}
                aria-label="sign out"
                ml={4}
                size="sm"
              />
            </Flex>
          )}
        </Flex>
        {children}
      </Container>
      <Container p={4} fontSize="sm" textAlign="center">
        Build with React & Chakra UI. Check it out on{" "}
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
