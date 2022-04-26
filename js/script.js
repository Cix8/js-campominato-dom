const gridContainer = document.querySelector('.grid-container');
const startBtn = document.getElementById('start-btn');
const instructions = document.querySelector('.instructions');
const difficultySelect = document.getElementById('difficulty-select');
const finalResult = document.getElementById('final-result');
const endTitle = finalResult.querySelector('h2');
const numberOfBombs = 16;

let max = 100;

let score = 0;
let endMessage = '';

startBtn.addEventListener('click', mainGame);

//              MAIN-GAME FUNCTION

/**
 * Description: is the function that regulates the game logic and the game screen according to the user's click
 */
function mainGame() {
    score = 0;
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
    generateEnemiesInBox(bombArray, numberOfBombs, max);

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
                    endMessage = 'Complimenti, hai raggiunto il punteggio massimo di: '+score+'. Hai vinto!!!';
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

//              UTILITY-FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * Description: this function builds an array with 'enemies' and their relative coordinates based on the grid-size
 * @param {Array} enemiesArray -> an empty array where we are going to push the enemies
 * @param {Number} numberOfEnemies -> the final length of the enemiesArray
 * @param {Number} maxBoxNumber -> the max numerical value of the coordinates to be assigned to each enemy
 */
function generateEnemiesInBox(enemiesArray, numberOfEnemies, maxBoxNumber) {
    while (enemiesArray.length < numberOfEnemies) {
        const rndNumber = getRndInteger(1, maxBoxNumber);
        console.log(rndNumber);
        if (!enemiesArray.includes(rndNumber)) {
            enemiesArray.push(rndNumber);
        }
    }

    console.log(enemiesArray);
}