const languageSelectBlock = document.querySelector(
  ".burgermenu__language-popup"
);

export const toggleLanguageSelectBLock = () => {
  languageSelectBlock.classList.toggle("burgermenu__language-popup_active");
};
