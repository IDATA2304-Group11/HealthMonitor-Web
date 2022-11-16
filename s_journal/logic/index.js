window.onload = init;


const path = "server/patient/getpatientby";
const IMGPATH = '../../img/';

function init() {
    let pid = localStorage.getItem('PID');
    document.getElementById('test').innerHTML = "PID: " + pid;
    document.getElementById('logoPic').src = IMGPATH + 'logo.png';
}