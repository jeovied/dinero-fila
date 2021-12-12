const $ = id => document.getElementById(id);

window.addEventListener("load", () => {
    
    let burgerMenu = $("burguer-menu"),
    asideMenu = $("nav2");

    burgerMenu.addEventListener("click", () => {
        asideMenu.classList.toggle("nav2On");
    });

});