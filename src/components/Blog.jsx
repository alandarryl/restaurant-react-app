import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import food13 from "../assets/food13.jpg";
import food14 from "../assets/food14.jpg";
import food15 from "../assets/food15.jpg";
import food16 from "../assets/food16.jpg";
import food17 from "../assets/food17.jpg";
import food19 from "../assets/food19.jpg";
import food20 from "../assets/food20.jpg";

function Blog() {
  const blogs = [
    { img: food13, title: "croissant" },
    { img: food14, title: "burger" },
    { img: food15, title: "noodle" },
    { img: food16, title: "chicken" },
    { img: food17, title: "fried saumon" },
    { img: food19, title: "burger" },
    { img: food20, title: "fried" },
  ];

  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <span>our blogs</span>
        <h3>our latest posts</h3>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 }, // 📱 phones
          640: { slidesPerView: 2 }, // tablets
          1024: { slidesPerView: 3 }, // desktop
        }}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <div className="image">
                <img src={blog.img} alt={blog.title} />
                <span>{blog.title}</span>
              </div>
              <div className="content">
                <div className="icon">
                  <a href="#">
                    <i className="fas fa-calendar"></i>21st may, 2022
                  </a>
                  <a href="#">
                    <i className="fas fa-user"></i>by admin
                  </a>
                </div>
                <a href="#" className="title">
                  blog title goes here
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, ipsam?
                </p>
                <a href="#" className="btn">
                  read more
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Blog;
