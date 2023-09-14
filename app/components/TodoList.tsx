"use client";

import React, { useState } from "react";
import { Button } from "antd";

const defaultTodos = [
  {
    id: 1,
    title: "First todo 1",
  },
  {
    id: 2,
    title: "Second todo 2",
  },
  {
    id: 3,
    title: "Third todo 3",
  },
];

export const TodoList = () => {
  const [todos, setTodos] = useState(defaultTodos);

  return (
    <div>
      {todos.map((todo) => (
        <>
          <div key={todo.id}>{todo.title}</div>
          <Button type="primary">Delete</Button>
        </>
      ))}
    </div>
  );
};
