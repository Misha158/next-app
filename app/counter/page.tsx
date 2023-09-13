"use client";

import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prev) => prev + 1);
  };

  const decrement = () => {
    setValue((prev) => prev - 1);
  };

  return (
    <div>
      <div>Counter value: {value}</div>
      <div className="flex justify-between w-72">
        <button
          className="bg-yellow-400 text-violet-400 p-2 rounded-lg"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-yellow-400 text-violet-400 p-2 rounded-lg"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
