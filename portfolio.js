let completeSection = document.getElementById("complete-section");
let firstProject = document.getElementById("complete1-section");
let secondProject = document.getElementById("complete2-section");

function first() {
    completeSection.classList.add("d-none");
    firstProject.classList.remove("d-none")
}

function second() {
    completeSection.classList.add("d-none");
    secondProject.classList.remove("d-none")
}

function button2() {
    completeSection.classList.remove("d-none");
    secondProject.classList.add("d-none")
}

function button1() {
    completeSection.classList.remove("d-none");
    firstProject.classList.add("d-none")
}