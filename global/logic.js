
/** Directory-path for images. */
const IMG_PATH = '/img/logo.png';
/** Path to php-server. */
const DB_PATH = "/php/db.php";
/** HTML-tag <br> for linebreak. */
const BR = document.createElement('br');


/**
 * Update the description segment on the webpage.
 */
function setDescription() {
    /** HTML-element displaying user-info. */ 
    const details = document.getElementById('details');

    /* Updates details with user-info. */
    details.innerHTML = "User: Dr. " + eval(sessionStorage.getItem('DRN'));
    details.appendChild(BR);
    details.innerHTML += "Doctor ID: " + sessionStorage.getItem('UID');
}

export {setDescription, DB_PATH, IMG_PATH};