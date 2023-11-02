import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Headsection from "./Headsection";
import HomeServise from "./HomeServise";
import Packages from "./Packages";
import Review from "./Review";
import Servises from "./Servises";
import TvServise from "./TvServise";

const Mainlayout = () => {
  return (
    <div>
      <Headsection />
      <TvServise />
      <Servises />
      <HomeServise />
      <Packages />
      <Review />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Mainlayout;
