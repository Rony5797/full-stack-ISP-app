/* eslint-disable react/prop-types */
import { BiSolidQuoteRight } from "react-icons/bi";
import "./reviewslide.css";
const ReviewSlide = ({ review, clientImg }) => {
  return (
    <div className="reviewslide">
      <BiSolidQuoteRight className="bi" />
      <div className="user">
        <img src={clientImg} alt="review" />
        <div className="user-info">
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
        </div>
      </div>
      <p>{review}</p>
    </div>
  );
};

export default ReviewSlide;
