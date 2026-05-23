from fastapi import FastAPI

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
@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "message": "Backend ativo"
    }