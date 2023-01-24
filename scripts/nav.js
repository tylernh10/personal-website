function makeResponsive() {
    var linkHolder = document.getElementById("nav-link-holder");
    var menuImg = document.getElementById("menu-img");
    if (linkHolder.className === "link-holder") {
        linkHolder.className += " responsive";
        menuImg.src = "../images/close.png"
    } else {
        linkHolder.className = "link-holder";
        menuImg.src = "../images/menu.png"
    }
}

window.onclick = function(event) {
    var linkHolder = document.getElementById("nav-link-holder");
    var menuImg = document.getElementById("menu-img");
    if (linkHolder.classList.contains('responsive')) {
        if (event.target.classList.contains('nav-link')) {
            linkHolder.className = "link-holder";
            menuImg.src = "../images/menu.png"
        }
    }
}