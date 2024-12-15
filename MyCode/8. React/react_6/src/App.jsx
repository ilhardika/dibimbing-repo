import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "-/HomePage";
import DetailPage from "-/DetailPage";
import Login from "-/Login";
import ProtectedRoute from "./routes/ProtectedRoutes";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/detail/:id"
            element={
              <ProtectedRoute>
                <DetailPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/login/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
