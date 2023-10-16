import * as _ from "lodash";
import "./index.scss";
import { getNews } from "./Api/newsApi/news";
import { TNewsItem } from "./Api/newsApi/types";
import { popBurgerMenu } from "./Blocks/header/burgermenu/burgermenu";
import {
  languageSelectBlock,
  toggleLanguageSelectBLock,
} from "./Blocks/header/language-switch/language-switch";

const createBlogElements = async () => {
  const blogContainer = document.querySelector(".blog__container");
  getNews().then((res) => {
    for (let i = 0; i <= 4; i++) {
      const blogItem = document.createElement("div");
      blogItem.setAttribute("class", "blog__item");

      const blogMessage = document.createElement("p");
      blogMessage.setAttribute("class", "blog__message");
      blogMessage.innerHTML = res[i].title;

      const blogDate = document.createElement("p");
      blogDate.setAttribute("class", "blog__date");
      blogDate.innerHTML = res[i].pubDate;

      blogItem.appendChild(blogMessage);
      blogItem.appendChild(blogDate);

      if (!i) {
        const blogLink = document.createElement("a");
        blogLink.setAttribute("href", `${res[i].link}`);
        blogLink.setAttribute("class", "blog__link");
        blogLink.appendChild(blogItem);

        blogContainer.appendChild(blogLink);
      } else {
        blogContainer.appendChild(blogItem);
      }
    }
  });
};

createBlogElements();

const burgerMenuButton = document.querySelector(".burgermenu__button");
burgerMenuButton.addEventListener("click", popBurgerMenu);

const languageButton = document.querySelector(".burgermenu__languages");

languageButton.addEventListener("click", toggleLanguageSelectBLock);

window.addEventListener("click", (e) => {
  if (
    e.target !== languageSelectBlock &&
    languageSelectBlock.classList.contains("burgermenu__language-popup_active")
  ) {
    languageSelectBlock.classList.toggle("burgermenu__language-popup_active");
  }
});
