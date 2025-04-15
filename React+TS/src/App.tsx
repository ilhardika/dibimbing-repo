// import routing
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
    {/* kasih pembungkus dulu routes */}
      <Routes>
        {/* route path mana dan elemen apa */}
        <Route path="/" element={<Home />} />
        <Route path="/product-detail/:productSlug" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
