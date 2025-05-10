import Image from "next/image";
import { Counter } from "./counter";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1745949779026-f7fdd1470f8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
        width={300}
        height={300}
        alt="gambar 1"
      />
    </>
  );
}
