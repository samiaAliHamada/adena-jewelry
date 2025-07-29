// import { useEffect, useState } from "react";
import NewsletterPopup from "../../Components/NewsletterPopup/NewsletterPopup";
import HeroSection from "../../Components/HeroSection/HeroSection";
import InstaSection from "../../Components/Shared/InstaSection/InstaSection.jsx";
import ProductCard from "../../Components/Shared/ProductCard/ProductCard";

export default function Home() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data.products); // important: `products` inside the returned data
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <>
      <HeroSection />
      <NewsletterPopup />
      {/* <div className="container py-5">
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
      </div> */}
      <InstaSection />
    </>
  );
}
