import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "-/HomePage";
import DetailPage from "-/DetailPage";
import Login from "-/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
          <Route path="/login/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
