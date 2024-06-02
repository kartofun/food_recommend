import uvicorn
from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
# from services.parser import ParserSelenium
# from pathlib import Path

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
async def root():
    # return FileResponse("static/index.html")
    return RedirectResponse(url="/static/index.html")

@app.get("/recipes")
async def recipe():
    recipe_links = ["1_link"]
    # recipe_links = ParserSelenium.parse_recipe_links("https://andychef.ru/recipe")
    print(recipe_links)
    return {"message": str(recipe_links[0])}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)