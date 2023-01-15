const template = document.createElement('template')
template.innerHTML = `
<nav class="header">
    <a class="home-button" href="/#">Tyler Hinrichs</a>
    <a class="icon" onclick="makeResponsive()">
        <img class="menu-image" src="../images/menu.png">
    </a>
    <div id="nav-link-holder" class="link-holder">
        <a href="/#">home</a>
        <a href="/#aboutme">about me</a>
        <a href="/#work-experience">work experience</a>
        <a href="/#projects">projects</a>
        <a href="/#education">education</a>
        <a href="/#contact">contact</a>
        <a href="versions.html">versions</a>
    </div>
</nav>
<footer class="bottom-menu">
    <div class="bottom-info">
        <a href="versions" class="version">v1.0.0</a>
        <div class="version"> © 2023 Tyler Hinrichs</div>
    </div>
</footer>
`
document.body.appendChild(template.content)

let scrollPos = window.scrollY
const nav = document.querySelector('nav')
const height = nav.offsetHeight

const add_class_on_scroll = () => nav.classList.add("add-bg-color")
const remove_class_on_scroll = () => nav.classList.remove("add-bg-color")

window.addEventListener('scroll', function() { 
    scrollPos = window.scrollY;

    if (scrollPos >= height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }
  })
