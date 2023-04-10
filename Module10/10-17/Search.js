

var a = new Array(100);

for (var i=0; i < a.length; i++) {
    a[i] = 2 * i;
}

function buttonPressed() {
    // get the input text fueld
    var inputVal = document.getElementById("inputVal");

    // get the result paragraph
    var result = document.getElementById("result");

    // get the search key from the input text field the perform the search
    var searchKey = parseInt( inputVal.value);
    var element = a.indexOf( searchKey);

    if (element != -1) {
        result.innerHTML = "Found value in element " + element;
    }
    else {
        result.innerHTML = "Value not found";
    }
}

function start() {
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", buttonPressed, false);
}

window.addEventListener("load", start, false);