/* eslint-disable react/prop-types */
import { BiCheck } from "react-icons/bi";
import "./packagecart.css";
import { BsArrowRightShort } from "react-icons/bs";

const PackageCart = ({ Img, level, price, mb }) => {
  return (
    <div className="package-cart">
      <div className="cart-img">
        <div className="overlay">
          <h1>{mb}</h1>
          <p>MBPS Speed</p>
        </div>
        <img src={Img} />
      </div>

      <div className="cart-icons">
        <div className="icon">
          <i></i>
        </div>
        <div className="icon">
          <i></i>
        </div>
        <div className="icon">
          <i></i>
        </div>
      </div>

      <div className="cart-desc">
        <p className="device">INTERNET + TV + MOBILE</p>
        <h6 className="level">{level}</h6>
        <div className="list">
          <p>
            <BiCheck className="bi" /> 4K Youtube and Facebook Stream.
          </p>
          <p>
            <BiCheck className="bi" /> Optical Fiber Connectionm.
          </p>
          <p>
            <BiCheck className="bi" /> IPv4 & IPv6 Public IP{" "}
          </p>
          <p>
            <BiCheck className="bi" /> 24/7 Phone and Online Support
          </p>
        </div>
        <h5 className="price">
          {price} taka <span>/month</span>
        </h5>
        <a className="btn">
          get started now <BsArrowRightShort className="bs" />
        </a>
      </div>
    </div>
  );
};

export default PackageCart;
