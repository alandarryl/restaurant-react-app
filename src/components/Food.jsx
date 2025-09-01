

function Food() {
    return (
        
    <section class="food" id="food">

        <div class="heading">
            <span>popular dishes</span>
            <h3>our delisious food</h3>
        </div>

        <div class="swiper food-slider">

            <div class="swiper-wrapper">

                <div class="swiper-slide slide" data-name="food-1" >
                    {/* <img src="./images/food5.jpg" alt=""> */}
                    <h3>delicious food</h3>
                    <div class="price" >$49.99</div>
                </div>

                <div class="swiper-slide slide" data-name="food-2" >
                    {/* <img src="./images/food6.jpg" alt=""> */}
                    <h3>delicious food</h3>
                    <div class="price" >$49.99</div>
                </div>

                <div class="swiper-slide slide" data-name="food-3" >
                    {/* <img src="./images/food7.jpg" alt=""> */}
                    <h3>delicious food</h3>
                    <div class="price" >$49.99</div>
                </div>

                <div class="swiper-slide slide" data-name="food-4" >
                    {/* <img src="./images/food8.jpg" alt=""> */}
                    <h3>delicious food</h3>
                    <div class="price" >$49.99</div>
                </div>

                <div class="swiper-slide slide" data-name="food-5" >
                    {/* <img src="./images/food9.jpg" alt=""> */}
                    <h3>delicious food</h3>
                    <div class="price" >$49.99</div>
                </div>

            </div>

            <div class="swiper-pagination" ></div>

        </div>

    </section>

    )
}


export default Food;