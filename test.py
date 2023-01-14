import requests
from bs4 import BeautifulSoup as bs

req = requests.get("https://github.com/tylernh10")
print(req.status_code)
html = req.content

soup = bs(html, "html.parser")

for i in soup.select(".repo"):
    print(i.string)

