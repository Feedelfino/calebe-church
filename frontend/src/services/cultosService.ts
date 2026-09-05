export type Culto = {
    id: number;
    titulo: string;
    dia_semana: string;
    horario: string;
    descricao: string;
};

export async function buscarCultos(): Promise<Culto[]> {
    const response = await fetch("http://127.0.0.1:800/cultos/");

    if (!response.ok) {
        throw new Error("Erro ao buscar cultos");
    }

    const data: Culto[] = await response.json();

    return data;
}