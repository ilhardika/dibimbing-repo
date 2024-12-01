import "./App.css";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div>
      // bisa pake inline style dari react atau css
      <h1 style={{ backgroundColor: "gray" }} className="text-3xl">
        Hello world!
      </h1>
      <Navbar />
    </div>
  );
}
