console.log("test");

function calc(){
    let age1 = document.getElementById('age1').value;
    let age2 = document.getElementById('age2').value;
    let difference = document.getElementById('difference');
    difference.innerHTML = Math.abs(age1 - age2); 
}
