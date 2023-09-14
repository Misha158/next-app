"use client";

import React, { useState } from "react";
import { Button, Input } from "antd";
import FormCreateTodo from "./FormCreateTodo";
import Todo from "./Todo";

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
  const [filteredTodos, setFilteredTodos] = useState(defaultTodos);
  const [search, setSearch] = useState("");

  const onSearch = (value: any) => {
    setSearch(value);
    setFilteredTodos(
      defaultTodos.filter((todo: any) => todo.title.includes(value))
    );
  };

  return (
    <>
      <Input
        value={search}
        onChange={({ target: { value } }) => onSearch(value)}
      />

      <Todo filteredTodos={filteredTodos} />

      <FormCreateTodo setTodos={setFilteredTodos} />
    </>
  );
};
