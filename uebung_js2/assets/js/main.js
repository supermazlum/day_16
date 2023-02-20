// console.log("test");

// //FUNCTIONS
// // functions sindn ein block gebündelter befehl, die erst ausgeführt werden, wenn sie benötigt werden

// //einfache function

// //declaration / definieren
// function functionName() {
//     console.log("ich werde durch das calling aufgerufen");
// }


// // calling / aufrufen
// functionName();

// // function mit parameter
// function sayHello(name) {
//     console.log("Gute Morgen" + name);
// }

// sayHello();
// sayHello("Saskia");


// //beispiel waschmaschine
// //Programm Wolle
//     console.log



// Übung
// 3 funktionen: eine addition, subtraktion, multiplikation von 2 zahlen
// parameter nutzen und in der console ergebnis ausgeben



// function add(num1, num2){
//     console.log(num1 + num2);
// }

// add(4, 5)

// function sub(num3, num4) {
//     console.log(num3 - num4)
// }

// sub (9, 5)

// function multi(num5, num6) {
//     console.log(num5 * num6)
// }

// multi (9, 5)
// let a1 = 100;

// function a1 (num1) {
//     console.log(num1 + 5)
//     console.log(a1 - 5)
//     console.log(a1 * 5)
// }

// let a1 = 10;
// let b1 = 20;
// let c1 = 5;

// console.log(a + b);
// console.log(c - b);
// console.log(b * c);
// console.log(c * c * c);





// wie bekomme ich den inhalt aus meinen inputfelder in meine konsole?
// 1.) function deklarieren und einen button ein onclick mit dem functionsnamen erstellen
// 2.) variablen/konstanten mit dem value des elements befüllen
// 3.) definierte variablen/konstanten in der konsole ausgeben


function showForm() {
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    console.log(firstName);
    console.log(lastName);
    console.log(email);
}


// Übung
// schreibe eine funktion, die auf klick die backgroundcolor der form ändert.

function changeBG() {
    const form = document.getElementById('form');

    form.style.backgroundColor = "tomato";
}

// classList
// add , remove , toggle

function changeBG() {
    // const form = document.getElementById('form');
    form.classList.add ('background');
}

function changeBG() {
    form.classList.remove ('background');
}

function changeBG() {
    form.classList.toggle ('background');
}
