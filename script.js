var counter = 1;

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // var all = document.querySelectorAll("body", "div", "div.a", "div.button.a", "div.div.a", ".content");

    // for (var i=0; i<all.length; i++) {
    //     all[i].classList.toggle("dark-mode");
    // }

    var dlbutton = document.getElementById('dlbutton');
    if (counter%2==0) {
        dlbutton.innerHTML = `🌙`;
        counter++;
    }
    else {
        dlbutton.innerHTML = `☀️`;
        counter++;
    }
}

