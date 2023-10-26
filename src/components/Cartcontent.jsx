import "./css/cart-content.css";
import { TbHomeSignal } from "react-icons/tb";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { LuMonitor } from "react-icons/lu";
import { BsRouter } from "react-icons/bs";
import { TbHeartRateMonitor } from "react-icons/tb";

const Cartcontent = () => {
  return (
    <section className="cart-container">
      <div className="box">
        <img src="img/service-1.jpg" />
        <img src="img/service-1.jpg" className="hover-img" />
        <div className="overlay"></div>
        <div className="cart-des">
          <h3>হোম ব্রডব্যান্ড ইন্টারনেট</h3>
          <p className="">
            <BsFillRocketTakeoffFill className="mini-icon" />
            হাই স্পিড ইন্টারনেট
          </p>
          <p className="">
            <LuMonitor className="mini-icon" />
            24/7 সাপোর্ট
          </p>
        </div>

        <span className="icon">
          <TbHomeSignal className="icons" />
        </span>
      </div>
      <div className="box">
        <img src="img/service-2.jpg" />
        <img src="img/service-2.jpg" className="hover-img" />
        <div className="overlay"> </div>
        <div className="cart-des">
          <h3>কর্পোরেট/এসএমই ইন্টারনেট</h3>
          <p className="">
            <BsFillRocketTakeoffFill className="mini-icon" />
            হাই স্পিড ইন্টারনেট
          </p>
          <p className="">
            <LuMonitor className="mini-icon" />
            24/7 সাপোর্ট
          </p>
        </div>

        <span className="icon">
          <BsRouter className="icons"/>
        </span>
      </div>
      <div className="box">
        <img src="img/service-3.jpg" />
        <img src="img/service-3.jpg" className="hover-img" />
        <div className="overlay"> </div>
        <div className="cart-des">
          <h3>ডেডিকেটেড সার্ভার ইন্টারনেট</h3>
          <p className="">
            <BsFillRocketTakeoffFill className="mini-icon" />
            হাই স্পিড ইন্টারনেট
          </p>
          <p className="">
            <LuMonitor className="mini-icon" />
            24/7 সাপোর্ট
          </p>
        </div>

        <span className="icon">
         <TbHeartRateMonitor className="icons"/>
        </span>
      </div>
    </section>
  );
};

export default Cartcontent;
