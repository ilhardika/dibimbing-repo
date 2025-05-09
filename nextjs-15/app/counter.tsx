"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>number : {count}</p>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
}
