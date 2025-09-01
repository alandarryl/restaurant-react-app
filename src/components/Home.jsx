




function Home() {
    return (

    <section className="home" id="home" >


        <div className=" swiper home-slider">

            <div className="swiper-wrapper">

                <div className="swiper-slide slide" style="background: url(./images/food1.jpg) no-repeat ;" >
                    <div className="content">
                        <span>outstanding food</span>
                        <h3>delicious cooking</h3>
                        <a href="#" className="btn">get started</a>
                    </div>
                </div>

                <div className="swiper-slide slide" style="background: url(./images/food2.jpg) no-repeat ;" >
                    <div className="content">
                        <span>outstanding food</span>
                        <h3>morning moment</h3>
                        <a href="#" className="btn">get started</a>
                    </div>
                </div>

                <div className="swiper-slide slide" style="background: url(./images/food3.jpg) no-repeat ;" >
                    <div className="content">
                        <span>outstanding food</span>
                        <h3>authentic chicken</h3>
                        <a href="#" className="btn">get started</a>
                    </div>
                </div>

            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>

            {/* <!-- swiper-pagination --> */}
            <div className="swiper-pagination">
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>

        </div>

    </section>
    )
}

export default Home