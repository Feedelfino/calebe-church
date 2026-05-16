import "../../styles/navbar.css"

function Navbar() {
    return (
        <header>
            <div className="container navbar-container">
                <h2>Calebe Church</h2>

                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">Sobre</a>
                    <a href="#services">Programação</a>
                    <a href="#ministries">Ministérios</a>
                    <a href="#naf">NAF</a>
                    <a 
                    href="https://instagram.com/calebechurch"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Contato</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar