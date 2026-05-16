import "../../styles/location-section.css"

function LocationSection() {
  return (
    <section id="localizacao" className="location-section">
      <div className="container location-container">
        <div className="location-header">
          <span>Venha nos visitar</span>

          <h2>
            Nossa <strong>Localização</strong>
          </h2>
        </div>

        <div className="location-content">
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3659.0541442542726!2d-46.8872031!3d-23.4945592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03006dd4de73%3A0xd6a01e6f6dc55a71!2sCalebe%20Church!5e0!3m2!1spt-BR!2sbr!4v1778883412672!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="location-card">
            <h3>Calebe Church</h3>

            <p className="location-subtitle">
              Perseverar em seguir ao Senhor
            </p>

            <div className="location-info">
              <h4>Endereço</h4>
              <p>Avenida Etiópia, 443</p>
              <p>Vila Morellato - Barueri/SP</p>
            </div>

            <div className="location-info">
              <h4>Horários</h4>
              <p>Domingo: 08:00 - Escola Bíblica</p>
              <p>Domingo: 10:00 - Comunhão ao Senhor</p>
              <p>Quarta: 20:00 - Noite de Conquista</p>
            </div>

            <a
              href="https://maps.app.goo.gl/WtCNQ3Byty96DadQA"
              target="_blank"
              rel="noopener noreferrer"
              className="location-button"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection