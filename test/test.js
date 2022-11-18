window.onload = init;


function init() {
    document.getElementById('text').onclick = show;
    document.getElementById('next').onclick = ready;
}


function show() {
    document.getElementById('snus').src = "snus.jpg";
    document.getElementById('msg').innerHTML = "Ta deg en snus ;)";
}

function ready() {
    window.location.replace("../index.html");
}