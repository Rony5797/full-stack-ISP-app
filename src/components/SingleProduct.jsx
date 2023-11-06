import "./css/single-product.css";

const SingleProduct = () => {
  return (
    <section className="single-product">
      <div className="single-product-top">
        <div className="single-product-img">
          <img src="/img/tenda.png" alt="single-product" />
        </div>
        <div className="single-product-key">
          <h1>Tenda F3 300mbps 3 Antennas Router</h1>
          <h1 className="key">Key Features</h1>
          <p>model: tenda F3</p>
          <p>interface: 1x wan & 3x lan port</p>
          <p>dim: 127.4*9035*26mm</p>
          <p>frequency: 2.4GHz</p>
          <h1>Price: 3000/- tk</h1>
          <div className="payment-option">
            <div className="bkash">
              <input type="radio" name="payment" />
              <level htmlFor="bkash">bkash Pay</level>
            </div>
            <div className="cash">
              <input type="radio" name="payment" defaultChecked />
              <level htmlFor="cash">cash on delivery</level>
            </div>
          </div>
          <button type="button" className="btn">
            Buy now
          </button>
        </div>
      </div>
      <div className="single-product-buttom">descriptions</div>
    </section>
  );
};

export default SingleProduct;
