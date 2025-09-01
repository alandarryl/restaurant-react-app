

function Footer(){
    return(
            <section className="footer">

        <div className="icons-container">

            <div className="icons">
                <i className="fas fa-clock"></i>
                <h3>opening hours</h3>
                <p>07:00am to 10:00pm</p>
            </div>

            <div className="icons">
                <i className="fas fa-phone"></i>
                <h3>phone</h3>
                <p>+33 059 48 60872</p>
                <p>+33 059 48 60872</p>
            </div>

            <div className="icons">
                <i className="fas fa-envelope"></i>
                <h3>email</h3>
                <p>alanservices@gmail.com</p>
                <p>restaurantservices@gmail.com</p>
            </div>

            <div className="icons">
                <i className="fas fa-map"></i>
                <h3>adress</h3>
                <p>paris, france - 93300</p>
            </div>

        </div>

        <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
        </div>

        <div className="credit"> created by <span>mr okana jonathan</span> | all rights reserved! </div>


    </section>
    )
}



export default Footer;