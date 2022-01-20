// function burgerButton() {

//     // const elMenuList = document.querySelector(".menu__list").classList.toggle("menu-list__responsive");
//     const elBurger = document.querySelector(".burger-button").classList.toggle("hamburger");

// }
// let btn = document.querySelector("#burgerBtn");
// let menu = document.querySelector("#navbar");
// btn.addEventListener("click", () => {
//     menu.classList.toggle("menu-list-active")
//     menu.classList.toggle("menu-list")
// })


let num = 0;
function controlMenu(){
    num++
function mediaNavbar(x) {
    var growDiv = document.querySelector('.sc2_navbar_menu');
    var wrapper = growDiv.querySelector('ul');
  if (x.matches) { 
          if(num >= 2){num = 0}
          if(num == 0){growDiv.style.height = "0px";
                       growDiv.style = "border-bottom:none;"}
          if(num == 1){growDiv.style.height = wrapper.clientHeight + "px";
                       growDiv.style.borderBottom = "1px solid #ffc000"
                       }
  }else {
    growDiv.style = ""
    num = 0
  }
}

var x = window.matchMedia("(max-width: 992px)")
mediaNavbar(x)
x.addListener(mediaNavbar) 
}