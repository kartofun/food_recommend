from fastapi import FastAPI, Request
from fastapi.responses import FileResponse, HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
# from services.parser import ParserSelenium
# from pathlib import Path

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

# templates = Jinja2Templates(directory="templates")


@app.get("/")
async def root():
    # return FileResponse("static/index.html")
    return RedirectResponse(url="/static/index.html")


# @app.get("/", response_class=HTMLResponse)
# async def read_item(request: Request):
#     return templates.TemplateResponse(request=request,
#                                       name="index.html", context={})


@app.get("/recipes")
async def recipe():
    recipe_links = ["1_link"]
    # recipe_links = ParserSelenium.parse_recipe_links("https://andychef.ru/recipe")
    print(recipe_links)
    return {"message": str(recipe_links[0])}
