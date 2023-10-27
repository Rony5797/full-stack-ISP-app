import { Fragment } from "react";
import "./css/homeservise.css";
import { BiServer } from "react-icons/bi";
import { FaHeadset } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";

const HomeServise = () => {
  return (
    <Fragment>
      <section className="homeservise">
        <div className="left-side">
          <img src="img/about-2.png" />
        </div>

        <div className="right-side">
          <h1>আমরা হোম ইন্টারনেট পরিষেবার জন্য সেরা</h1>
          <h6>
            আমাদের সাথে শুরু করার জন্য, অনুগ্রহ করে আমাদের সমস্ত ইন্টারনেট
            প্ল্যান এবং অন্যান্য প্ল্যানগুলি দেখে যান যাতে আমাদের অপারেটরা
            জানাতে পারে যে কোনটি আপনার জন্য সবচেয়ে ভাল কাজ করে! আমরা উচ্চ-মানের
            গ্রাহক সহায়তার নিশ্চয়তা দিই
          </h6>
          <div className="exp-content">
            <div className="exp">
              <BiServer className="icons" />
            </div>
            <div>
              <h5>ডেডিকেটেড সার্ভার</h5>
              <p>
                একটি ডেডিকেটেড সার্ভার হল একটি কম্পিউটার সিস্টেম যা একটি
                নির্দিষ্ট উদ্দেশ্যে ব্যবহৃত হয় এবং এটি একটি সময়ে একটি
                নেটওয়ার্ক বা ওয়েবসাইটের জন্য শুধুমাত্র একটি একক অ্যাসাইন করা
                উইন্ডোজ ওয়েব সার্ভার।
              </p>
            </div>
          </div>
          <div className="exp-content">
            <div className="exp">
              <FaHeadset className="icons" />
            </div>
            <div>
              <h5>উন্নত মনিটরিং</h5>
              <p>
                সাধারণত সিস্টেম, নেটওয়ার্ক বা অন্যান্য সম্মিলিত উপাদানের অবস্থা
                বা কার্যকলাপ নিরীক্ষণ করতে ব্যবহৃত হয়। এটি এমন তথ্য প্রদান করে
                যা ভবিষ্যতে সমস্যা সমাধান বা সমাধান করতে সহায়ক হতে পারে।
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="coverage">
        <div className="area-content">
          <FaWifi className="fa"/>
          <div className="area-text">
            <p>call us now for coverage area</p>
            <h6>+880-1974742911</h6>
            <h6>+880-1974742914</h6>
          </div>
        </div>
        <div className="area-img">
          <img src="img/dotted-map.png" />
        </div>
      </section>
    </Fragment>
  );
};

export default HomeServise;
