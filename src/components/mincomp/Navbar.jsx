import "./navbar.css";
import { BiUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navber">
      <a className="logo">Patenga Online</a>
      <nav>
        {/* <NavLink to="/" className="active">
          হোম
        </NavLink>
        <NavLink to="/packages">প্যাকেজ</NavLink>
        <NavLink to="/products">প্রোডাক্টস </NavLink>
        <NavLink to="/about-us">আমাদের সম্পর্কে</NavLink>
        <NavLink to="/blog">ব্লগ</NavLink> */}

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          হোম
        </NavLink>
        <NavLink
          to="/packages"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          প্যাকেজ
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          প্রোডাক্টস
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          আমাদের সম্পর্কে
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          ব্লগ
        </NavLink>
      </nav>
      <div className="login">
        <BiUserCircle className="bi" />
        <NavLink to="/login">লগইন</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
