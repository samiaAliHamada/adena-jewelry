import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import ProductCard from "../../Components/Shared/ProductCard/ProductCard";
import MainBanner from "../../Components/Shared/MainBanner/MainBanner";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsCol = collection(db, "products");
        const snapshot = await getDocs(productsCol);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <MainBanner
        title="Products"
        image="/shop-img-2.png"
        breadcrumb={[{ label: "Home", link: "/" }, { label: "Shop" }]}
      />

      <div className="container py-5">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-dark" role="status" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center text-muted py-5">No products found.</div>
        ) : (
          <div className="row g-4">
            {products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
