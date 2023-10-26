import "./css/footer.css";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Fragment } from "react";
const Footer = () => {
  return (
    <Fragment>
      <section className="footer">
        <div className="footer-content">
          <h1>বেস্ট ডেডিকেটেড ইন্টারনেট সার্ভিসেস কোম্পানি </h1>
          <p>
          ঠিকানাঃ ১ম তলা, হাজী নুরুল আলম বিল্ডিং, ১৪ নং এয়ারপোর্ট কলোনি রোড,
            চট্টগ্রাম
          </p>
          <div className="social">
            <div className="icon-box">
              <FaFacebookF className="icon" />
            </div>
            <div className="icon-box">
              <FaWhatsapp className="icon app" />
            </div>
            <div className="icon-box">
              <FaTwitter className="icon" />
            </div>
          </div>
        </div>

        <div className="usefull-link">
          <h1>Usefull Links</h1>
          <div className="link">
            <MdOutlineArrowForwardIos className="md" />
            <a>about us</a>
          </div>

          <div className="link">
            <MdOutlineArrowForwardIos className="md" />
            <a>our clients</a>
          </div>
          <div className="link">
            <MdOutlineArrowForwardIos className="md" />
            <a>testimonial</a>
          </div>

          <div className="link">
            <MdOutlineArrowForwardIos className="md" />
            <a>news & media</a>
          </div>
        </div>
        <div className="services">
          <h1>services</h1>
          <div className="link">
            <MdOutlineArrowForwardIos className="md" />
            <a>Home internet</a>
          </div>
          <div className="link">
            <MdOutlineArrowForwardIos className="md" />
            <a>Corporate internet</a>
          </div>

          <div className="link">
            <MdOutlineArrowForwardIos className="md" />
            <a>SKE internet</a>
          </div>
          <div className="link">
            <MdOutlineArrowForwardIos className="md" />
            <a>our Servises</a>
          </div>
        </div>
        <div className="support">
          <div className="logo">
            <svg
              version="1.1"
              id="wifi"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100px"
              height="100px"
              viewBox="0 0 20 20"
            >
              <path
                id="wifi3"
                fill="#FFFFFF"
                fillOpacity="0.5"
                d="M9.9,5C6.8,5,4,6.4,2.2,8.7l1.1,1.1c1.6-2,4-3.2,6.7-3.2c2.7,0,5.1,1.3,6.7,3.2l1.1-1.1
		C15.8,6.4,13,5,9.9,5z"
              >
                <animate
                  id="four"
                  attributeName="fill-opacity"
                  dur="500ms"
                  values="0.8;1;0.8"
                  calcMode="linear"
                  begin="three.end+0.05s"
                />
              </path>
              <path
                id="wifi2"
                fill="#FFFFFF"
                fillOpacity="0.5"
                d="M9.9,8c-2.3,0-4.3,1.1-5.6,2.8l1.1,1.1c1-1.4,2.6-2.4,4.5-2.4c1.9,0,3.5,0.9,4.5,2.4l1.1-1.1
		C14.2,9.1,12.2,8,9.9,8z"
              >
                <animate
                  id="three"
                  attributeName="fill-opacity"
                  dur="500ms"
                  values="0.8;1;0.8"
                  calcMode="linear"
                  begin="two.end+0.05s"
                />
              </path>
              <path
                id="wifi1"
                fill="#FFFFFF"
                fillOpacity="0.5"
                d="M9.9,11c-1.5,0-2.7,0.8-3.4,2l1.1,1.1c0.4-0.9,1.3-1.6,2.3-1.6s2,0.7,2.3,1.6l1.1-1.1
		C12.6,11.8,11.4,11,9.9,11z"
              >
                <animate
                  id="two"
                  attributeName="fill-opacity"
                  dur="500ms"
                  values="0.8;1;0.8"
                  calcMode="linear"
                  begin="one.end+0.05s"
                />
              </path>
              <circle
                id="dot"
                fill="#FFFFFF"
                fillOpacity="0.5"
                cx="9.9"
                cy="15.3"
                r="1"
              >
                <animate
                  id="one"
                  attributeName="fill-opacity"
                  dur="500ms"
                  values="0.8;1;0.8"
                  calcMode="linear"
                  begin="0s;four.end+0.05s"
                />
              </circle>
            </svg>
            <p>PatengaOnline</p>
          </div>

          <div className="call">
            <div className="icon">
              <BsFillTelephoneFill className="bs" />
            </div>
            <h3>
              <p>call us on</p>0123456789, 0123456789
            </h3>
          </div>

          <div className="mail">
            <div className="icon">
              <HiOutlineMail className="hi" />
            </div>
            <h3>
              <p>mail to us</p>patengaonline14no.gmail.com
            </h3>
          </div>
        </div>
      </section>
      <section className="author">
        © Copyrights 2023 Patenga Online All rights reserved. Develop by Rony
        Hossain.
      </section>
    </Fragment>
  );
};

export default Footer;
