// Create Submit Page
let score = 0;

const displayQuestion = (question) => {
    document.getElementById('question').textContent = question.question;
}

const displayOptions = (options) => {
    document.getElementById('option-one').textContent = options.a;
    document.getElementById('option-two').textContent = options.b;
    document.getElementById('option-three').textContent = options.c;
    document.getElementById('option-four').textContent = options.d;
}

const correctAnswer = (userInput, questionAnswer) => {
    if (userInput == questionAnswer) {
        score++;
    }
}