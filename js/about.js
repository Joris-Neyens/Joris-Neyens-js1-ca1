
function updateText () {

const pageTitle = document.querySelector("h1");
const formattedTitle = pageTitle.innerText.replace("The", "Replaced");
pageTitle.innerText = formattedTitle;

const about = document.querySelector(".about");
const formattedAbout = about.innerText.replace(/The/g, "Replaced").replace(/the/g, "replaced");
about.innerText = formattedAbout;

}

setTimeout(updateText, 4000);


