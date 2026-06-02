from typing import List

from fastapi import APIRouter

from app.schemas.culto import CultoCreate, CultoResponse
from app.services.culto_service import listar_cultos, criar_culto, atualizar_culto, deletar_culto


router = APIRouter(
    prefix="/cultos",
    tags=["Cultos"]
    )

@router.get("/", response_model=List[CultoResponse])
def get_cultos():
    return listar_cultos()

@router.post("/", response_model=CultoResponse)
def create_culto(culto: CultoCreate):
    return criar_culto(culto)

@router.put("/{culto_id}", response_model=CultoResponse)
def update_culto(culto_id: int, culto: CultoCreate):
    return atualizar_culto(culto_id, culto)

@router.delete("/{culto_id}", response_model=CultoResponse)
def delete_culto(culto_id: int):
    return deletar_culto(culto_id)