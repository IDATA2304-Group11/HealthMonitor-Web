/**
 * JavaScript-file for index.html.
 * 
 * @author jorgenfinsveen
 * @version 26-10-22
*/

/*
    DECLARATIONS
    ------------------------------
*/
/** Directory-path for images. */
const IMGPATH = 'img/';
const SERVER_PATH = "s_index/server/patient/getcriticalpatients.php";


/*
    EVENTS
    ------------------------------
*/
// Initialize window upon loading. 
window.onload = init;


/*
    FUNCTIONS
    ------------------------------
*/
/**
 * Initializes the logic-aspects of this web page.
 * Assigns image-source for the logo.
 */
function init() {
    document.getElementById('logoPic').src = IMGPATH + 'logo.png';
    fillTable();
}

function fillTable() {
    let output    = document.getElementById('output');
    const xhttp   = new XMLHttpRequest();

    output.innerHTML = "";

    xhttp.onload = function() { output.innerHTML = this.responseText; };
    xhttp.open('GET', SERVER_PATH);
    xhttp.send();
}