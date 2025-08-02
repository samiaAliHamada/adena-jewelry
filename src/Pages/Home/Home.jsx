import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import NewsletterPopup from "../../Components/NewsletterPopup/NewsletterPopup";
import HeroSection from "../../Components/HeroSection/HeroSection";
import InstaSection from "../../Components/Shared/InstaSection/InstaSection.jsx";
import ProductCard from "../../Components/Shared/ProductCard/ProductCard";
import Testimonial from "../../Components/Testimonial/Testimonial";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const productsCol = collection(db, "products");
      const snapshot = await getDocs(productsCol);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <HeroSection />
      <NewsletterPopup />
      <div className="container py-5">
        <h1 className="text-center py-4">Top Trending</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="row g-4">
            {products.slice(0, 3).map((product) => (
              <div className="col-md-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
      <Testimonial />

      <InstaSection />
    </>
  );
}
