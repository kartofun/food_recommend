from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from services.parser import Parser

app = FastAPI()

app.mount("/", StaticFiles(directory="static/html", html=True), name="main_page")


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/recipes")
async def recipe():
    recipe_links = Parser.parse_recipe_links("https://www.allrecipes.com/recipes/75/main-dish/")
    return {"message": str(recipe_links[0])}
