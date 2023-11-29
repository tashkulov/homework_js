const buttons = document.body.getElementsByTagName('button');

for (const button of buttons) {
    button.addEventListener('click', function() {
        this.textContent = 'X';

        checkForWin();
        // После каждого хода проверяем на выигрыш
        if (!checkForWin()) {
            placeRandomO();
            // После каждого хода нолика снова проверяем на выигрыш
            checkForWin();
        }
    });
}

function checkForWin() {
    const f1 = document.getElementById('f1').textContent;
    const s2 = document.getElementById('s2').textContent;
    const t3 = document.getElementById('t3').textContent;
    const f4 = document.getElementById('f4').textContent;
    const f5 = document.getElementById('f5').textContent;
    const s6 = document.getElementById('s6').textContent;
    const s7 = document.getElementById('s7').textContent;
    const e8 = document.getElementById('e8').textContent;
    const e9 = document.getElementById('e9').textContent;

    const combinations = [
        [f1, s2, t3],
        [f4, f5, s6],
        [s7, e8, e9],
        [f1, f4, s7],
        [s2, f5, e8],
        [t3, s6, e9],
        [f1, f5, e9],
        [t3, f5, s7]
    ];

    for (let combination of combinations) {
        if (combination.every(elem => elem === 'X')) {
            alert('X win');
            return true;
        } else if (combination.every(elem => elem === 'O')) {
            alert('O win');
            return true;
        }
    }

    return false;
}

function placeRandomO() {
    const buttons = document.body.getElementsByTagName('button');
    let placedO = false;

    while (!placedO) {
        const randomIndex = Math.floor(Math.random() * buttons.length);
        const randomButton = buttons[randomIndex];

        if (randomButton.textContent !== 'X' && randomButton.textContent !== 'O') {
            randomButton.textContent = 'O';
            placedO = true;
        }
    }
}
