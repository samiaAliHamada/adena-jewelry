import { Link } from "react-router-dom";
import "./Breadcrumb.css";

export default function Breadcrumb({ title, breadcrumb }) {
  return (
    <div className="breadcrumb_container position-absolute text-white text-end bottom-0 end-0 p-5">
      <h1>{title}</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-end mb-0">
          {breadcrumb.map((item, index) => (
            <li
              key={index}
              className={`breadcrumb-item ${
                index === breadcrumb.length - 1 ? "active" : ""
              }`}
              aria-current={index === breadcrumb.length - 1 ? "page" : null}
            >
              {item.link ? (
                <Link
                  to={item.link}
                  className="text-white text-decoration-none"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
