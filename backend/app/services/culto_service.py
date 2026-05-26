from app.database.database import get_connection

def listar_cultos():
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
                   SELECT id, nome, horario
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
            INSERT INTO cultos (nome, horario)
            VALUES(?, ?)
        """,(culto.nome, culto.horario))

    connection.commit()

    novo_id = cursor.lastrowid

    connection.close()

    return {
            "id": novo_id,
            "nome": culto.nome,
            "horario": culto.horario
    }

