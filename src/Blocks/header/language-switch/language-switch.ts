export const languageSelectBlock = document.querySelector(
  ".burgermenu__language-popup"
);

export const toggleLanguageSelectBLock = (event: Event) => {
  languageSelectBlock.classList.toggle("burgermenu__language-popup_active");
  event.stopPropagation();
};
