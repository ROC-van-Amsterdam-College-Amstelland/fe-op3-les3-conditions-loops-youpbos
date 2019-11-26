//javascript code

var myOperator = "+";
var myNummber1 = prompt ("geef aub een getal op?");
var myNummber2 = prompt ("geef aub een getal op?");
var resultaat;

if( myOperator == "+") {
    resultaat = Number(myNummber1) + Number(myNummber2);
    document.getElementById("resultaat").innerHTML = resultaat;

}else if(myOperator == "-") {
    resultaat = myNummber1 - myNummber2;
    document.getElementById("resultaat").innerHTML = resultaat;
}