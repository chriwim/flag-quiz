const flags = [
    {
        symbol: '🇺🇸', // USA
        correct: 'United States',
        options: ['United States', 'Canada', 'United Kingdom', 'Australia']
    },
    {
        symbol: '🇨🇦', // Canada
        correct: 'Canada',
        options: ['Canada', 'United States', 'United Kingdom', 'Australia']
    },
    {
        symbol: '🇬🇧', // United Kingdom
        correct: 'United Kingdom',
        options: ['United Kingdom', 'United States', 'Canada', 'Australia']
    },
    {
        symbol: '🇦🇺', // Australia
        correct: 'Australia',
        options: ['Australia', 'United States', 'Canada', 'United Kingdom']
    },
    // Add more flag objects here
];

let currentFlagIndex = 0;

window.onload = function() {
    loadFlag();
};

function loadFlag() {
    const flagData = flags[currentFlagIndex];
    document.getElementById('flag').innerText = flagData.symbol;
    shuffleArray(flagData.options);

    for (let i = 0; i < flagData.options.length; i++) {
        document.getElementById(`option${i + 1}`).innerText = flagData.options[i];
    }
}

function checkAnswer(optionId) {
    const selectedOption = document.getElementById(optionId).innerText;
    const correctAnswer = flags[currentFlagIndex].correct;

    if (selectedOption === correctAnswer) {
        document.getElementById('result').innerText = 'Correct!';
    } else {
        document.getElementById('result').innerText = 'Wrong! The correct answer is ' + correctAnswer;
    }

    currentFlagIndex = (currentFlagIndex + 1) % flags.length;
    setTimeout(() => {
        document.getElementById('result').innerText = '';
        loadFlag();
    }, 2000);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
