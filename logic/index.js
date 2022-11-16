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
}
