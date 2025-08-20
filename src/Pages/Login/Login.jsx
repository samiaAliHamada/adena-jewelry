import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { showLoginSuccess } from "../../ToastMessages";
import { useAuthStore } from "../../Store/useAuthStore";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setErrors({});
  }, [formData.email, formData.password]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      return;
    }

    try {
      const user = await login(formData.email, formData.password);
      showLoginSuccess(user.displayName || "User");

      setFormData({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.message);

      let message = "Something went wrong. Please try again.";

      if (error.code === "auth/user-not-found") {
        message = "No account found with this email.";
      } else if (error.code === "auth/wrong-password") {
        message = "Incorrect password. Please try again.";
      } else if (error.code === "auth/invalid-email") {
        message = "Invalid email address.";
      }

      setErrors({ firebase: message });
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
