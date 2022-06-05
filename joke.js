const joke = document.getElementById('display');
const button = document.getElementById('joke-btn');

button.addEventListener("click", getJoke);

const jokeURL = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"

function getJoke() {
    fetch(jokeURL)
        .then(res => res.json())
        .then(data => {
            if (data.type == "twopart") {
                joke.innerHTML = `<div=>${data.setup}</div><div style="margin-top: 10px;">${data.delivery}</div>`;
            }
            else {
                joke.innerHTML = `${data.joke}`;
            }
        })
}