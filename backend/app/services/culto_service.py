from app.database.database import get_connection
from fastapi import HTTPException

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

    culto_id = cursor.lastrowid

    connection.close()

    return {
        "id": culto_id,
        "titulo": culto.titulo,
        "dia_semana": culto.dia_semana,
        "horario": culto.horario,
        "descricao": culto.descricao
    }

def atualizar_culto(culto_id, culto):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
                   UPDATE cultos
                   Set titulo = ?, dia_semana = ?, horario = ?, descricao = ?
                   WHERE id = ?
    """, (
        culto.titulo,
        culto.dia_semana,
        culto.horario,
        culto.descricao,
        culto_id
    ))

    if cursor.rowcount == 0:
         connection.close()
         raise HTTPException(status_code=404, detail="Culto não encontrado")
    
    connection.commit()
    connection.close()

    return {
             "id":culto_id,
             "titulo": culto.titulo,
                "dia_semana": culto.dia_semana,
                "horario": culto.horario,
                "descricao": culto.descricao
        }

def deletar_culto(culto_id):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
                       DELETE FROM cultos
                       WHERE id = ?
    """, (
        culto_id,
    ))

    if cursor.rowcount == 0:
        
        connection.close()

        raise HTTPException(status_code=404, detail="Culto não encontrado")

    connection.commit()
    
    

    return {
        "message": "Culto deletado com sucesso"
    }