import { TNewsItem } from "./types";

export const getNews = async () => {
  const allNews = await fetch(
    "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"
  )
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      let items = data.querySelectorAll("item");
      let result: TNewsItem[] = [];
      items.forEach((el) => {
        result.push({
          title: el.querySelector("title").innerHTML,
          link: el.querySelector("link").innerHTML,
          description: el.querySelector("description").innerHTML,
          pubDate: el.querySelector("pubDate").innerHTML.slice(0, -5),
        });
      });

      return result;
    });

  return allNews;
};
