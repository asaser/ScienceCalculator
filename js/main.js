// wyświetlanie liczb

function show(score) {
    document.getElementById("number_score").value += score;
}

// wyczyszczenie ekranu z liczb

function clean() {
    document.getElementById("number_score").value = "";
}

// równa się =

function equal() {
    let result = document.getElementById("number_score").value;

    document.getElementById("number_score").value = eval(result);
}


// usunięcie jednej liczby

function undo() {
    let result = document.getElementById("number_score").value;

    document.getElementById("number_score").value = result.substring(0, result.length - 1);
}



// All angle
// skrócić trochę kod lub polączyć w jedno aby mniej miejsca zajmowało

function sinus() {
    let result = document.getElementById("number_score").value;

    document.getElementById("number_score").value = Math.sin(result);
}

function cosinus() {
    let result = document.getElementById("number_score").value;

    document.getElementById("number_score").value = Math.cos(result);
}

function tangens() {
    let result = document.getElementById("number_score").value;

    document.getElementById("number_score").value = Math.tan(result);
}

function cotangens() {
    let result = document.getElementById("number_score").value;

    document.getElementById("number_score").value = 1 / Math.tan(result);
}


// percent
function percent() {
    let result = document.getElementById("number_score").value;
    let num = result / 100;

    document.getElementById("number_score").value = num;
}

// squared
function squared() {
    let result = document.getElementById("number_score").value;
    let squar = result * result;

    document.getElementById("number_score").value = squar;
}



