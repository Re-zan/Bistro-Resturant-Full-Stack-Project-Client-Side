import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useState } from "react";
import { useEffect } from "react";
import TestimonialData from "./TestimonialData";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviwes")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my_container"
      >
        {testimonial.map((data) => (
          <>
            <SwiperSlide>
              <TestimonialData key={data._id} testData={data}></TestimonialData>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
