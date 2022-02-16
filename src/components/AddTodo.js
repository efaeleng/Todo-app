import { useState } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

const AddTodo = ({ addTodo }) => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(123);
    // useToast
    if (!content) {
      toast({
        title: "No content!!!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    console.log(content);

    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodo(todo);
    setContent("");
  };

  const [content, setContent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="6">
        <Input
          outline="gray"
          variant="filled"
          placeholder="Add New Todo..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button color="white" bgColor="gray.500" px="5" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
