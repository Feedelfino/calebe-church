import logoCalebe from "../../assets/logo-calebe.png"
import "../../styles/hero-section.css"

function HeroSection() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <img
                src={logoCalebe}
                alt="Logo Calebe Church"
                className="hero-logo"
                />
                

                <p>Perseverar em seguir ao Senhor</p>

                <a href="#localizacao" className="hero-button">
                    Venha nos Visitar
                </a>
            </div>
        </section>
    )
}

export default HeroSection