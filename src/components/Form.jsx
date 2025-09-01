


function Form(){
    return (
            <section className="order" id="order">


        <div className="heading">
            <span>order now</span>
            <h3>fast home delivery</h3>
        </div>

        <form action="">
            <div className="box-container">
                <div className="box">

                    <div className="inputBox">
                        <span>full name </span>
                        <input type="text" placeholder="enter your name" required />
                    </div>

                    <div className="inputBox">
                        <span>food name </span>
                        <input type="text" placeholder="food you want to order" required />
                    </div>

                    <div className="inputBox">
                        <span>order details </span>
                        <input type="text" placeholder="specific with food instructions" required />
                    </div>

                    <div className="inputBox">
                        <span>your address </span>
                        <textarea name="" placeholder="enter your address" id="" cols="30" rows="10" required></textarea>
                    </div>

                </div>


                <div className="box">

                    <div className="inputBox">
                        <span>number </span>
                        <input type="number" placeholder="enter your number" required />
                    </div>

                    <div className="inputBox">
                        <span>how much food </span>
                        <input type="number" placeholder="how many food you want to order" required />
                    </div>

                    <div className="inputBox">
                        <span>when you want it </span>
                        <input type="datetime-local" placeholder="when you want it" required />
                    </div>

                    <div className="inputBox">
                        <span>our adresss </span>
                        <iframe className="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10487.580654062192!2d2.3728313697753873!3d48.917389599999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d6e7f1ea331%3A0xba7239c22c0066f4!2sRanch%20Burger!5e0!3m2!1sfr!2sfr!4v1750257753779!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>

            </div>

            <input type="submit" value="order now" className="btn" />

        </form>

    </section>
    )
}


export default Form;