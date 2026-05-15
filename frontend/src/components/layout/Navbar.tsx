import "../../styles/navbar.css"

function Navbar() {
    return (
        <header>
            <div className="container navbar-container">
                <h2>Calebe Church</h2>

                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">Sobre</a>
                    <a href="#services">Cultos</a>
                    <a href="#ministries">Ministérios</a>
                    <a href="#naf">NAF</a>
                    <a href="#contact">Contato</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar