//javascript code

for (var teller = 1; teller <= 100; teller++) {

    if (teller % 3 == 0) {
        document.getElementById("resultaat").innerHTML += "<strong>VET</strong><br>";
    }

    else {
        document.getElementById("resultaat").innerHTML += teller + "<br>";
    }

}