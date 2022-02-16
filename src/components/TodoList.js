import React from "react";
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoList = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="md">
        No Todos, Yet!!
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="blue.100"
      borderWidth="2px"
      borderRadius="lg"
      maxW={{ base: "75vw", sm: "70vw", lg: "40vw", xl: "35vw" }}
      alignItems="stretch"
      w="100%"
      p="4"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
