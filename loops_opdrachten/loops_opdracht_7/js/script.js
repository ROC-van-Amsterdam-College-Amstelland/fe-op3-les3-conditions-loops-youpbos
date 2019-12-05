//javascript code

for (var teller = 1; teller <= 100; teller++) {

    if (teller % 3 == 0) {
        document.getElementById("resultaat").innerHTML += "<strong>VET</strong><br>";
    }

    if (teller % 5 == 0) {
        document.getElementById("resultaat").innerHTML += "<strong>COOL</strong><br>";
    }

    else {
        document.getElementById("resultaat").innerHTML += teller + "<br>";
    }

}