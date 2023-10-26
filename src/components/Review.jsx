// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";
// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
import "./css/review.css";
import ReviewSlide from "./mincomp/ReviewSlide";
const Review = () => {
  return (
    <section className="review">
      <h1 className="heading">
        আমাদের মূল্যবান ক্লায়েন্টরা কি বলে তা পর্যালোচনা করুন
      </h1>

      <div className="review-slider">
        <div className="wrapper">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ReviewSlide clientImg="img/client-1.jpg" review="একের পর এক সার্ভিস সর্বোত দ্রুত ও দ্রুততম ইন্টারনেট সেবা সরবরাহ করে। মাসিক মূল্য সহজবোধ্য এবং সংযমিত। সর্বোচ্চ মান এবং দরকারী পরিস্থিতি বিনিময় সাথে, এটি একটি দর্জাবস্থিত সেবা।" />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewSlide clientImg="img/client-2.jpg" review="এই প্রদানকারী দ্বারা সরবরাহকৃত ইন্টারনেট সেবা অত্যন্ত দ্রুত ও স্থির। তাদের সমর্পণ আমাদের জন্য অত্যন্ত প্রয়োজন। সাথে মানুষের সাথে মিল করার জন্য তাদের গ্রাহক সেবা দরকার।" />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewSlide clientImg="img/client-3.jpg" review="এই ইন্টারনেট প্রদানকারী সর্বদা অত্যন্ত দ্রুত ও সুস্থিতি নিশ্চিত করে। আমি কোনও সমস্যার সাথে সাম্প্রদায়িকভাবে সেটিং বা ব্যবস্থাপনা সম্পর্কে চিন্তা করার প্রয়োজন করেনি।" />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewSlide clientImg="img/client-4.jpg" review="এই সেবা প্রদানকারী একটি অত্যন্ত পেশাদার দৃষ্টিকোণ দিয়। এটি সব সময় অত্যন্ত দ্রুত ইন্টারনেট সংযোগ সরবরাহ করে এবং কোনও সামস্যার জন্য সবসময় প্রস্তুত।" />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewSlide clientImg="img/client-5.jpg" review="আমি এই ইন্টারনেট সেবা প্রদানকারীর সাথে খুব খুশি এবং সন্তুষ্ট। ইন্টারনেট সংযোগ দ্রুত এবং স্থির এবং মাসিক মূল্য সহজবোধ্য।" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Review;
