let count = 0;
const szam = document.getElementById('count');
const novekvo = document.getElementById('novekvo');
const csokkeno = document.getElementById('csokkeno');

novekvo.addEventListener('click', function() {
    count++;
    updateDisplay();
});

csokkeno.addEventListener('click', function() {
    count--;
    updateDisplay();
});

function updateDisplay() {
    szam.textContent = count;
    if (count > 0) {
        szam.style.color = 'green';
    } else if (count < 0) {
        szam.style.color = 'red';
    } else {
        szam.style.color = 'black';
    }
}
