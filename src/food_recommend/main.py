from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/", StaticFiles(directory="static/html", html=True), name="main_page")

@app.get("/")
async def root():
    return {"message": "Hello World"}
