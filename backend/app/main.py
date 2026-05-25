from fastapi import FastAPI

from app.api.routes import health, cultos



app = FastAPI( 
    title="Calebe Church API",
    description="API institucional da Calebe Church",
    version="0.1.0"
)

@app.get("/")
def read_root():
    return {
        "message": "API Calebe Funcionando"

    } 


app.include_router(health.router)
app.include_router(cultos.router)