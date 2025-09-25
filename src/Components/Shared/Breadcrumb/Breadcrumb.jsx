import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb({ title, breadcrumb, customClass }) {
  return (
    <div
      className={`d-flex flex-column position-relative ${
        customClass ? styles.breadcrumbAbout : ""
      }`}
      style={{ top: customClass ? "0" : "70px" }}
    >
      <h3 className="mb-2">{title}</h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb opacity-75">
          {breadcrumb.map((item, index) => (
            <li
              key={index}
              className={`breadcrumb-item ${
                index === breadcrumb.length - 1 ? "active fw-bold" : ""
              }`}
              aria-current={
                index === breadcrumb.length - 1 ? "page" : undefined
              }
            >
              {item.link ? (
                <Link
                  to={item.link}
                  className={`text-decoration-none ${
                    customClass ? "text-white" : "text-dark"
                  }`}
                  style={{ color: customClass ? "#fff" : undefined }}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={customClass ? "text-white" : ""}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
