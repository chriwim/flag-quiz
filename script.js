let countries = [];
let currentFlagIndex = 0;

fetch('countries.json')
    .then(response => response.json())
    .then(data => {
        countries = data;
        loadFlag();
    })
    .catch(error => console.error('Error loading countries:', error));

function loadFlag() {
    currentFlagIndex = Math.floor(Math.random() * countries.length);
    const flagData = countries[currentFlagIndex];
    document.getElementById('flag').innerText = flagData.flag;
    
    const options = generateOptions(flagData.name);
    for (let i = 0; i < options.length; i++) {
        const optionBtn = document.getElementById(`option${i + 1}`);
        optionBtn.innerText = options[i];
        optionBtn.classList.remove('correct', 'incorrect');
        optionBtn.disabled = false;
    }
    document.getElementById('result').innerText = '';
}

function generateOptions(correctAnswer) {
    let options = [correctAnswer];
    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random() * countries.length);
        const randomCountry = countries[randomIndex].name;
        if (!options.includes(randomCountry)) {
            options.push(randomCountry);
        }
    }
    return shuffleArray(options);
}

function checkAnswer(optionId) {
    const selectedOption = document.getElementById(optionId);
    const correctAnswer = countries[currentFlagIndex].name;

    if (selectedOption.innerText === correctAnswer) {
        selectedOption.classList.add('correct');
        document.getElementById('result').innerText = 'Correct!';
    } else {
        selectedOption.classList.add('incorrect');
        document.getElementById('result').innerText = `Wrong! The correct answer is ${correctAnswer}`;
        // Highlight the correct answer
        for (let i = 1; i <= 4; i++) {
            const optionBtn = document.getElementById(`option${i}`);
            if (optionBtn.innerText === correctAnswer) {
                optionBtn.classList.add('correct');
                break;
            }
        }
    }

    // Disable all buttons after an answer is selected
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`option${i}`).disabled = true;
    }

    setTimeout(() => {
        loadFlag();
    }, 2000);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
