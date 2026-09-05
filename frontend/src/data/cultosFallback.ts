import type { Culto } from "../services/cultosService";

export const cultosFallback: Culto[] = [
  {
    id: 1,
    titulo: "Escola Bíblica",
    dia_semana: "Domingo",
    horario: "09:00",
    descricao: "A Escola Bíblica é um momento de aprendizado e crescimento espiritual, onde exploramos as Escrituras Sagradas e aprofundamos nossa compreensão da fé cristã.",
  },
  {
    id: 2,
    titulo: "Comunhão ao Senhor",
    dia_semana: "Domingo",
    horario: "10:00",
    descricao: "A Comunhão ao Senhor é um momento sagrado em que nos reunimos para celebrar a presença de Deus em nossas vidas, fortalecendo nossa fé e renovando nosso compromisso com Ele.",
  },
  {
    id: 3,
    titulo:"Noite de Conquistas",
    dia_semana: "Quarta-feira",
    horario: "20:00",
    descricao: "A Noite de Conquistas é um encontro especial em que nos reunimos para compartilhar testemunhos de vitórias e bênçãos, encorajando uns aos outros a perseverar na fé e alcançar novos patamares espirituais.",
  },
];