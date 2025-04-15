import { useParams } from "react-router";

function ProductDetail() {
  const params = useParams<{ productSlug: string }>();
  return (
    <div>
      <h1>{params.productSlug}</h1>
    </div>
  );
}

export default ProductDetail;
