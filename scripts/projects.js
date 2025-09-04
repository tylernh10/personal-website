var projectsInfo = [
    {
        image: "images/schedule.png",
        title: "Admin Web Scheduler [UConn Honors thesis]",
        description: "Web application for administrative scheduling using the genetic algorithm",
        link: "/thesis.html",
        sameTab: true
    },
    {
        image: "images/keyboard.png",
        title: "Nitro Type Bot",
        description: "Python typing bot made with Selenium and CustomTkinter",
        link: "https://www.github.com/tylernh10/nitro-bot"
    },
    {
        image: "images/graphic-editor.png",
        title: "Graphical Editor",
        description: "Graphical editor made with C++ and Allegro5",
        link: "https://www.github.com/tylernh10/graphical-editor"
    },
    {
        image: "images/ux.png",
        title: "Personal Website",
        description: "The website you are currently on! Using HTML, CSS, and JavaScript to create a portfolio website",
        link: "https://www.github.com/tylernh10/personal-website-v1"
    }
]

var projectsSection = document.getElementById("projects");

// creating container to hold cards
var container = document.createElement("div");
container.classList.add("card-container");

for (var i = 0; i < projectsInfo.length; i++) {
    var proj = projectsInfo[i];

    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("project-card");

    var image = document.createElement("img");
    image.classList.add("image");
    image.classList.add("center-image");
    image.classList.add("project-image");
    image.src = proj.image;

    var title = document.createElement("div");
    title.classList.add("card-title");
    title.classList.add("project-card-title");
    title.textContent = proj.title;

    var desc = document.createElement("div");
    desc.classList.add("card-content");
    desc.classList.add("project-card-content");
    desc.textContent = proj.description;

    var link = document.createElement("a");
    link.classList.add("github-link");
    link.textContent = "view project"
    link.href = proj.link;
    link.target = link.sameTab ? "_blank" : "_self";


    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);

    container.appendChild(card);
}

projectsSection.appendChild(container);
