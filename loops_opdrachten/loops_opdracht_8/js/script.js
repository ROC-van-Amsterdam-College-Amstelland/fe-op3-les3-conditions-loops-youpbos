//javascript code

for (teller = 1; teller <= 50; teller++) {
    document.getElementById("resultaat").innerHTML += teller + "<br>";

    if (teller == 25) {
        alert("Het getal 25 is net geen bullseye!")
    }
}