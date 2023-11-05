import { Link } from "react-router-dom";
import "./productcart.css";
const ProductCart = () => {
  return (
    <div className="product-cart">
      <div className="cart-img">
        <img src="img/tenda.png" alt="product" />
      </div>
      <div className="cart-content">
        <h1>tenda router</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          libero vel autem perferendis itaque cumque.
        </p>
        <p className="price">price: 3000/- tk</p>
        <Link className="btn" to="555566">Buy now</Link>
      </div>
    </div>
  );
};

export default ProductCart;
