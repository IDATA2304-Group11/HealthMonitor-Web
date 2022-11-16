/**
 * JavaScript-file for patients.html.
 * 
 * @author jorgenfinsveen
 * @version 26-10-22
*/

/*
    DECLARATIONS
    ------------------------------
*/
/** Directory-path for images. */
const IMGPATH = '../../img/';
/** Regex for numbers. */
const REGEX_PATIENT_ID = /^\d+$/;
/** Regex for strings. */
const REGEX_NAME = /^([\w]{2,})+\s+([\w\s]{2,})+$/i;
/** User-input. */
let input;


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
    // Search button disabled by default.
    //document.getElementById('searchBtn').disabled = true;
    // Insert image at logo pane.
    document.getElementById('logoPic').src = IMGPATH + 'logo.png';
    // Call search-procedure on action.
    document.getElementById('searchBtn').onclick = actionSearch;
    // Validates input at search input.
    document.getElementById('searchWord').onkeydown = validate;
}


function validate() {

    // Gets searchword from input field.
    input = document.getElementById('searchWord').value.trim();

    /** Validity parameter. */
    let valid = ((input.length >= 3) ? false : true);

    document.getElementById('searchBtn').disabled = valid;
}


/**
 * EventHandler for search-request ActionEvent.
 * 
 * Formats the search input and distributes
 * the arguments to the appropriate search-engine.
 */
function actionSearch() {

    // Gets searchword from input field and formats it correctly.
    input = document.getElementById('searchWord').value;
    input = input.toLowerCase().trim();

    if (input.isEmpty()) return;

    // If searchword contains only numbers, search by PatientID.
    if (REGEX_PATIENT_ID.test(input)) {
        searchByPatientID(input);
        window.alert("PatientID");
    } 
    // If searchword is a valid name format, search by name.
    else if (REGEX_NAME.test(input)) {
        searchByName(input);
        window.alert("Name");
    }
    // Else, searchword is invalid.
    else {
        window.alert("Invalid search word: " + input);
    }
}


/**
 * Query-search for patient in DB
 * by PatientID.
 * 
 * @param input PatientID
 */
function searchByPatientID(input) {
    /*
    TODO

    1. Connect to database
    2. SELECT * FROM Patients WHERE ID = input
    3. If found: a, else b
    a.
        a.1. Open patientpage.html
        a.2. Fill inn patient-info
    b. 
        b.1. Alert: patient not found
    */
}


/**
 * Query-search for patient in DB
 * by name.
 * 
 * @param input Name
 */
function searchByName(input) {
    /*
    TODO
    
    1. Connect to database
    2. SELECT * FROM Patients WHERE Name = input
    3. If found: a, else b
    a.
        a.1. Open patientpage.html
        a.2. Fill inn patient-info
    b. 
        b.1. Alert: patient not found
    */
}