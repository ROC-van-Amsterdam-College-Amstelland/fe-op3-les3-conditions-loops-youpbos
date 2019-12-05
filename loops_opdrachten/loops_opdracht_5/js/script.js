//javascript code

var nummer = 1;


for (var teller = 1; teller <= 20; teller++) {

    if (teller % 2 == 0) {
        document.getElementById("resultaat").innerHTML += "<h6>" + teller + "</h6>";
    }

    else {
        console.log(teller);
    }

}