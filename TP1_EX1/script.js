document.addEventListener('DOMContentLoaded', (event) => {
    let easy = document.querySelector('#easy');
    let medium = document.querySelector('#medium');
    let hard = document.querySelector('#hard');
    let startButton = document.querySelector('#startButton');
    let numberInput = document.querySelector('#number');
    let attempts = 0;
    let maxAttempts = 0;
    let minRange = 1;
    let maxRange = 25;

    easy.addEventListener('click', () => {
        let newnode = document.createElement('p');
        newnode.innerText = 'Tu as 3 tentatives';
        document.body.appendChild(newnode);
        maxAttempts = 3;
        attempts = 0;
        maxRange = 25;  
    });

    medium.addEventListener('click', () => {
        let newnode = document.createElement('p');
        newnode.innerText = 'Tu as 5 tentatives';
        document.body.appendChild(newnode);
        maxAttempts = 5;
        attempts = 0;
        maxRange = 50;  
    });

    hard.addEventListener('click', () => {
        let newnode = document.createElement('p');
        newnode.innerText = 'Tu as 7 tentatives';
        document.body.appendChild(newnode);
        maxAttempts = 7;
        attempts = 0;
        maxRange = 100;  
    });

    startButton.addEventListener('click', () => {
        if (attempts < maxAttempts) {
            CheckNumber(minRange, maxRange);  
            attempts++;
        } else {
            alert('le maximum des tentatives est atteint');
            startButton.disabled = true;
            numberInput.disabled = true;
        }
    });

    numberInput.addEventListener('input', () => {
        let value = numberInput.value;
        if (isNaN(value)) {
            numberInput.value = value.slice(0, -1);
            alert('Please enter a valid number');
        }
    });
});

function CheckNumber(min, max) {
    let number = document.getElementById('number').value;
    let randomnumber = generateRandomNumber(min, max);
    if (number == randomnumber) {
        alert('tu as gagné');
    } else if (number > randomnumber) {
        alert('Trop grand');
    } else {
        alert('Trop petit');
    }
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

