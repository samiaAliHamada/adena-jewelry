import Breadcrumb from "../Breadcrumb/Breadcrumb";
import "./MainBanner.css";

export default function MainBanner({ title, breadcrumb, image }) {
  return (
    <div className="main_banner position-relative">
      <img
        src={image}
        className="position-absolute object-fit-cover w-100 h-100"
        alt="Main Section Background"
      />

      <Breadcrumb title={title} breadcrumb={breadcrumb} />
    </div>
  );
}
