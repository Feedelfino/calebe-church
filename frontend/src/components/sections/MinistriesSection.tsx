import "../../styles/ministries-section.css"

function MinistriesSection() {
    return (
        <section id="ministries" className="ministries-section">
            <div className="container ministries-container">
                <h2>Ministérios</h2>

                <div className="ministries-grid">
                    <article className="ministry-card">
                        <h3>Calebe Worship</h3>

                        <p>Ministério de louvor e adoração,
                             conduzindo a igreja à presença de Deus
                              através da música e arte.</p>
                    </article>

                    <article className="ministry-card">
                        <h3>Teleios</h3>

                        <p>Ministério de jovens focado no discipulado,
                             crescimento espiritual e comunhão entre a
                              juventude da igreja.</p>
                    </article>

                    <article className="ministry-card">
                        <h3>Calebinhos</h3>

                        <p>Ministério Infantil dedicado ao cuidado e à
                             formação espiritual das crianças, ensinando
                              princípios bíblicos de forma criativa, lúdica
                               e fundamentada na Palavra de Deus.</p>
                    </article>

                    <article className="ministry-card">
                        <h3>Mulheres Determindas</h3>
                       
                        <p>Ministério dedicado ao fortalecimento e 
                            edificação das mulheres através da Palavra
                             de Deus, comunhão e apoio mútuo.
                             </p>
                    </article>

                    <article className="ministry-card">
                        <h3>Homens Calebe</h3>
                        
                        <p>Tem como propósito formar homens firmes
                             na fé, comprometidos com Deus, com a 
                             família e com o Reino, desenvolvendo caráter cristão, liderança espiritual 
                             e comunhão.</p>
                    </article>

                    <article className="ministry-card">
                        <h3>Intercessão</h3>
                        
                        <p>Ministério de Oração Intercessora,
                             levantando um clamor constante diante
                              do trono de Deus pelas necessidades da igreja,
                               das famílias e das nações, crendo que a 
                               oração move o céu e transforma realidades.

                        </p>
                    </article>

                    <article className="ministry-card">
                        <h3>Calebe Dance</h3>

                        <p>Ministério de dança que expressa adoração 
                            por meio do corpo, da arte e da excelência, 
                            levando a mensagem do evangelho através 
                            do movimento e da sensibilidade espiritual.</p>
                    </article>

                    <article className="ministry-card">
                        <h3>Calebe School</h3>

                        <p>Ministério de Ensino responsável pelo 
                            ensino sistemático da Palavra de Deus, 
                            promovendo crescimento espiritual, 
                            maturidade cristã e fundamentação bíblica 
                            para todas as idades.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default MinistriesSection