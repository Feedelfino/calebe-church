from typing import List

from fastapi import APIRouter

from app.schemas.culto import CultoResponse
from app.services.culto_service import listar_cultos

router = APIRouter(
    prefix="/cultos",
    tags=["Cultos"]
    )

@router.get("/", response_model=List[CultoResponse])
def get_cultos():
    return listar_cultos()