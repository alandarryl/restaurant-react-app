
import food13 from '../assets/food13.jpg';
import food14 from '../assets/food14.jpg';
import food15 from '../assets/food15.jpg';
import food16 from '../assets/food16.jpg';
import food17 from '../assets/food17.jpg';
import food19 from '../assets/food19.jpg';
import food20 from '../assets/food20.jpg';

// import swiper 

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Blog(){
    return (
    <section class="blogs" id="blogs">

        <div class="heading">
            <span>our blogs</span>
            <h3>our latest pots</h3>
        </div>

        <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
    >
        <SwiperSlide>
        <div className="slide">
            <div className="image">
            <img src={food13} alt="croissant" />
            <span>croissant</span>
            </div>
            <div className="content">
            <div className="icon">
                <a href="#"><i className="fas fa-calendar"></i>21st May, 2022</a>
                <a href="#"><i className="fas fa-user"></i>by admin</a>
            </div>
            <a href="#" className="title">blog title goes here</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
            <a href="#" className="btn">read more</a>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="slide">
            <div className="image">
            <img src={food14} alt="croissant" />
            <span>croissant</span>
            </div>
            <div className="content">
            <div className="icon">
                <a href="#"><i className="fas fa-calendar"></i>21st May, 2022</a>
                <a href="#"><i className="fas fa-user"></i>by admin</a>
            </div>
            <a href="#" className="title">blog title goes here</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
            <a href="#" className="btn">read more</a>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="slide">
            <div className="image">
            <img src={food15} alt="croissant" />
            <span>croissant</span>
            </div>
            <div className="content">
            <div className="icon">
                <a href="#"><i className="fas fa-calendar"></i>21st May, 2022</a>
                <a href="#"><i className="fas fa-user"></i>by admin</a>
            </div>
            <a href="#" className="title">blog title goes here</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
            <a href="#" className="btn">read more</a>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="slide">
            <div className="image">
            <img src={food16} alt="croissant" />
            <span>croissant</span>
            </div>
            <div className="content">
            <div className="icon">
                <a href="#"><i className="fas fa-calendar"></i>21st May, 2022</a>
                <a href="#"><i className="fas fa-user"></i>by admin</a>
            </div>
            <a href="#" className="title">blog title goes here</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
            <a href="#" className="btn">read more</a>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="slide">
            <div className="image">
            <img src={food17} alt="croissant" />
            <span>croissant</span>
            </div>
            <div className="content">
            <div className="icon">
                <a href="#"><i className="fas fa-calendar"></i>21st May, 2022</a>
                <a href="#"><i className="fas fa-user"></i>by admin</a>
            </div>
            <a href="#" className="title">blog title goes here</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
            <a href="#" className="btn">read more</a>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="slide">
            <div className="image">
            <img src={food19} alt="croissant" />
            <span>croissant</span>
            </div>
            <div className="content">
            <div className="icon">
                <a href="#"><i className="fas fa-calendar"></i>21st May, 2022</a>
                <a href="#"><i className="fas fa-user"></i>by admin</a>
            </div>
            <a href="#" className="title">blog title goes here</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
            <a href="#" className="btn">read more</a>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="slide">
            <div className="image">
            <img src={food20} alt="croissant" />
            <span>croissant</span>
            </div>
            <div className="content">
            <div className="icon">
                <a href="#"><i className="fas fa-calendar"></i>21st May, 2022</a>
                <a href="#"><i className="fas fa-user"></i>by admin</a>
            </div>
            <a href="#" className="title">blog title goes here</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
            <a href="#" className="btn">read more</a>
            </div>
        </div>
        </SwiperSlide>

        {/* Repeat for other blog slides */}
        <SwiperSlide> {/* second blog */} </SwiperSlide>
        <SwiperSlide> {/* third blog */} </SwiperSlide>
        {/* ... */}
    </Swiper>


    </section>
    )
}


export default Blog;