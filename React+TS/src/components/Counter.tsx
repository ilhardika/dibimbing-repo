import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  // panggil custom hook useCounter
  // destructuring var count dan function handler dari useCounter
  const { count, handleDecrement, handleIncrement, handleReset } = useCounter();

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
