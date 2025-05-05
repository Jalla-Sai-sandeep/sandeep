let g1;
let g2;
let g3;
let g4;
let g5;
let g6;

function sum(){
    g1 = parseInt(document.getElementById("g1").value);
    g2 = parseInt(document.getElementById("g2").value);
    g3 = parseInt(document.getElementById("g3").value);
    g4 = parseInt(document.getElementById("g4").value);
    g5 = parseInt(document.getElementById("g5").value);
    g6 = parseInt(document.getElementById("g6").value);

    let totalAmount = g1+g2+g3+g4+g5+g6;
    document.getElementById("result").innerText = `Total Expenditure is : ${totalAmount}`;
}