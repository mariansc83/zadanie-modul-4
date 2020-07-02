const burger = document.querySelector(".burger");
const iconBurger = document.querySelector("i.fa-bars");
const iconX = document.querySelector("i.fa-times");
const menuOpener = document.querySelector(".navigation ul.row");

const subMenuOpenerOne = document.querySelector(".sub-menu-opener-one");
const subMenuOpenerTwo = document.querySelector(".sub-menu-opener-two");
const subMenuOpenerThree = document.querySelector(".sub-menu-opener-three");
const subMenuOpenerFour = document.querySelector(".sub-menu-opener-four");
const subMenuOpenerFive = document.querySelector(".sub-menu-opener-five");
const subMenu = document.querySelector(".sub-menu");
const active = document.querySelector(".sub-menu.active");


burger.addEventListener("click", function () {
    burger.classList.toggle("show");
    iconBurger.classList.toggle("disappear");
    iconX.classList.toggle("disappear");
    menuOpener.classList.toggle("show");
});

subMenuOpenerOne.addEventListener("click", function () {
    subMenuOpenerOne.classList.toggle("active");
});

subMenuOpenerTwo.addEventListener("click", function () {
    subMenuOpenerTwo.classList.toggle("active");
});

subMenuOpenerThree.addEventListener("click", function () {
    subMenuOpenerThree.classList.toggle("active");
});
subMenuOpenerFour.addEventListener("click", function () {
    subMenuOpenerFour.classList.toggle("active");
});
subMenuOpenerFive.addEventListener("click", function () {
    subMenuOpenerFive.classList.toggle("active");
});
