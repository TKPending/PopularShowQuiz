// Create Submit Page
let score = 0;

export const displayQuestion = (question) => {
    if (question) {
        document.getElementById('question').textContent = question;
    } else {
        console.log("Error: Problem with the question")
    }
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