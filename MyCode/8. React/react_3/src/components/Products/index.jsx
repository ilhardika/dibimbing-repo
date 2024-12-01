import Card from "../Card";
import "./style.css";

const Products = ({ productList }) => {
  return (
    <div>
      <div className="product-card">
        {productList.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
