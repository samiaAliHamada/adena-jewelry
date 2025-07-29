import { useEffect, useState } from "react";
import ProductCard from "../../Components/Shared/ProductCard/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row g-3">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
