import { quizQuestions } from './questions.js';

let score = 0;
let currentQuestionIndex = 0;
let quizLength = quizQuestions.length

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
}

// TODO: Occasionally the answer for the next question is being shown for current question
const correctAnswer = (userInput, questionAnswer) => {
    if (userInput === questionAnswer) {
        score++;
    }
};

const questionAnsweredScreen = () => {

}

const askQuestion = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    let userAnswer;

    displayCurrentQuestion(currentQuestion);

    document.getElementById('quiz-options').addEventListener('submit', (event) => {
        event.preventDefault();

        userAnswer = document.querySelector('input[name="user-answer"]:checked');

        // Check User Answer
        if (userAnswer) {
            const selectedAnswer = userAnswer.id;
            correctAnswer(selectedAnswer, currentQuestion.correctAnswer);
            console.log(`Question: ${currentQuestion.question}`);
            console.log(`User's Answer: ${selectedAnswer}`);
            console.log(`Correct Answer: ${currentQuestion.correctAnswer}`);
        } else {
            console.log("Please select an answer");
            return;
        }

        currentQuestionIndex += 1;
        if (currentQuestionIndex < quizLength) {
            console.log(currentQuestionIndex);
            askQuestion(currentQuestionIndex); 
        } else {
            console.log(`Quiz completed. Your score: ${score}`);
        }
    });
};

window.askQuestion = askQuestion;

export const startQuiz = () => {
    askQuestion();
};

