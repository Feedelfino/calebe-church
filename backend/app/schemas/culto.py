from pydantic import BaseModel


class CultoCreate(BaseModel):
    titulo: str
    dia_semana: str
    horario: str
    descricao: str

class CultoResponse(BaseModel):
    id: int
    titulo: str
    dia_semana: str
    horario: str
    descricao: str
   