const gridContainer = document.querySelector('.grid-container');
const startBtn = document.getElementById('start-btn');
const instructions = document.querySelector('.instructions');
const difficultySelect = document.getElementById('difficulty-select');
const numberOfBombs = 16;

let max = 100;

let score = 0;

startBtn.addEventListener('click',
    function() {
        instructions.classList.add('d-none');
        gridContainer.innerHTML = '';
        gridContainer.classList.remove('d-none');
        let gameMode = difficultySelect.value;
        console.log(gameMode);
        let classMode = '';

        if (gameMode === 'easy') {
            max = 100;
            classMode = 'easy-mode';
        } else if (gameMode === 'hard') {
            max = 81;
            classMode = 'hard-mode';
        } else {
            max = 49;
            classMode = 'crazy-mode';
        }

        const bombArray = [];

        while (bombArray.length < numberOfBombs) {
            const rndNumber = getRndInteger(1, max);
            console.log(rndNumber);
            if (!bombArray.includes(rndNumber)) {
                bombArray.push(rndNumber);
            }
        }

        console.log(bombArray);

        for (let i = 1; i <= max; i++) {
            const newElement = document.createElement('div');
            newElement.classList.add('box',classMode);
            console.log(newElement);

            const newItem = `<span>${i}</span>`;
            newElement.innerHTML = newItem;

            newElement.addEventListener('click',
                function() {
                    if (bombArray.includes(i)) {
                        this.classList.add('bomb');
                        console.log('Hai perso! Il tuo punteggio è di: '+score);  
                    } else if (score >= max - numberOfBombs) {
                        this.classList.add('active');
                        console.log('Complimenti, hai vinto!!!');
                    } else {
                        this.classList.add('active')
                        console.log(this);
                        score++;
                    }
                }
            )

            gridContainer.append(newElement);
        }

        console.log(gridContainer);

    }
)

//  UTILITY-FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}