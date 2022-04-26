const gridContainer = document.querySelector('.grid-container');
const startBtn = document.getElementById('start-btn');
const instructions = document.querySelector('.instructions');
const difficultySelect = document.getElementById('difficulty-select');
const finalResult = document.getElementById('final-result');
const endTitle = finalResult.querySelector('h2');
const numberOfBombs = 16;

let max = 100;

let endMessage = '';

startBtn.addEventListener('click',
    function() {
        let score = 0;
        instructions.classList.add('d-none');
        finalResult.classList.add('d-none');
        endTitle.innerHTML = '';
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
                        endMessage = 'Hai perso! Il tuo punteggio è di: '+score;
                        finalResult.classList.remove('d-none');
                        endTitle.classList.remove('text-green');
                        endTitle.classList.add('text-red');
                    } else {
                        this.classList.add('active', 'no-pointer-events');
                        console.log(this);
                        score++;
                    }

                    if (score >= (max - numberOfBombs)) {
                        endMessage = 'Complimenti, hai vinto!!! Il tuo punteggio è di: '+score;
                        finalResult.classList.remove('d-none');
                        endTitle.classList.remove('text-red');
                        endTitle.classList.add('text-green');
                    } 

                    endTitle.innerHTML = endMessage;
                    console.log(score);
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