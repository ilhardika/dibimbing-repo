// import routing
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Form from "./pages/Form";
import RHF from "./pages/RHF";

function App() {
  return (
    <>
      {/* kasih pembungkus dulu routes */}
      <Routes>
        {/* route path mana dan elemen apa */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<ProductList />} />
        {/* pakai : untuk dynamic routing */}
        {/* productSlug itu parameter */}
        <Route path="/product/:productSlug" element={<ProductDetail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/rhf" element={<RHF />} />
      </Routes>
    </>
  );
}

export default App;
