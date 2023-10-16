const burgerMenu = document.querySelector(".burgermenu__container");
const burgerMenuIcon = document.querySelector(".burgermenu__lines");

export const popBurgerMenu = () => {
  console.log("hello its me");
  burgerMenu.classList.toggle("burgermenu__container_active");
  burgerMenuIcon.classList.toggle("burgermenu__lines_active");
};
