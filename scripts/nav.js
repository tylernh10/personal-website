function makeResponsive() {
    var linkHolder = document.getElementById("nav-link-holder");
    if (linkHolder.className === "link-holder") {
        linkHolder.className += " responsive";
    } else {
        linkHolder.className = "link-holder";
    }
}

window.onclick = function(event) {
    var linkHolder = document.getElementById("nav-link-holder");
    if (linkHolder.classList.contains('responsive')) {
        var parent = event.target.parentElement;
        if (! (parent.classList.contains('header') || parent.parentElement.classList.contains('header'))) {
            console.log((parent.classList.contains('header') || parent.parentElement.classList.contains('header')));
            linkHolder.className = "link-holder";
        }
    }
}