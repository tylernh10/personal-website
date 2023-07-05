var experienceInfo = [
    {
        image: "images/travelers-logo.png",
        title: "TLDP Intern • Travelers",
        date: "June 2023 - present",
        summary: "Reimagining audit system for Engineering Excellence team by creating a robust automation application leveraging Python, Selenium, and React JS; creating modular and reusable code through page object model design pattern and OOP principles; working in an Agile environment to methodically develop application",
        skills: ["Python", "Selenium", "Automation", "Software Development", "Command Line Interface", "Graphical User Interface", "Agile", "Git/GitHub"]
    },
    {
        image: "images/wellinks-logo.png",
        title: "Junior Software Engineer • Wellinks",
        date: "August 2022 - March 2023",
        summary: "Android Developer, working collaboratively on a small team of engineers providing a digital solution for people with COPD, taking bug fixes, tech debt and new feature work on the Android app in an Agile environment, implementing third-party tools into the Android app such as Rollbar and Mixpanel, continued work on weather proof of concept, collaborating with multiple teams and sectors of the company such as Product, Clinical, and more.",
        skills: ["Android Development", "Kotlin", "MVVM", "Git/GitHub", "Agile", "Third-party software integration", "Cross-team collaboration", "Android SDK"]
    },
    {
        image: "images/wellinks-logo.png",
        title: "Software Engineering Intern • Wellinks",
        date: "June 2022 - August 2022",
        summary: "Contributed as an Android developer, working on bugs, technical debt, and new feature work, maintained high-quality code and architecture using Kotlin alongside Hilt, MVVM Design Pattern, Retrofit, GraphQL Querying, fullstack Android development, OOP, REST APIs, working in an agile Environment, worked on \"Today's Weather\" proof of concept weather feature in the Wellinks Android app giving comprehensive environmental insights based on local weather metrics tailored to people with COPD.",
        skills: ["Android Development", "Kotlin", "MVVM", "Git/GitHub", "Agile", "OOP", "REST APIs", "Fullstack Software Development", "Android SDK"]
    },
]

var experienceSection = document.getElementById("work-experience");
for (var i = 0; i < experienceInfo.length; i++) {
    var exp = experienceInfo[i];

    var container = document.createElement("div");
    container.classList.add("work-experience-item-container");
    
    // image
    var companyImage = document.createElement("img");
    companyImage.classList.add("work-experience-image");
    companyImage.src = exp.image;

    // info
    var info = document.createElement("div");
    info.classList.add("work-experience-text");

    // title
    var title = document.createElement("div");
    title.classList.add("work-experience-title");
    title.textContent = exp.title;

    // date
    var date = document.createElement("div");
    date.classList.add("gray-bg");
    date.textContent = exp.date;

    // summary
    var summary = document.createElement("div");
    summary.classList.add("work-experience-summary");
    summary.textContent = exp.summary;

    // skills label
    var skillsLabel = document.createElement("div");
    skillsLabel.classList.add("skills-label");
    skillsLabel.textContent = "Skills:";

    // skills holder
    var skillsHolder = document.createElement("div");
    skillsHolder.classList.add("skills-holder");

    // create skills elements and attach to skills holder
    for (var j = 0; j < exp.skills.length; j++) {
        var skill = document.createElement("div");
        skill.classList.add("gray-bg");
        skill.classList.add("margin-add1");
        skill.textContent = exp.skills[j];
        skillsHolder.appendChild(skill);
    }

    info.appendChild(title);
    info.appendChild(date);
    info.appendChild(summary);
    info.appendChild(skillsLabel);
    info.appendChild(skillsHolder);

    if (i == experienceInfo.length - 1) container.classList.add("work-experience-item-container-last");

    container.appendChild(companyImage);
    container.appendChild(info);
    experienceSection.appendChild(container);
}