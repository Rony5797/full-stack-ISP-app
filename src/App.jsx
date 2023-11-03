import Mainlayout from "./components/Mainlayout";
import AllPackagesPage from "./components/AllPackagesPage";
import ProductPage from "./components/ProductPage";
import AboutusPage from "./components/AboutusPage";
import BlogPage from "./components/BlogPage";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import Navbar from "./components/mincomp/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Mainlayout />} />
        <Route path="/packages" element={<AllPackagesPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutusPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<h1>Undefined Route</h1>} />
      </Routes>
    </div>
  );
};

export default App;
