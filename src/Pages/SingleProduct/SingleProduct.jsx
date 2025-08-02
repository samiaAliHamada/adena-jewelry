import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Breadcrumb from "../../Components/Shared/Breadcrumb/Breadcrumb";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) return <h2 className="text-center my-5">Loading...</h2>;

  if (!product) return <h2 className="text-center my-5">Product not found</h2>;

  return (
    <div className="container py-5">
      <Breadcrumb
        title={product.title}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Products", link: "/products" },
          { label: product.title },
        ]}
      />

      <div className="row g-4 align-items-center my-5 py-5">
        <div className="col-md-6 text-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4>${product.price}</h4>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {product.rating}
          </p>
        </div>
      </div>
    </div>
  );
}
