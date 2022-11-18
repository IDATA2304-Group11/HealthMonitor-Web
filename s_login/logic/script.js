
window.onload = init;

const REGEX_UID = /^\d+$/;
const REGEX_PSW = /^[a-z0-9]+$/i;


function init() {
    document.getElementById('login').onclick = login;
    document.getElementById('id').onkeydown = function(ev) {
        if (ev.key === "Enter") {
            ev.preventDefault();
            document.getElementById('login').click();
        }
    }
    document.getElementById('pswrd').onkeydown = function(ev) {
        if (ev.key === "Enter") {
            ev.preventDefault();
            document.getElementById('login').click();
        }
    }
}

function login() {
    let username = document.getElementById('id').value;
    let password = document.getElementById('pswrd').value;

    localStorage.setItem('UID', username);

    if (username.length === 0 || password.length === 0) return;
    if (!REGEX_UID.test(username) || !REGEX_PSW.test(password)) {
        document.getElementById('message').innerHTML = "Invalid username or password";
        console.log(username + " " + password);
        console.log(REGEX_UID.test(username));
        console.log(REGEX_PSW.test(password));
        clear();
        return;
    }
    const xhttp   = new XMLHttpRequest();
    xhttp.onload = function() { 
        let response = this.responseText;
        if (response != "null" && response != null) {
            accessPage(response)
            console.log(response);
            clear();
        } else {
            document.getElementById('message').innerHTML = "Invalid username or password";
            console.log(response);
        }
    };
    xhttp.open('GET', "s_login/php/login.php?q=" + username + ";" + password);
    xhttp.send();
}

function accessPage(name) {
    localStorage.setItem('DRN', name);
    window.location.replace("../../s_index/index.html");
}

function clear() {
    document.getElementById('id').value = '';
    document.getElementById('pswrd').value = '';
}