import React from "react";
import { Button } from "antd";

const Todo = ({ filteredTodos }: any) => {
  return (
    <div className="w-72">
      {filteredTodos.map((todo: any) => (
        <div key={todo.id} className="bg-red-400 mb-5 p-4 rounded-lg">
          <div>{todo.title}</div>
          <Button type="primary">Delete</Button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
