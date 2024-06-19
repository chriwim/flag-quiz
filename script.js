const countries = [
    { name: "Afghanistan", flag: "🇦🇫" },
    { name: "Albania", flag: "🇦🇱" },
    { name: "Algeria", flag: "🇩🇿" },
    { name: "Andorra", flag: "🇦🇩" },
    { name: "Angola", flag: "🇦🇴" },
    { name: "Antigua and Barbuda", flag: "🇦🇬" },
    { name: "Argentina", flag: "🇦🇷" },
    { name: "Armenia", flag: "🇦🇲" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Austria", flag: "🇦🇹" },
    { name: "Azerbaijan", flag: "🇦🇿" },
    // Add more countries as needed
    { name: "United States", flag: "🇺🇸" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "France", flag: "🇫🇷" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "China", flag: "🇨🇳" },
    { name: "India", flag: "🇮🇳" },
    // Add more countries as needed
];

let currentFlagIndex = 0;

window.onload = function() {
    loadFlag();
};

function loadFlag() {
    currentFlagIndex = Math.floor(Math.random() * countries.length);
    const flagData = countries[currentFlagIndex];
    document.getElementById('flag').innerText = flagData.flag;
    
    const options = generateOptions(flagData.name);
    for (let i = 0; i < options.length; i++) {
        document.getElementById(`option${i + 1}`).innerText = options[i];
    }
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
    const selectedOption = document.getElementById(optionId).innerText;
    const correctAnswer = countries[currentFlagIndex].name;

    if (selectedOption === correctAnswer) {
        document.getElementById('result').innerText = 'Correct!';
    } else {
        document.getElementById('result').innerText = `Wrong! The correct answer is ${correctAnswer}`;
    }

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
    return array;
}
