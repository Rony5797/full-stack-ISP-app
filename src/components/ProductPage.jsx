import { AiOutlineSearch } from "react-icons/ai";
import "./css/product-page.css";
import ProductCart from "./mincomp/ProductCart";
import { useState } from "react";

const ProductPage = () => {
  const [chacked, setChacked] = useState();
  const [range, setRange] = useState(10000);

  const data = (event) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      setChacked(event.target.value);
    }
  };

  const rangeData = (event) => {
    setRange(event.target.value);
  };

  return (
    <section className="product-page">
      <div className="side-bar">
        <div className="category">
          <p>category</p>
          <div className="input-fuild">
            <div className="input">
              <input
                type="checkbox"
                onChange={(e) => data(e)}
                id="router"
                name="drone"
                value="router"
              />
              <label htmlFor="router">
                router <span>(0)</span>
              </label>
            </div>
            <div className="input">
              <input type="checkbox" id="onu" name="drone" value="onu" />
              <label htmlFor="onu">
                onu <span>(0)</span>
              </label>
            </div>
            <div className="input">
              <input type="checkbox" id="olt" name="drone" value="olt" />
              <label htmlFor="olt">
                olt <span>(0)</span>
              </label>
            </div>
          </div>
        </div>
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
              step="1000"
              defaultValue="10000"
              onChange={(e) => rangeData(e)}
            />
            <label htmlFor="range">{range} tk</label>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="top-bar">
          <div className="search-bar">
            <input type="text" placeholder="Search.." />
            <AiOutlineSearch className="ai" />
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
