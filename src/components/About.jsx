import foodImage from '../assets/food4.jpg';
import icon1 from '../assets/icon1.jpg';
import icon3 from '../assets/icon3.jpg';
import icon6 from '../assets/icon6.jpg';

function About() {
    return (
    <section className="about" id="about">
    <div className="image">
        <img src={foodImage} alt="food" />
    </div>

    <div className="content">
        <h3 className="title">welcome to our restaurant</h3>
        <p>
        welcome to our restaurant, you can find delicious food in your tastes
        with amazing presentation and quality...
        </p>
        <a href="#" className="btn">read more</a>
        <div className="icons-container">
        <div className="icons">
            <img src={icon1} alt="fresh food" />
            <h3>fresh food</h3>
        </div>
        <div className="icons">
            <img src={icon3} alt="quality food" />
            <h3>quality food</h3>
        </div>
        <div className="icons">
            <img src={icon6} alt="food & drink" />
            <h3>food & drink</h3>
        </div>
        </div>
    </div>
    </section>
);
}

export default About;
