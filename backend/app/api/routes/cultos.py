from typing import List

from fastapi import APIRouter

from app.schemas.culto import CultoCreate, CultoResponse
from app.services.culto_service import listar_cultos, criar_culto

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