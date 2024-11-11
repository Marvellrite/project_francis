from fastapi import FastAPI
from app.routers import calculation_router

app = FastAPI()

app.include_router(calculation_router.router, prefix='/api')

@app.get('/')
def sey_hello():
    return {'message':'Testing API end route'} 
