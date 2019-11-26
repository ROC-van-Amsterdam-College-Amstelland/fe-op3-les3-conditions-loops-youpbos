//javascript code

function checkSaldo() {
    
    var geldOpnamen = document.getElementById("geldOpnamen").value ;

    var bankSaldo = 1000;

    var restTotaal = 1000 - geldOpnamen;

    if(restTotaal < 25 ){
        alert("sorry, je hebt te weinig saldo!");
    }
}