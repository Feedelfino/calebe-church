from app.database.database import get_connection
def init_db():
    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute("""
                   CREATE TABLE IF NOT EXISTS cultos (
                   id INTEGER PRIMARY KEY AUTOINCREMENT,
                   nome TEXT NOT NULL,
                   horario TEXT NOT NULL
                   )
            """)

    cursor.execute("""
                  INSERT INTO cultos(nome,horario)
                  SELECT 'Cultos de Domingo', '10:00'
                  WHERE NOT EXISTS (
                      SELECT 1 FROM cultos WHERE nome = 'Cultos de Domingo'
                  )
        """)

    cursor.execute("""
                   INSERT INTO cultos (nome,horario)
                   SELECT 'Culto de Quarta', '20:00'
                   WHERE NOT EXISTS (
                       SELECT 1 FROM cultos WHERE nome = 'Culto de Quarta'
                   )
        """)
    
    connection.commit()
    connection.close()

    print("Banco de dados inicializado com sucesso!")

if __name__ == "__main__":
    init_db()