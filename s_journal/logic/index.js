/**
 * JavaScript-file for patients.html.
 * 
 * @author jorgenfinsveen
 * @since 26-10-22
 * @version 18-11-22
*/
window.onload = init;






import {setDescription, IMG_PATH} from '/global/logic.js';


/**
 * Initializer for the HTML-page. Gets called when
 * window loading the page.
 */
function init() {

    /** Patient-id for patient chosen. */
    let pid = localStorage.getItem('PID');
    document.getElementById('test').innerHTML = "PID: " + pid;
    
     /* Updates details with user-info. */
     setDescription();
    
     /* Adding logo. */
     document.getElementById('logoPic').src = IMG_PATH;
}