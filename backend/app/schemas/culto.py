from pydantic import BaseModel

class CultoResponse(BaseModel):
    id: int
    nome: str
    horario: str