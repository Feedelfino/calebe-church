import "../../styles/services-section.css"

function ServicesSection() {
    return(
        <section className="services-section">
            <div className="container services-container">
                <h2>Horários dos cultos</h2>

                <div className="services-grid">
                    <article className="service-card">
                        <span> Domingo - 10h</span>
                        <h3>Comunhão ao Senhor</h3>
                        <p>Um tempo de adoração, Palavra e comunhão para toda a família.

                        </p>
                    </article>

                    <article className="service-card">
                    <span>Quarta-feira - 20h</span>
                    <h3>Noite de Conquista</h3>
                    <p>
                        Um tempo dedicado á busca pela presença de Deus, fortalecimento da
                        fé e renovação espiritual.
                    </p>
                    </article>
                </div>
            </div>
        </section>  
    )

}

export default ServicesSection;