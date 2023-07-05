const template = document.createElement('template')
template.innerHTML = `
<nav class="header">
    <a class="home-button" href="/#">Tyler Hinrichs</a>
    <a class="icon" onclick="makeResponsive()">
        <img id="menu-img" class="menu-image" src="../images/menu.png">
    </a>
    <div id="nav-link-holder" class="link-holder">
        <a class="nav-link" href="/#">home</a>
        <a class="nav-link" href="/#aboutme">about me</a>
        <a class="nav-link" href="/#work-experience">work experience</a>
        <a class="nav-link" href="/#projects">projects</a>
        <a class="nav-link" href="/#education">education</a>
        <a class="nav-link" href="/#contact">contact</a>
        <a class="nav-link" href="versions.html">versions</a>
    </div>
</nav>
<footer class="bottom-menu">
    <div class="bottom-info">
        <a href="versions" class="version">v1.0.2</a>
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
