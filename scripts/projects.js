var projectsInfo = [
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
        description: "The website you are currently on! Using HTML, CSS, and Javascript to create a portfolio website",
        link: "https://www.github.com/tylernh10/personal-website-v1"
    },
    {
        image: "images/production.png",
        title: "Audiotool Data Analysis",
        description: "Exploring Audiotool through data analysis with Python",
        link: "https://www.github.com/tylernh10/audiotool-data"
    },
    {
        image: "images/online-course.png",
        title: "Course Report System",
        description: "Java system allowing user to interact with course information stored in file via command line",
        link: "https://www.github.com/tylernh10/course-report-system"
    },
    {
        image: "images/chess-piece.png",
        title: "Eight Queens Assembly",
        description: "Solving the Eight Queens problem in RISC-V assembly",
        link: "https://www.github.com/tylernh10/eight-queens-assembly"
    },
    {
        image: "images/quiz.png",
        title: "Are You The One?",
        description: "Playable gameshow simulation using Python and Tkinter",
        link: "https://www.github.com/tylernh10/are-you-the-one"
    },
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
    link.target = "_blank";

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);

    container.appendChild(card);
}

projectsSection.appendChild(container);
