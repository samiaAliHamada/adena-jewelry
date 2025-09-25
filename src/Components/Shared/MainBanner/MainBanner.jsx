import Breadcrumb from "../Breadcrumb/Breadcrumb";
import "./MainBanner.css";

export default function MainBanner({ title, breadcrumb, image, customClass }) {
  return (
    <div className="main_banner position-relative">
      <img src={image} alt="Banner" className="img-fluid w-100" />
      <div className="position-absolute top-50 end-0">
        <Breadcrumb
          title={title}
          breadcrumb={breadcrumb}
          customClass={customClass}
        />
      </div>
    </div>
  );
}
