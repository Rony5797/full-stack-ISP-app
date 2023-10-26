import "./css/packages.css";
import PackageCart from "./mincomp/PackageCart";

const Packages = () => {
  return (
    <section className="packages">
      <div className="bg-pattern"></div>
      <div className="title">
        <h1>ইন্টারনেটের জন্য সেরা প্যাকেজ বাছাই করুন </h1>
      </div>
      <div className="package-content">
        <PackageCart Img="img/pricing-1.jpg" level="Bronze Package" price="1000" mb="30"/>
        <PackageCart Img="img/pricing-2.jpg" level="Silver Package" price="1250" mb="40"/>
        <PackageCart Img="img/pricing-3.jpg" level="Gold Package" price="1500" mb="50"/>
      </div>
    </section>
  );
};

export default Packages;
