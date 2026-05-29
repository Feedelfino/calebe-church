from app.database.database import get_connection


def init_db():
    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS cultos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            dia_semana TEXT NOT NULL,
            horario TEXT NOT NULL,
            descricao TEXT NOT NULL
        )
    """)

    cursor.execute("""
        INSERT INTO cultos (titulo, dia_semana, horario, descricao)
        SELECT
            'Escola Bíblica',
            'Domingo',
            '08:00',
            'Encontre sabedoria e mude sua vida. Comece seu estudo bíblico.'
        WHERE NOT EXISTS (
            SELECT 1 FROM cultos WHERE titulo = 'Escola Bíblica'
        )
    """)

    cursor.execute("""
        INSERT INTO cultos (titulo, dia_semana, horario, descricao)
        SELECT
            'Comunhão ao Senhor',
            'Domingo',
            '10:00',
            'Um tempo de adoração, Palavra e comunhão para toda a família.'
        WHERE NOT EXISTS (
            SELECT 1 FROM cultos WHERE titulo = 'Comunhão ao Senhor'
        )
    """)

    cursor.execute("""
        INSERT INTO cultos (titulo, dia_semana, horario, descricao)
        SELECT
            'Noite de Conquista',
            'Quarta-feira',
            '20:00',
            'Uma noite de fé, oração e direção pela Palavra.'
        WHERE NOT EXISTS (
            SELECT 1 FROM cultos WHERE titulo = 'Noite de Conquista'
        )
    """)

    connection.commit()
    connection.close()

    print("Banco de dados inicializado com sucesso!")


if __name__ == "__main__":
    init_db()