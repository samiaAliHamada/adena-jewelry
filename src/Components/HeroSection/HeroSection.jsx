import HeroSwiper from "../../Components/HeroSwiper/HeroSwiper";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiShippingContainerLight } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";

export default function HeroSection() {
  const heroSlides = [
    {
      id: 1,
      title: "Discover Timeless Elegance",
      subtitle: "Explore our handcrafted jewelry pieces.",
      image: "/slider-1.png",
    },
    {
      id: 2,
      title: "Shine With Every Step",
      subtitle: "Luxury accessories for every occasion.",
      image: "/slider-2.png",
    },
    {
      id: 3,
      title: "Uncover Your Sparkle",
      subtitle: "Join the family of elegance and beauty.",
      image: "/slider-3.png",
    },
  ];
  const features = [
    {
      icon: <LiaShippingFastSolid size={40} />,
      title: "Free Shipping",
      desc: "Free shipping for orders from $200",
    },
    {
      icon: <PiShippingContainerLight size={40} />,
      title: "Easy returns",
      desc: "Refund within 14 days",
    },
    {
      icon: <RiSecurePaymentLine size={40} />,
      title: "Secure payment",
      desc: "Payment information is safe",
    },
    {
      icon: <IoChatbubblesOutline size={40} />,
      title: "Customer care",
      desc: "Outstanding premium support",
    },
  ];

  return (
    <>
      <HeroSwiper slides={heroSlides} />
      <div className="container">
        <div className="row g-4 py-5">
          {features.map((item, idx) => (
            <div key={idx} className="col-lg-3 col-md-12">
              <div className="d-flex align-items-center justify-content-start gap-3">
                <div>{item.icon}</div>
                <div>
                  <p className="m-0">{item.title}</p>
                  <small>{item.desc}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
