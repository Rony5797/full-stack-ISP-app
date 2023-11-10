import "./css/checkout.css";

const Checkout = () => {
  return (
    <section className="checkout">
      <div className="customer">
        <h1>customer info</h1>
        <form action="">
          <div className="inputBox">
            <div className="input">
              <span>আপনার নাম*</span>
              <input type="text" placeholder="আপনার নাম লিখুন" />
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>আপনার ইমেইল*</span>
              <input type="email" placeholder="আপনার ইমেইল লিখুন" />
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>আপনার ফোন নম্বর*</span>
              <input type="text" placeholder="আপনার নাম্বার লিখুন" />
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>আপনার ঠিকানা*</span>
              <textarea
                name=""
                placeholder="আপনার ঠিকানা লিখুন"
                id=""
                cols="10"
                rows="10"
              ></textarea>
            </div>
          </div>

          <p className="paymant-process">Payment process : bkash merchant </p>
          <p className="note">
            নির্দেশনা : পেমেন্ট বাটনে ক্লিক করার পূর্বে লেনদেনের পরিমাণ মিলিয়ে
            নিন পেমেন্ট সাবমিট হওয়ার পর আপনার সঙ্গে যোগাযোগ করা হবে।
          </p>

          <input type="submit" value="পেমেন্ট করুন " className="btn" />
        </form>
      </div>
      <div className="pay-option">
        <h1 className="title">Current cart</h1>
        <div className="pay-product-list">
          <div className="pay-product">
            <img src="/img/tenda.png" />
            <h1>Tenda F3 300mbps 3 Antennas Router</h1>
            <p>3000/-tk</p>
          </div>
        </div>
        <div className="discount">
          <h3>Discount code</h3>
          <input type="text" name="code" />
          <button type="button" className="btn">
            apply
          </button>
        </div>
        <div className="total-price">
          <h3>total price</h3>

          <p>
            <span>product price: </span> 3000/- TK
          </p>
          <p>
            <span>discount price: </span> 0/- TK
          </p>
          <p>
            <span>total price: </span> 3000/- TK
          </p>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
