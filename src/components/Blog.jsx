
import food13 from '../assets/food13.jpg';
import food14 from '../assets/food14.jpg';
import food15 from '../assets/food15.jpg';
import food16 from '../assets/food16.jpg';
import food17 from '../assets/food17.jpg';
import food19 from '../assets/food19.jpg';
import food20 from '../assets/food20.jpg';

function Blog(){
    return (
    <section class="blogs" id="blogs">

        <div class="heading">
            <span>our blogs</span>
            <h3>our latest pots</h3>
        </div>

        <div class="swiper blogs-slider">

            <div class="swiper-wrapper">

                <div class="swiper-slide slide">
                    <div class="image">
                        <img src={food13} alt="" />
                        <span>croissant</span>
                    </div>
                    <div class="content">
                        <div class="icon">
                            <a href="#"><i class="fas fa-calendar" ></i>21st may, 2022</a>
                            <a href="#"><i class="fas fa-user" ></i>by admin</a>
                        </div>
                        <a href="#" class="title">blog title goes here</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                </div>


                <div class="swiper-slide slide">
                    <div class="image">
                        <img src={food14} alt="" />
                        <span>burger</span>
                    </div>
                    <div class="content">
                        <div class="icon">
                            <a href="#"><i class="fas fa-calendar" ></i>21st may, 2022</a>
                            <a href="#"><i class="fas fa-user" ></i>by admin</a>
                        </div>
                        <a href="#" class="title">blog title goes here</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                </div>


                <div class="swiper-slide slide">
                    <div class="image">
                        <img src={food15} alt="" />
                        <span>noodle</span>
                    </div>
                    <div class="content">
                        <div class="icon">
                            <a href="#"><i class="fas fa-calendar" ></i>21st may, 2022</a>
                            <a href="#"><i class="fas fa-user" ></i>by admin</a>
                        </div>
                        <a href="#" class="title">blog title goes here</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                </div>


                <div class="swiper-slide slide">
                    <div class="image">
                        <img src={food16} alt="" />
                        <span>chicken</span>
                    </div>
                    <div class="content">
                        <div class="icon">
                            <a href="#"><i class="fas fa-calendar" ></i>21st may, 2022</a>
                            <a href="#"><i class="fas fa-user" ></i>by admin</a>
                        </div>
                        <a href="#" class="title">blog title goes here</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                </div>


                <div class="swiper-slide slide">
                    <div class="image">
                        <img src={food17} alt="" />
                        <span>fried saumon</span>
                    </div>
                    <div class="content">
                        <div class="icon">
                            <a href="#"><i class="fas fa-calendar" ></i>21st may, 2022</a>
                            <a href="#"><i class="fas fa-user" ></i>by admin</a>
                        </div>
                        <a href="#" class="title">blog title goes here</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                </div>


                <div class="swiper-slide slide">
                    <div class="image">
                        <img src={food19} alt="" />
                        <span>burger</span>
                    </div>
                    <div class="content">
                        <div class="icon">
                            <a href="#"><i class="fas fa-calendar" ></i>21st may, 2022</a>
                            <a href="#"><i class="fas fa-user" ></i>by admin</a>
                        </div>
                        <a href="#" class="title">blog title goes here</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                </div>

                <div class="swiper-slide slide">
                    <div class="image">
                        <img src={food20} alt="" />
                        <span>fried</span>
                    </div>
                    <div class="content">
                        <div class="icon">
                            <a href="#"><i class="fas fa-calendar" ></i>21st may, 2022</a>
                            <a href="#"><i class="fas fa-user" ></i>by admin</a>
                        </div>
                        <a href="#" class="title">blog title goes here</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam?</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                </div>



            </div>

            <div class="swiper-pagination"></div>


        </div>


    </section>
    )
}


export default Blog;