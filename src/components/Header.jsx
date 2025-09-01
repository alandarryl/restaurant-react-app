


function Header() {
    return (
            <section className="header">

        <a href="#" className="logo">
            <i className="fas fa-utensils"></i> Food 
        </a>

        <nav className="navbar">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#food">food</a>
            <a href="#gallery">gallery</a>
            <a href="#menu">menu</a>
            <a href="#order">order</a>
            <a href="#blogs">blog</a>
        </nav>

        <div id="menu-btn" className="fas fa-bars" ></div>

    </section>
    )
}

export default Header