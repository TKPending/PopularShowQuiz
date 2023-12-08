import { quizQuestions } from './questions.js';

let score = 0;
const quizLength = quizQuestions.length;

const displayQuestion = (question) => {
    if (question) {
        document.getElementById('question').textContent = question;
    } else {
        console.log("Error: Problem with rendering question");
    }
};

const displayOptions = (options) => {
    if (options) {
        document.getElementById('question-one').textContent = options.a;
        document.getElementById('question-two').textContent = options.b;
        document.getElementById('question-three').textContent = options.c;
        document.getElementById('question-four').textContent = options.d;

        // Add a common class to all radio buttons
        const radioButtons = document.querySelectorAll('.user-answer-radio');

        // Reset to unchecked
        radioButtons.forEach((radio) => {
            radio.checked = false;
        });
    } else {
        console.log("Error: Problem with rendering options.")
    }
};

const displayCurrentQuestion = (currentQuestion) => {
    displayQuestion(currentQuestion.question);
    displayOptions(currentQuestion.options);
};

const checkAnswer = (userInput, questionAnswer) => {
    return userInput === questionAnswer;
};

const askQuestion = async (currentQuestion) => {
    displayCurrentQuestion(currentQuestion);

    return new Promise((resolve) => {
        const handleAnswer = (event) => {
            event.preventDefault();

            const userAnswer = document.querySelector('input[name="user-answer"]:checked');

            if (userAnswer) {
                const selectedAnswer = userAnswer.id;
                const isCorrect = checkAnswer(selectedAnswer, currentQuestion.correctAnswer);
                score += isCorrect ? 1 : 0;

                console.log(`Question: ${currentQuestion.question}\nUser Answer: ${selectedAnswer}\nCorrect Answer: ${currentQuestion.correctAnswer}\nCurrent Score: ${score}`);

                document.getElementById('quiz-options').removeEventListener("submit", handleAnswer);
                resolve();
            } else {
                console.log('Please select an answer');
            }
        };

        document.getElementById('quiz-options').addEventListener("submit", handleAnswer);
    });
};

export const startQuiz = async () => {
    for (let i = 0; i < quizLength; i++) {
        const currentQuestion = quizQuestions[i];
        await askQuestion(currentQuestion);
    }

    console.log(`Quiz completed. Your score: ${score}`);
};
