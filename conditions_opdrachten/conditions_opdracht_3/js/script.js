//javascript code

function checkSaldo() {
    
    var salaris = document.getElementById("salaris").value ;

    var bankSaldo = 0;

    var restTotaal = 0 + salaris;

    if(restTotaal < 500 ){
        alert("tewijnig salaris");
    }

    if(restTotaal > 500){
        alert("salaris plus bonus")
    }
    
    if(restTotaal == 500){
        alert("salaris")
    }
}