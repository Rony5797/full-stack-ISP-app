import "./css/headsection.css";

const Headsection = () => {
  return (
    <section className="headsection">
      <div className="content">
        <h1>পতেঙ্গা অনলাইন ইন্টারনেট সার্ভিস প্রদানকারী</h1>
        <p>
          পতেঙ্গা অনলাইন ইন্টারনেট জনপ্রিয় ইন্টারনেট সেবা প্রদানকারী
          প্রতিষ্ঠান, প্রযুক্তি দিয়ে একটি দ্রুত এবং দ্বিধা হীন ইন্টারনেট সংযোগ
          প্রদান করে। পতেঙ্গা অনলাইন ইন্টারনেট সবক্ষেত্রে ব্যবস্থা প্রদান করে
          যাতে গ্রাহকরা বিশ্বস্ত, দ্রুত এবং স্থিতিশীল ইন্টারনেট সংযোগ অনুভব করতে
          পারে। আমাদের দক্ষ টিম এবং উন্নত প্রযুক্তি ব্যবহার করে আমাদের গ্রাহকদের
          সেরা সেবা নিশ্চিত করে। পতেঙ্গা অনলাইন ইন্টারনেট প্রদান করে দ্রুত,
          নির্ভরযোগ্য এবং সুরক্ষিত ইন্টারনেট সংযোগ
        </p>
        <a className="btn">প্ল্যান দেখুন </a>
      </div>
      <div className="bkashimg">
        <h3>Easy to payment</h3>
        <hr
          style={{
            background: "#FFFCEC",
            margin: "5px",
            height: "3px",
          }}
        />
        <img src="img/bKash.png" />
      </div>
    </section>
  );
};

export default Headsection;
