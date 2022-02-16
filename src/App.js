import React, { useState, useEffect } from "react";
import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  // const initialTodos = [
  //   {
  //     id: 1,
  //     body: "Learn React",
  //   },
  //   {
  //     id: 2,
  //     body: "Learn Redux",
  //   },
  // ];

  // const [todos, setTodos] = useState(initialTodos)
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        pb="6"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, gray.400, gray.500, blue.700)"
        bgClip="text"
      >
        Todo App
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
