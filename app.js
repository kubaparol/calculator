const resultPanel = document.querySelector('.result-panel');
const prevNumber = resultPanel.querySelector('.prev-number');
const currSign = resultPanel.querySelector('.curr-sign');
const currNumber = resultPanel.querySelector('.curr-number');
const numbersPanel = document.querySelector('.numbers-panel');
const numbersElList = numbersPanel.querySelectorAll('.number');
const cleanBtn = numbersPanel.querySelector('.clean')
const operatorBtnsList = numbersPanel.querySelectorAll('.sign');
const equalsBtn = numbersPanel.querySelector('.equals');
const historyList = document.querySelector('.history__list');

let a = '';
let b = '';
let operator = '';
let result = '';

numbersElList.forEach(element => {
    element.addEventListener('click', displayNumber);
})

operatorBtnsList.forEach(element => {
    element.addEventListener('click', chooseOperator);
})

equalsBtn.addEventListener('click', showResult);
cleanBtn.addEventListener('click', clean);
historyList.addEventListener('click', deleteHistoryItem);


function displayNumber() {
    if(this.textContent === '.' && currNumber.textContent.includes('.')) return;
    if(this.textContent === '.' && currNumber.textContent === '') currNumber.textContent = '0';
    currNumber.textContent += this.textContent;
}

function chooseOperator() {
    if(currNumber.textContent === '' && this.textContent === '-') {
        currNumber.textContent = '-';
        return;
    } else if(currNumber === '') {
        return;
    }
    if(currSign.textContent !== '') {
        showResult();
    }
    if(currNumber.textContent === '' || currNumber.textContent === '-') return;
    
    prevNumber.textContent = currNumber.textContent;
    currSign.textContent = this.textContent;
    currNumber.textContent = '';
}

function showResult() {
    if(currNumber.textContent === '' || prevNumber.textContent === '') return;
    
    a = Number(currNumber.textContent);
    b = Number(prevNumber.textContent);
    operator = currSign.textContent;
    
    switch(operator) {
        case '^': result = b ** a; break;
        case '/': result = b / a; break;
        case 'x': result = a * b; break;
        case '-': result = b - a; break;
        case '+': result = a + b; break;
    }
    
    currNumber.textContent = result;
    prevNumber.textContent = '';
    currSign.textContent = '';
    addToHistory();
}

function clean() {
    prevNumber.textContent = '';
    currSign.textContent = '';
    currNumber.textContent = '';
}

function addToHistory() {
    const newLi = document.createElement('li');
    newLi.classList.add('list__item');
    newLi.textContent = `${b} ${operator} ${a} = ${result}`
    historyList.appendChild(newLi);
}

function deleteHistoryItem(e) {
    const item = e.target;
    if(item.classList.contains('list__item')) {
        item.remove();
    }
}