import './cart.css'


const Cart = () => {
  return (
    <div className="content-cart">
      <div className="content-icon">
      <i className="fa-solid fa-desktop"></i>
      </div>
      <img src="img/service-1.png" />
      <div className="content-des">
        <h3>হোম ব্রডব্যান্ড ইন্টারনেট</h3>
        <p className="">
          <i className="fa-solid fa-desktop"></i>হাই স্পিড ইন্টারনেট
        </p>
        <p className="">
          <i className="fa-solid fa-rocket"></i>24/7 সাপোর্ট
        </p>
      </div>
    </div>
  );
};

export default Cart;
