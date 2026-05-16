import "../../styles/social-media-section.css"

function SocialMediaSection() {
    return (
        <section id="midias" className="social-media-section">
            <div className="container social-media-container">
                <div className="social-media-header">
                    <span>CONECTE-SE</span>

                    <h2>
                        Siga nas <strong>Redes Sociais</strong>
                    </h2>

                    <p>
                        Fique por dentro de tudo que acontece na Calebe Church.
                        Siga-nos e faça parte da nossa comunidade online!
                    </p>
                </div>
                <div className="social-media-grid">
                    <article className="social-card">
                        <div className="social-icon">
                             <img
                             src="/icons/youtube-icon.png"
                             alt="Youtube"
                             />
                        </div>

                        <div className="social-content">
                            <h3>Youtube</h3>

                            <a

                            href="https://youtube.com/@calebechurch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"

                            >
                            @calebechurch
                            </a>

                        
                            <p>
                                Assista nossos cultos e mensagens.
                            </p>
                        </div>
                    </article>

                    <article className="social-card">
                        <div className="social-icon">
                            <img
                            src="/icons/instagram-icon.png"
                            />
                        </div>

                        <div className="social-content">
                            <h3>Instagram</h3>

                            <a 
                            href="https://instagram.com/calebechurch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            >
                                @calebechurch
                            </a>

                            <p>
                                Siga nossa página e veja as últimas fotos e vídeos.
                            </p>
                        </div>
                    </article>
                </div>

                <div className="social-media-footer">
                    <h3>Esperamos você!</h3>

                    <p>
                        Venha nos visitar e fazer parte dessa família ✨
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SocialMediaSection