import "../../styles/naf-section.css";

function NAFSection() {
    return (
        <section id="naf" className="naf-section">
            <div className="container naf-container">
                <div className="naf-header">
                    <span>Ministério NAF</span>

                    <h2>Núcleo de Acompanhamento Familiar</h2>

                    <p>O Ministério NAF é responsável por cuidar, orientar e acompanhar famílias 
                        por meio de ações espirituais, sociais e educativas. Atuamos com amor, 
                        responsabilidade e sensibilidade, oferecendo suporte contínuo às
                        famílias da igreja e da comunidade.
                    </p>
                </div>

                <div className="naf-grid">
                    <article className="naf-card">
                        <h3>Acompanhamento Familiar</h3>

                        <p>
                            Acompanhamento contínuo das famílias, 
                            com escuta, orientação e fortalecimento dos vínculos familiares.
                        </p>
                    </article>

                    <article className="naf-card featured">
                        <h3>Cursos e Capacitação</h3>
                        
                        <p>Cursos voltados para casais, pais, filhos e 
                            desenvolvimento emocional e espiritual.</p>
                    </article>

                    <article className="naf-card">
                        <h3>Assistência Social</h3>

                        <p>Ações de apoio social, auxílio em situações de 
                            vulnerabilidade e encaminhamentos necessários.</p>
                    </article>

                    <article className="naf-card">
                        <h3>Aconselhamento Pastoral</h3>

                        <p>Atendimento pastoral com base bíblica, oferecendo 
                            apoio emocional, espiritual e direcionamento seguro.</p>
                    </article>
                </div>

                <div className="naf-courses">
                    <div className="naf-courses-header">
                        <span>🎓</span>
                        <h3>Cursos Dísponiveis:</h3>
                    </div>

                    <div className="naf-courses-grid">
                        <span>Canto</span>
                        <span>Teclado</span>
                        <span>Bateria</span>
                        <span>Excel</span>
                        <span>Fotorgrafia</span>
                        <span>Educação Financeira</span>
                        <span>Desenvolvimento Pessoal</span>
                        <span>Casais</span>
                    </div>
                </div>

                <div className="naf-footer">
                    <h3> Interessados em participar do NAF?</h3>

                    <p>
                        Entre em contato conosco - todos os serviços são gratuitos.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default NAFSection;