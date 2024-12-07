import { useState } from "react";
import Sidebar from "@/Sidebar";
// import { IoMdMenu } from "react-icons/io";

function App() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleAdd = (number) => {
    setCount(count + number); // Tambahkan number ke count
  };

  return (
    <div>
      {/* <div className="p-8">
        {!isSidebarOpen && <IoMdMenu onClick={handleSidebar} />}
      </div>
      {isSidebarOpen && <Sidebar onClose={handleSidebar} />} */}
      <h1>{count}</h1>
      <Sidebar onAdd={handleAdd} />
    </div>
  );
}

export default App;
