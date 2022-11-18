/**
 * JavaScript-file for patients.html.
 * 
 * @author jorgenfinsveen
 * @since 26-10-22
 * @version 18-11-22
*/
window.onload = init;

/** Pattern not allowing numbers. */
const REGEX_NAME = /^([^0-9]*)$/;
/** Path to PHP-server. */
const path = "server/patient/getpatientby";
/** Path to logo-image. */
const IMGPATH = '../../img/';


/**
 * Initializer for the HTML-page. Gets called when
 * window loading the page.
 */
function init() {
    document.getElementById('logoPic').src = IMGPATH + 'logo.png';
    const details = document.getElementById('details');
    const br = document.createElement('br');
    details.innerHTML = "User: Dr. " + eval(localStorage.getItem('DRN'));
    details.appendChild(br);
    details.innerHTML += "Doctor ID: " + localStorage.getItem('UID');
    document.getElementById('searchBtn').onclick = search;
    document.getElementById('searchWord').onkeydown = function(ev) {
        if (ev.key === "Enter") {
            ev.preventDefault();
            document.getElementById('searchBtn').click();
        }
    }
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