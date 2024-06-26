var experienceInfo = [
    {
        image: "images/travelers-logo.png",
        title: "Software Engineer, Engineering Development Program • Travelers",
        date: "June 2024 - Present",
        summary: "Software Engineer in the Engineering Development Program (EDP). Fullstack development on the Travelers Engineering Portal and audit automation within the Engineering Enablement circle within Digital Enablement.",
        skills: ["Software Development", "Node.js", "React.js", "Python", "Selenium", "Automation",]
    },
    {
        image: "images/uconn-logo.png",
        title: "Undergraduate Teaching Assistant • University of Connecticut",
        date: "August 2023 - May 2024",
        summary: "Undergraduate teaching assistant for CSE 3200, Mobile Application Development. Promote student learning of concepts such as Kotlin, Android SDK, MVVM design pattern, and more. Grade student assignments and exams and hold office hours on a weekly basis.",
        skills: ["Kotlin", "Android Development", "Android SDK", "Software Development"]
    },
    {
        image: "images/travelers-logo.png",
        title: "TLDP Intern • Travelers",
        date: "June 2023 - August 2023",
        summary: "Reimagined Engineering Excellence team's audit system through a Python and Selenium-based application, reducing audit evidence collection time from days to minutes. Developed a suite of automated data-gathering methods, comprehensive error checking, detailed evidence logs, an intuitive command line interface, and extensive documentation. Ensured long-term extensibility through an adaptable and modular codebase implementing the Page-Object Model pattern, MVC pattern, and other OOP principles.",
        skills: ["Python", "Selenium", "Automation", "Software Development", "Command Line Interface", "Agile", "Git/GitHub", "MVC"]
    },
    {
        image: "images/wellinks-logo.png",
        title: "Junior Software Engineer • Wellinks",
        date: "August 2022 - March 2023",
        summary: "Continued to deliver elegant Kotlin code as an Android developer, reenvisioned weather feature through GPS support addition, improved UX and documentation, started push notifications development. Integrated third-party tools Rollbar and Mixpanel into app, collaborated across teams to accomplish tasks.",
        skills: ["Android Development", "Kotlin", "MVVM", "Git/GitHub", "Agile", "Third-party software integration", "Cross-team collaboration", "Android SDK"]
    },
    {
        image: "images/wellinks-logo.png",
        title: "Software Engineering Intern • Wellinks",
        date: "June 2022 - August 2022",
        summary: "Crafted and maintained high-quality code and architecture as an Android developer using Kotlin, MVVM Pattern, Android SDK, REST APIs; delivered new feature work, bug fixes, tech debt in Agile environment. Led development for proof of concept feature in the Android app giving comprehensive environmental insights based on local weather metrics tailored to people with COPD.",
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