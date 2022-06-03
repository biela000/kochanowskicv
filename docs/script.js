const sourcesButton = document.querySelector(".books-button");
const sources = document.querySelector(".sources");

sourcesButton.addEventListener("click", () => {
    sources.classList.toggle("disabled");
});
