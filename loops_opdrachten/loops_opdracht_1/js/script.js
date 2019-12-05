//javascript code

function geefGetallen() {
    var ingevultdgetal = document.getElementById("startgetal").value;

    for (var teller = 1; teller <= 100; teller += 1) {

        alert(teller * ingevultdgetal);
    }
}