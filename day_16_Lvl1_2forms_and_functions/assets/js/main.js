console.log("test");

function calc() {
    let year = document.getElementById('year').value;
    let age = document.getElementById('age');
    age.innerHTML = (2023 - year);
}