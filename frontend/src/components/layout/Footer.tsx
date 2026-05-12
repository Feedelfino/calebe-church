import "../../styles/footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h2>Calebe Church</h2>

                    <p>Perserverar em Seguir ao Senhor.</p>
                </div>

                <div className="footer-links">
                    <h3>Navegação</h3>

                    <a href="#">Início</a>
                    <a href="#">Sobre</a>
                    <a href="#">Serviços</a>
                    <a href="#">Ministérios</a>
                </div>

                <div className="footer-contact">
                    <h3>Contato</h3>

                    <p>Barueri - SP</p>

                    <p>Instagram: @calebechurch</p>

                    <p>Youtube: Calebe Church</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer