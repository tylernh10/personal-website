function updateProgressBar() {
    const progInfo = [
        ["Software Concentration", 100, "green"],
        ["Mathematics Minor", 100, "red"],
        ["Emotion Estimation", 60, "blue"], 
        ["Honors Thesis", 30, "yellow"],
        ["Mobile App TAing", 30, "purple"],  
        ["Senior Design Project", 30, "orange"]
    ];

    var progress = document.getElementById("progress-update-card")
    
    for (i = 0; i < progInfo.length; i++) {
        const name = progInfo[i][0];
        const percent = progInfo[i][1];
        const color = progInfo[i][2];
        
        var container = document.createElement("div");
        container.style.marginBottom = "5px";
        
        var text = document.createElement("div");
        text.style.fontSize = "0.9em";
        text.textContent = name;

        var progBarOuter = document.createElement("div");
        progBarOuter.classList.add("progress-container");
        var progBarInner = document.createElement("div");
        progBarInner.classList.add("progress-bar");
        progBarInner.style.width = percent + "%";
        const val = 200 - 70*(i / progInfo.length);
        progBarInner.style.backgroundColor = "rgb(120, 222, " +  val + ")";
        progBarOuter.appendChild(progBarInner);

        container.appendChild(text);
        container.appendChild(progBarOuter);
        progress.appendChild(container);

        // start = 120, 222, 200
        // end = 120, 222, 130
    }
}
setTimeout(updateProgressBar, 1);