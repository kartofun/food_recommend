import uvicorn
from fastapi import FastAPI
# from fastapi.responses import RedirectResponse
# from fastapi.staticfiles import StaticFiles
from services.parser import ParserSelenium
from fastapi.middleware.cors import CORSMiddleware
from pages.router import router as router_pages

app = FastAPI(
    title="Food service"
)

app.include_router(router_pages)
# recipe_links = ParserSelenium.parse_recipe_links("https://andychef.ru/recipe")

# origins = [
#     "http://127.0.0.1:8000",
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["GET", "POST", "OPTIONS", "DELETE", "PUT", "PATCH"],
#     allow_headers=["Content-Type", "Set-Coockie", "Access-Control-Allow-Headers"],
# )
recipe_links = [1,2,3,4,5,6]


@app.get("/recipes")
def get_recipes(limit: int = 5):
    return recipe_links[:limit]

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
