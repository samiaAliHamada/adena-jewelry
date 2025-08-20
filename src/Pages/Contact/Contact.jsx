import MainBanner from "../../Components/Shared/MainBanner/MainBanner.jsx";

export default function Contact() {
  return (
    <>
      <MainBanner
        title="Contact Us"
        image="/bg-contact-breadcrumb.png"
        breadcrumb={[{ label: "Home", link: "/" }, { label: "Contact Us" }]}
      />
    </>
  );
}
