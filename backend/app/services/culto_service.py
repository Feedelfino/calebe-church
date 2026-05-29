from app.database.database import get_connection

def listar_cultos():
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
                   SELECT id, titulo, dia_semana, horario, descricao
                   FROM cultos
                   ORDER BY id
    """)

    cultos = cursor.fetchall()

    connection.close()

    return [dict(culto) for culto in cultos]

def criar_culto(culto):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
        INSERT INTO cultos (titulo, dia_semana, horario, descricao)
        VALUES (?, ?, ?, ?)
    """, (
        culto.titulo,
        culto.dia_semana,
        culto.horario,
        culto.descricao
    ))

    connection.commit()

    novo_id = cursor.lastrowid

    connection.close()

    return {
        "id": novo_id,
        "titulo": culto.titulo,
        "dia_semana": culto.dia_semana,
        "horario": culto.horario,
        "descricao": culto.descricao
    }