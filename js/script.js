const gridContainer = document.querySelector('.grid-container');
const startBtn = document.getElementById('start-btn');
const instructions = document.querySelector('.instructions');
const difficultySelect = document.getElementById('difficulty-select');

let max = 100;

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

        for (let i = 1; i <= max; i++) {
            const newElement = document.createElement('div');
            newElement.classList.add('box',classMode);
            console.log(newElement);

            const newItem = `<span>${i}</span>`;
            newElement.innerHTML = newItem;

            newElement.addEventListener('click',
                function() {
                    this.classList.add('active')
                    console.log(this);
                }
            )

            gridContainer.append(newElement);
        }

        console.log(gridContainer);
    }
)