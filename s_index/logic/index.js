/**
 * Logic for mainpage.
 * 
 * @author jorgenfinsveen
 * @since 26-10-22
 * @version 18-11-22
*/
window.onload = init;



/** Directory-path for images. */
const IMG_PATH = '../img/';
/** Path to php-server. */
const PHP_PATH = "server/patient/getcriticalpatients.php";
/** HTML-tag <br> for linebreak. */
const BR = document.createElement('br');



/**
 * Initializer for the HTML-page. Gets called when
 * window loading the page.
 */
function init() {
    
    /** HTML-element displaying user-info. */ 
    const details = document.getElementById('details');

    /* Updates details with user-info. */
    details.innerHTML = "User: Dr. " + eval(localStorage.getItem('DRN'));
    details.appendChild(BR);
    details.innerHTML += "Doctor ID: " + localStorage.getItem('UID');
    
    /* Adding logo. */
    document.getElementById('logoPic').src = IMG_PATH + 'logo.png';

    /* Fill table with patient details. */
    fillTable();
}




/**
 * Fill table with patients which have a status assigned
 * which is not "stable".<br>
 * 
 * Requests all non-stable patients from the server through a
 * XMLHttpRequest.
 */
function fillTable() {

    /** Output element from the page. */
    const output  = document.getElementById('output');
    output.innerHTML = "";

    /* Creates an XML-HTTP request for calling the php-servers. */
    const xhttp   = new XMLHttpRequest();
    xhttp.onload = function() { output.innerHTML = this.responseText; };
    xhttp.open('GET', PHP_PATH);
    xhttp.send();
}