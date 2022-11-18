window.onload = init;


const path = "server/patient/getpatientby";
const IMGPATH = '../../img/';

function init() {
    let pid = localStorage.getItem('PID');
    document.getElementById('test').innerHTML = "PID: " + pid;
    let details = document.getElementById('details');
    let br = document.createElement('br');
    details.innerHTML = "User: Dr. " + eval(localStorage.getItem('DRN'));
    details.appendChild(br);
    details.innerHTML += "Doctor ID: " + localStorage.getItem('UID');
    document.getElementById('logoPic').src = IMGPATH + 'logo.png';
}