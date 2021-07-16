// jshint esversion: 10

let container = document.querySelector(".container__content");

container.addEventListener("click", function(event) {
    if(event.target.classList.contains("para")) return;
    event.target.closest(".content")?.firstElementChild.classList.toggle("heading-selected");
    event.target.closest(".content")?.lastElementChild.classList.toggle("hidden");
});

document.querySelector(".black").addEventListener("click", function(event) {
    this.classList.toggle("black-top");
});
