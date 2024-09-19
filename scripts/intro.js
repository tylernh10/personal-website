var nameIndex = 0;
var txt = 'Tyler Hinrichs'


function type() {
    if (nameIndex < txt.length) {
        document.getElementById("intro-name-container").innerHTML += txt.charAt(nameIndex);
        nameIndex++;
        setTimeout(type, Math.random() * (120 - 90) + 90);
    }
}

type();

j = 0;
var num = 500;
function fadeInfo() {
    if (j < num) {
        document.getElementById("intro-info-container").style.opacity = j / 70;
        document.getElementById("intro-expand").style.opacity = j / 70;
        j++;
        setTimeout(fadeInfo, 10);
    }
}

document.getElementById("intro-expand").style.cursor = "pointer"

setTimeout(fadeInfo, 1500);
