
const homeBtn = document.getElementById('addCount-1');
const aboutBtn = document.getElementById('addCount-2');
const servicesBtn = document.getElementById('addCount-3');
const caseBtn = document.getElementById('addCount-4');
const newsBtn = document.getElementById('addCount-5');
const approvalsBtn = document.getElementById('addCount-6');
const careersBtn = document.getElementById('addCount-7');
const contactBtn = document.getElementById('addCount-8');
const commBtn = document.getElementById('addCount-9');
const resiBtn = document.getElementById('addCount-10');
const allBtn = document.getElementById('addCount-11');

// console.log(homeBtn);


const API = 'https://api.countapi.xyz';
const namespace = 'alarmline.co.uk';


homeBtn.addEventListener('click', addCounter('homePage'));
aboutBtn.addEventListener('click', addCounter('aboutPage'));
servicesBtn.addEventListener('click', addCounter('servicesPage'));
caseBtn.addEventListener('click', addCounter('casePage'));
newsBtn.addEventListener('click', addCounter('newsPage'));
approvalsBtn.addEventListener('click', addCounter('approvalsPage'));
careersBtn.addEventListener('click', addCounter('careersPage'));
contactBtn.addEventListener('click', addCounter('contactPage'));
commBtn.addEventListener('click', addCounter('commPage'));
resiBtn.addEventListener('click', addCounter('resiPage'));
// allBtn.addEventListener('click', addCounter(''));



function addCounter(key) {
    console.log(key);
    fetch(`${API}/update/${namespace}/${key}?amount=${getRandomInteger()}`);
}

function getRandomInteger() {
    const num = Math.floor(Math.random() * 10) + 1;
    return num;
}


// create?namespace=alarmline.co.uk&update_upperbound=21&key=home

// https://api.countapi.xyz/create?namespace=alarmline.co.uk&update_upperbound=21&enable_reset=1&key=homePage