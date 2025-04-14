import { useState } from "react";

export const useCounter = () => {
  // buat state count dengan default 0
  // var count (kiri) adalah var default dan setCount (kanan) adalah function untuk mengubah var count
  const [count, setCount] = useState(0);

  // buat function handler kurang
  const handleDecrement = () => {
    // ubah var count -1 dengan function setCount, dan rerender
    setCount(count - 1);
  };
  // buat function handler tambah
  const handleIncrement = () => {
    // ubah var count +1 dengan function setCount, dan rerender
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return {
    count,
    handleDecrement,
    handleIncrement,
    handleReset,
  };
};
