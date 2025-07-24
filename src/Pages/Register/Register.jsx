import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Submitted", formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  return (
    <div className="signup_page container my-5">
      <h2 className="text-center mb-4">Create Account</h2>
      <form
        onSubmit={handleSubmit}
        className="w-100 mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control rounded-0"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control rounded-0"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control rounded-0"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>

        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control rounded-0"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <small className="text-danger">{errors.confirmPassword}</small>
          )}
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-dark rounded-0 w-100" type="submit">
            Register
          </button>
          <button
            className="signin_btn btn border border-dark rounded-0 w-100"
            type="button"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>
        </div>

        {submitted && (
          <div className="alert alert-success mt-3">
            Account created successfully!
          </div>
        )}
      </form>
    </div>
  );
}
