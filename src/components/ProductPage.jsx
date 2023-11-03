import { AiOutlineSearch } from "react-icons/ai";
import "./css/product-page.css";
import ProductCart from "./mincomp/ProductCart";

const ProductPage = () => {
  return (
    <section className="product-page">
      <div className="side-bar">
        <div className="brands">
          <p>Brands</p>
          <div className="input-fuild">
            <div className="input">
              <input type="checkbox" id="tenda" name="drone" value="tenda" />
              <label htmlFor="tenda">
                tenda <span>(0)</span>
              </label>
            </div>
            <div className="input">
              <input type="checkbox" id="tplink" name="drone" value="tplink" />
              <label htmlFor="tplink">
                tp-link <span>(0)</span>
              </label>
            </div>
            <div className="input">
              <input type="checkbox" id="netis" name="drone" value="netis" />
              <label htmlFor="netis">
                netis <span>(0)</span>
              </label>
            </div>
          </div>
        </div>

        <div className="price-range">
          <p>Price range</p>

          <div className="range-input">
            <input
              type="range"
              className="range"
              id="range"
              name="range"
              max="10000"
            />
            <label htmlFor="range">10000 tk</label>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="top-bar">
          <div className="search-bar">
            <input type="text" placeholder="Search.." />
            <AiOutlineSearch className="ai"/>
          </div>
        </div>
        <div className="product">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#" className="active">
            2
          </a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
