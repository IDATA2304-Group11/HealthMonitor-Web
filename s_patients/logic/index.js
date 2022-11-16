/**
 * JavaScript-file for patients.html.
 * 
 * @author jorgenfinsveen
 * @version 26-10-22
*/

window.onload = init;


const REGEX_NAME = /^([^0-9]*)$/;
const path = "server/patient/getpatientby";
const IMGPATH = '../../img/';

function init() {
    document.getElementById('logoPic').src = IMGPATH + 'logo.png';
    document.getElementById('searchBtn').onclick = search;
}




function search() {
    let input     = document.getElementById('searchWord').value.trim().toLowerCase();
    let output    = document.getElementById('output');
    const xhttp   = new XMLHttpRequest();
    const request = path + ( (REGEX_NAME.test(input)) ? "name.php?q=" : "pid.php?q=" ) + input;

    output.innerHTML = "";
    if (input.length === 0) return;

    xhttp.onload = function() { output.innerHTML = this.responseText; };
    xhttp.open('GET', request);
    xhttp.send();
}