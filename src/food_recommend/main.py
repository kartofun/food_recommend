import uvicorn
from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from services.parser import ParserSelenium

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
async def root():
    return RedirectResponse(url="/static/index.html")


@app.get("/recipes")
async def recipe():
    recipe_links = ParserSelenium.parse_recipe_links("https://andychef.ru/recipe")
    print(recipe_links)
    return {"data": recipe_links[0]}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
