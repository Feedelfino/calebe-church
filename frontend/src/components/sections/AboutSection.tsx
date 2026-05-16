import "../../styles/about-section.css"

function AboutSection() {
  return (
    <section id="sobre" className="about-section">
      <div className="container about-container">
        <div className="about-content">
          <span>Nossa História</span>

          <h2>
            Sobre a <strong>Calebe Church</strong>
          </h2>

          <p>
            A Calebe Church é uma igreja evangélica localizada em Barueri,
            comprometida em perseverar em seguir ao Senhor. Somos uma
            comunidade de fé que busca adorar a Deus, servir ao próximo e
            transformar vidas através do amor de Cristo.
          </p>

          <p>
            Nossa missão é ser uma igreja relevante, que impacta famílias e a
            comunidade local através do ensino da Palavra de Deus, da comunhão
            entre os irmãos e do serviço ao próximo.
          </p>

          <blockquote>
            “Assim como Calebe perseverou em seguir ao Senhor, nós também
            perseveramos em nossa fé e chamado.”
            <cite>— Josué 14:8-14</cite>
          </blockquote>
        </div>

        <div className="about-values">
          <article className="about-value-card">
            <span>♡</span>
            <h3>Amor</h3>
            <p>Amar a Deus e ao próximo é nosso maior mandamento.</p>
          </article>

          <article className="about-value-card">
            <span>👥</span>
            <h3>Comunhão</h3>
            <p>Somos uma família unida pela fé em Cristo.</p>
          </article>

          <article className="about-value-card">
            <span>📖</span>
            <h3>Palavra</h3>
            <p>A Bíblia é nossa fonte de verdade e direção.</p>
          </article>

          <article className="about-value-card">
            <span>☆</span>
            <h3>Perseverança</h3>
            <p>Seguir ao Senhor em todos os momentos da vida.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutSection