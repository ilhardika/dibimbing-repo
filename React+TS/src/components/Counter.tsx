import { useState } from "react";

const Counter = () => {
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

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        {/* ketika klik memanggil function kurang */}
        <button onClick={handleDecrement}>Kurang</button>
        {/* render var count berdasarkan useState */}
        <p>{count}</p>
        {/* ketika klik memanggil function tambah */}
        <button onClick={handleIncrement}>Tambah</button>
      </div>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
