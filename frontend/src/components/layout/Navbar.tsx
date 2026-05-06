import "../../styles/navbar.css"

function Navbar() {
    return (
        <header>
            <div className="container navbar-container">
                <h2>Calebe Church</h2>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Sobre</a>
                    <a href="#">Cultos</a>
                    <a href="#">Ministérios</a>
                    <a href="#">NAF</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar