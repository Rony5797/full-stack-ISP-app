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
              <input type="radio" name="payment" defaultChecked />
              <level htmlFor="bkash">bkash Pay</level>
            </div>
            <div className="cash">
              <input type="radio" name="payment" />
              <level htmlFor="cash">cash on delivery</level>
            </div>
          </div>
          <button type="button" className="btn">
            Buy 
          </button>
        </div>
      </div>
      <div className="single-product-buttom">
        <div className="specification">
          <h1>Specification</h1>

          <table>
            <thead>
              <tr>
                <td className="heading-row" colSpan="3">
                  Wireless N Router
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="name">Signal Rate</td>
                <td className="value">
                  11n: Up to 300Mbps(dynamic)
                  <br />
                  11g: Up to 54Mbps(dynamic)
                  <br />
                  11b: Up to 11Mbps(dynamic)
                </td>
              </tr>
              <tr>
                <td className="name">Warranty </td>
                <td className="value">01 Year Warranty</td>
              </tr>
              <tr>
                <td className="name">Interface</td>
                <td className="value">
                  4 10/100Mbps LAN PORTS
                  <br />1 10/100Mbps WAN PORT
                </td>
              </tr>
              <tr>
                <td className="name">Button</td>
                <td className="value">
                  WPS/Reset Button
                  <br />
                  Wireless On/Off Switch
                  <br />
                  Power On/Off Button
                </td>
              </tr>
              <tr>
                <td className="name">External Power Supply</td>
                <td className="value">9VDC / 0.6A</td>
              </tr>
              <tr>
                <td className="name">Wireless Standards</td>
                <td className="value">
                  IEEE 802.11n, IEEE 802.11g, IEEE 802.11b
                </td>
              </tr>
              <tr>
                <td className="name">Frequency</td>
                <td className="value">2.4-2.4835GHz</td>
              </tr>
              <tr>
                <td className="name">EIRP</td>
                <td className="value">&lt;20dBm(EIRP)</td>
              </tr>
              <tr>
                <td className="name">Wireless Security</td>
                <td className="value">
                  64/128/152-bit WEP / WPA / WPA2,WPA-PSK / WPA2-PSK
                </td>
              </tr>{" "}
            </tbody>
          </table>
        </div>
        <div className="description">
          <h1>Description</h1>
          <p>
            300Mbps Wireless N Router TL-WR841N is a combined wired/wireless
            network connection device designed specifically for small business
            and home office networking requirements. With 2T2R MIMO Technology,
            TL-WR841N creates an exceptional and advanced wireless performance,
            making it ideal for streaming HD video, making VoIP and online
            gaming. Also, Quick Setup Security (QSS) button on the sleek and
            fashionable exterior ensures WPA2 encryptions, preventing the
            network from outside intrusions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
