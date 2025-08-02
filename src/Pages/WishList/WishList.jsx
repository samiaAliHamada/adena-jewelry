import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function WishList() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  if (wishlist.length === 0) {
    return (
      <div className="container text-center py-5 my-5">
        <h3>Your Wish List is empty 💔</h3>
      </div>
    );
  }

  return (
    <div className="container my-5 py-5">
      <h2 className="mb-4">My Wish List</h2>
      <div className="row g-4">
        {wishlist.map((item) => (
          <div key={item.id} className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-muted">{item.description}</p>
                <button
                  className="btn btn-outline-danger mt-auto"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <FaTrash className="me-2" /> Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
