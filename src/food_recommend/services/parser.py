import requests
from bs4 import BeautifulSoup


class Parser:
    @staticmethod
    def parse_recipe_links(url):
        """Парсит веб-сайт с рецептами и возвращает список ссылок на рецепты."""

        # Получаем HTML-код веб-страницы
        response = requests.get(url)
        print(response.text)
        html = response.text

        # Создаем объект BeautifulSoup
        soup = BeautifulSoup(html, "html.parser")

        # Находим все ссылки на рецепты
        recipe_links = []
        for link in soup.find_all("a"):
            print(link.get("href"))
            if "recipe" in link.get("href"):
                recipe_links.append(link.get("href"))

        # Возвращаем список ссылок на рецепты
        return recipe_links

    @staticmethod
    def download_recipes(recipe_links, filename):
        """Скачивает рецепты по ссылкам и сохраняет их в файл."""

        with open(filename, "w") as f:
            for link in recipe_links:
                # Получаем HTML-код рецепта
                response = requests.get(link)
                html = response.text

                # Создаем объект BeautifulSoup
                soup = BeautifulSoup(html, "html.parser")

                # Находим название, ингредиенты и инструкции
                title = soup.find("h1", {"class": "recipe-title"}).text
                ingredients = soup.find("ul", {"class": "ingredients-list"}).text
                instructions = soup.find("ol", {"class": "instructions"}).text

                # Записываем рецепт в файл
                f.write(f"Название: {title}n")
                f.write(f"Ингредиенты: {ingredients}n")
                f.write(f"Инструкции: {instructions}nn")


# if __name__ == "main":
# Парсим веб-сайт с рецептами
recipe_links = Parser.parse_recipe_links("https://andychef.ru")

# Скачиваем рецепты
Parser.download_recipes(recipe_links, "recipes.txt")

print(recipe_links[0])
