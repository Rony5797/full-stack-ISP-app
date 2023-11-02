import "./css/tv-service.css";

import { FaEarthAmericas } from "react-icons/fa6";
import { AiOutlineCheckCircle } from "react-icons/ai";

const TvServise = () => {
  return (
    <section className="tv-service">
      <div className="left-side">
        <img src="img/about-1.png" />
        <div className="client">
          <p>
            <span>1K+ </span>clients
          </p>
        </div>
      </div>

      <div className="right-side">
        <h1>দ্রুত ইন্টারনেট সহ লাইভ টিভি পরিষেবা প্রদান করা</h1>
        <h5>
          পতেঙ্গা অনলাইন লিমিটেডের সাথে সংযুক্ত হন যা বিশ্বকে সংযুক্ত করার জন্য
          আপনার প্রয়োজনীয় প্রতিটি প্রযুক্তি সরবরাহ করতে পারে।
        </h5>
        <div className="exp-content">
          <div className="exp">
            <FaEarthAmericas className="fa" />
            <p>১২+ বছরের অভিজ্ঞতা</p>
          </div>
          <p className="exp-des">
            পতেঙ্গা অনলাইন ইন্টারনেট চট্টগ্রাম ১৪ নম্বর বিমানবন্দর জুড়ে দ্রুততম
            ব্রডব্যান্ড ইন্টারনেট এবং নেটওয়ার্ক সলিউশন প্রদান করছে, সকলের জন্য
            নির্ভরযোগ্য।
          </p>
        </div>
        <div className="check-content">
          <p>
            <AiOutlineCheckCircle className="ai" />
            পতেঙ্গা অনলাইন ইন্টারনেট অন্যতম দ্রুততম ইন্টারনেট প্রদান করছে
          </p>

          <p>
            <AiOutlineCheckCircle className="ai" />
            গেমার এবং নিয়মিত ব্যবহারকারী উভয়ের জন্যই নির্ভরযোগ্য।
          </p>

          <p>
            <AiOutlineCheckCircle className="ai" />
            আপনার প্রান্তে হোস্ট করা একটি ডেডিকেটেড সার্ভার পান
          </p>
        </div>
      </div>
      <img src="img/pattern-1.jpg" className="pattern" />
    </section>
  );
};

export default TvServise;
