import "../../styles/footer.css"
import logoCalebe from "../../assets/logo-calebe.png"

function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src={logoCalebe} alt="Logo Calebe Church" />

              <div>
                <h2>Calebe Church</h2>
                <span>Igreja Evangélica</span>
              </div>
            </div>

            <p>
              Perseverar em seguir ao Senhor. Uma igreja comprometida em adorar
              a Deus, servir ao próximo e transformar vidas.
            </p>

            <div className="footer-social">
              <a href="https://youtube.com/@calebechurch" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>

              <a href="https://instagram.com/calebechurch" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Navegação</h3>

            <a href="#cultos">Horários</a>
            <a href="#sobre">Sobre</a>
            <a href="#ministerios">Ministérios</a>
            <a href="#naf">NAF</a>
            <a href="#localizacao">Localização</a>
          </div>

          <div className="footer-column footer-location">
            <h3>Localização</h3>

            <p>Avenida Etiópia, 443</p>
            <p>Vila Morellato</p>
            <p>Barueri - SP</p>

            <div className="footer-service-box">
              <span>Programação:</span>
              <strong>Domingo 10h • Quarta 20h</strong>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Calebe Church. Todos os direitos reservados.</p>

          <p>Feito com ♡ para a glória de Deus</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer