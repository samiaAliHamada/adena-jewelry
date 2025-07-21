import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Oops! Something went wrong.</h2>
      <p>The page you're looking for doesn't exist or an error occurred.</p>
      <Link to="/" className="text-decoration-none">
        Back To Home Page
      </Link>
    </div>
  );
}
