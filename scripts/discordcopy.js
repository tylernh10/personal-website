console.log("reached file");

const discordCard = document.getElementById("discord-card-copy");
const discordImage = document.getElementById("discord-image");

function replaceImage() {
    discordImage.src = "../images/copy.png";
}

discordCard.onclick = function() {
    navigator.clipboard.writeText(discordCard.innerText);
    discordImage.src = "../images/check.png"
    setTimeout(replaceImage, 1000);
}
