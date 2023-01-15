function makeResponsive() {
    var linkHolder = document.getElementById("nav-link-holder")
    if (linkHolder.className === "link-holder") {
        linkHolder.className += " responsive";
    } else {
        linkHolder.className = "link-holder";
    }
}