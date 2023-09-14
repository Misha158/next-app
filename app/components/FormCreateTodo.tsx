import React, { useState } from "react";
import { Input, Button } from "antd";

const FormCreateTodo = ({ setTodos }: any) => {
  const [newTodo, setNewTodo] = useState("");

  const createNewTodo = () => {
    setTodos((prev: any) => [
      ...prev,
      { title: newTodo, id: new Date().getMilliseconds() },
    ]);
  };

  return (
    <div>
      <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <Button onClick={createNewTodo}>Create new todo</Button>
    </div>
  );
};

export default FormCreateTodo;
