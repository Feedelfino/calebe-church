from fastapi import FastAPI

from app.api.routes import health, cultos

from fastapi.middleware.cors import CORSMiddleware



app = FastAPI( 
    title="Calebe Church API",
    description="API institucional da Calebe Church",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",

    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "message": "API Calebe Funcionando"

    } 


app.include_router(health.router)
app.include_router(cultos.router)