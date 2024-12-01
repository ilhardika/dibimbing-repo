import "./style.css";

const Card = (props) => {
  const { product } = props;
  return (
    <div key={product.id} className="card">
      <div className="card-image">
        <img src={product.image} alt="" />
      </div>
      <div className="card-content">
        <div className="card-content-left">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
        </div>
        <div className="card-content-right">
          <p className="product-price">${product.price}</p>
          <p className="product-colors">{product.colors.length} color</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
