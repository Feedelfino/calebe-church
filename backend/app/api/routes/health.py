from fastapi import APIRouter

router = APIRouter(
    prefix="/health",
    tags=["health"]
)


@router.get("/")
def helth_check():
    return {
        "status": "ok",
        "message": "Backend Ativo"
    }