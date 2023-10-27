import "./css/servises.css";
import { BsRouter } from "react-icons/bs";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdCable } from "react-icons/md";
import { LiaHandshakeSolid } from "react-icons/lia";
import { FaHeadset } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";
import { BsArrowRightShort } from "react-icons/bs";

const Servises = () => {
  return (
    <section className="servises">
      <div className="title">
        <h1>কেন সবার কাছে পতেঙ্গা অনলাইন ফাইবার ইন্টারনেট জনপ্রিয়</h1>
      </div>
      <div className=" box-cart">
        <div className="box-cart-content">
          <h3>পতেঙ্গা অনলাইন হোম ওয়াইফাই</h3>
          <p>৭০০/- টাকা থেকে শুরু প্রতি মাসে</p>
          <a href="">
            এখনই শুরু করুন <BsArrowRightShort className="bs" />
          </a>
        </div>
      </div>
      <div className="box-area">
        <div className="box">
          <div className="box-icon">
            <BsRouter className="icons" />
          </div>

          <h3>দ্রুততম ব্রডব্যান্ড গতি</h3>
        </div>
        <div className="box">
          <div className="box-icon">
            <BsTelephoneInbound className="icons" />
          </div>

          <h3>আমরা ২৪/৭ কল পরিষেবা প্রধান করি</h3>
        </div>
        <div className="box">
          <div className="box-icon">
            <MdCable className="icons" />
          </div>

          <h3>ফাইবার অপটিক্যাল সংযোগ</h3>
        </div>
        <div className="box">
          <div className="box-icon">
            <LiaHandshakeSolid className="icons" />
          </div>

          <h3>৯৮%+ আপটাইম গ্যারান্টিযুক্ত।</h3>
        </div>
        <div className="box">
          <div className="box-icon">
            <FaHeadset className="icons" />
          </div>

          <h3>উন্নত মনিটরিং</h3>
        </div>
        <div className="box">
          <div className="box-icon">
            <FaNetworkWired className="icons" />
          </div>

          <h3>IPv6 সমর্থিত ডেডিকেটেড</h3>
        </div>
      </div>
     
      
      <div className="tvserver">
        <div className="img-overlay"></div>
        <div className="tvserver-content">
          <h1>পতেঙ্গা অনলাইন টিভি সার্ভার লিঙ্ক</h1>
          <p>
            পতেঙ্গা অনলাইন লিমিটেডের সাথে সংযুক্ত হন এবং সমস্ত টিভি সার্ভার এবং
            বিডিআইএক্স সার্ভার পান
          </p>
          <div className="tvserver-btn">
            <PiTelevision className="pi" />
            ক্লিক করুন
            <a href="">
              লাইভ টিভি সার্ভার <BsArrowRightShort className="bs" />
            </a>
          </div>
        </div>
        <div className="tvserver-img">
          <img src="img/led.png" />
        </div>
      </div>
    </section>
  );
};

export default Servises;
