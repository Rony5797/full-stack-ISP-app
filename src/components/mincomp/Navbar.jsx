import "./navbar.css";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navber">
      <a className="logo">Patenga Online</a>
      <nav>
        <li className="active">হোম </li>
        <li>প্যাকেজ</li>
        <li>প্রোডাক্টস </li>
        <li>আমাদের সম্পর্কে</li>
        <li>ব্লগ</li>
      </nav>
      <div className="login">
        <BiUserCircle className="bi" />
        <a>লগইন</a>
      </div>
    </div>
  );
};

export default Navbar;
