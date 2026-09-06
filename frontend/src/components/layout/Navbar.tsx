import { useState } from "react"
import "../../styles/navbar.css"

function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    function fecharMenu() {
        setMenuAberto(false);
    }

    return (
        <header className="navbar">
            <div className="container navbar-container">
                <h2 className="navbar-logo">Calebe Church</h2>

                <button
                    className="navbar-toggle"
                    type="button"
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    {menuAberto ? "✕" : "☰"}
                </button>

                <nav
                    className={`navbar-menu ${
                        menuAberto ? "navbar-menu-open" : ""
                    }`}
                >
                    <a href="#home" onClick={fecharMenu}>Home</a>
                    <a href="#sobre" onClick={fecharMenu}>Sobre</a>
                    <a href="#services" onClick={fecharMenu}>Programação</a>
                    <a href="#ministries" onClick={fecharMenu}>Ministérios</a>
                    <a href="#naf" onClick={fecharMenu}>NAF</a>

                    <a
                        href="https://instagram.com/calebechurch"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={fecharMenu}
                    >
                        Contato
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;