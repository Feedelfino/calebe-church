import { useEffect, useState } from "react";
import "../../styles/services-section.css";

import { buscarCultos } from "../../services/cultosService";
import type { Culto } from "../../services/cultosService";

function ServicesSection() {
  const [cultos, setCultos] = useState<Culto[]>([]);

  useEffect(() => {
    async function carregarCultos() {
      try {
        const dados = await buscarCultos();

        console.log("Cultos recebidos da API:", dados);

        setCultos(dados);
      } catch (error) {
        console.error("Erro ao carregar cultos:", error);
      }
    }

    carregarCultos();
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="container services-container">
        <h2>Horários dos cultos</h2>

        <div className="services-grid">
          {cultos.map((culto) => (
            <article className="service-card" key={culto.id}>
              <span>
                {culto.dia_semana} - {culto.horario}
              </span>

              <h3>{culto.titulo}</h3>

              <p>{culto.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;