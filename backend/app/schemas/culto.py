from pydantic import BaseModel

class CultoCreate(BaseModel):
    nome: str
    horario: str

class CultoResponse(BaseModel):
    id: int
    nome: str
    horario: str