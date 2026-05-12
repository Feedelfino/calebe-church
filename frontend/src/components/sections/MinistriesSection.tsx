import "../../styles/ministries-section.css"

function MinistriesSection() {
    return (
        <section className="ministries-section">
            <div className="container ministries-container">
                <h2>Ministérios</h2>

                <div className="ministries-grid">
                    <article className="ministry-card">
                        <h3>Louvor</h3>

                        <p>Ministério dedicado à adoração, música e conduçãi espiritual 
                            dos cultos.</p>
                    </article>

                    <article className="ministry-card">
                        <h3>Jovens</h3>

                        <p>Ministério dedicado ao desenvolvimento espiritual e social dos jovens.</p>
                    </article>

                    <article className="ministry-card">
                        <h3>Infantil</h3>

                        <p>Ministério dedicado ao desenvolvimento espiritual e social das crianças.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default MinistriesSection