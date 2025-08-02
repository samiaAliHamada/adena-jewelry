import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { showLoginSuccess } from "../../ToastMessages";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        showLoginSuccess(userCredential.user.displayName || "User");
        setFormData({ email: "", password: "" });
        navigate("/");
      } catch (error) {
        console.error("Login error:", error.message);
        setErrors({ firebase: error.message });
      }
    }
  };

  return (
    <div className="login_page container my-5 py-5">
      <h2 className="text-center my-4">Account</h2>
      <div className="row align-items-center g-5">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="w-100 mx-auto py-5">
            <h4 className="mb-2">Sign in</h4>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control rounded-0"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            <div className="mb-3">
              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control rounded-0"
                  placeholder="Password*"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="position-absolute top-50 end-0 translate-middle-y me-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>

              {errors.password && (
                <small className="text-danger">{errors.password}</small>
              )}
            </div>

            {errors.firebase && (
              <div className="alert alert-danger mt-2">{errors.firebase}</div>
            )}

            {submitted && (
              <div className="alert alert-success mt-3">
                Logged in successfully!
              </div>
            )}

            <button
              className="btn bg-black text-white rounded-0 w-100"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <div className="d-flex flex-column gap-3">
            <h4>New customer?</h4>
            <p className="text-secondary">
              Sign up for early Sale access plus tailored new arrivals, trends
              and promotions. To opt out, click unsubscribe in our emails.
            </p>
            <div>
              <button
                className="btn border bg-black text-white rounded-0 px-4"
                type="button"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
