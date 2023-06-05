import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import img6 from "../../../assets/home/slide3.jpg";

const SideDishes = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper my-20 my_container"
    >
      <SwiperSlide>
        {" "}
        <img src={img1} alt="" />{" "}
        <h2 className=" uppercase -mt-20 text-[#FFFFFF] text-center text-3xl font-[Cinzel]">
          Salads
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={img2} alt="" />{" "}
        <h2 className=" uppercase -mt-20 text-[#FFFFFF] text-center text-3xl font-[Cinzel]">
          pizzas
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={img3} alt="" />{" "}
        <h2 className=" uppercase -mt-20 text-[#FFFFFF] text-center text-3xl font-[Cinzel]">
          Soups
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={img4} alt="" />{" "}
        <h2 className=" uppercase -mt-20 text-[#FFFFFF] text-center text-3xl font-[Cinzel]">
          desserts
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={img5} alt="" />{" "}
        <h2 className=" uppercase -mt-20 text-[#FFFFFF] text-center text-3xl font-[Cinzel]">
          Salads
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={img6} alt="" />{" "}
        <h2 className=" uppercase -mt-20 text-[#FFFFFF] text-center text-3xl font-[Cinzel]">
          Soups
        </h2>
      </SwiperSlide>
    </Swiper>
  );
};

export default SideDishes;
