function burgerButton() {

    // const elMenuList = document.querySelector(".menu__list").classList.toggle("menu-list__responsive");
    const elBurger = document.querySelector(".burger-button").classList.toggle("hamburger");

}
let btn = document.querySelector("#burgerBtn");
let menu = document.querySelector("#navbar");
btn.addEventListener("click", () => {
    menu.classList.toggle("menu-list-active")
    menu.classList.toggle("menu-list")
})