/**
 * JavaScript-file for patients.html.
 * 
 * @author jorgenfinsveen
 * @since 26-10-22
 * @version 18-11-22
*/
window.onload = init;



/** Path to logo-image. */
const IMG_PATH = '../../img/';
/** HTML-tag <br> for linebreak. */
const BR = document.createElement('br');




/**
 * Initializer for the HTML-page. Gets called when
 * window loading the page.
 */
function init() {

    /** Patient-id for patient chosen. */
    let pid = localStorage.getItem('PID');
    document.getElementById('test').innerHTML = "PID: " + pid;
    
    /** HTML-element displaying user-info. */ 
    let details = document.getElementById('details');

    /* Updates details with user-info. */
    details.innerHTML = "User: Dr. " + eval(localStorage.getItem('DRN'));
    details.appendChild(BR);
    details.innerHTML += "Doctor ID: " + localStorage.getItem('UID');

    /* Adding logo. */
    document.getElementById('logoPic').src = IMG_PATH + 'logo.png';
}