// import routing
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <>
    {/* kasih pembungkus dulu routes */}
      <Routes>
        {/* route path mana dan elemen apa */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        {/* pakai : untuk dynamic routing */}
        {/* productSlug itu parameter */}
        <Route path="/product-detail/:productSlug" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
