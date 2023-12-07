import { quizQuestions } from './questions.js';

let score = 0;

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

        // Reset to unchecked
        document.querySelectorAll('input[name="user-answer"]').forEach((radio) => {
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
    console.log(`User answer: ${userInput}\nCorrect answer: ${questionAnswer}\n\n`)
    if (userInput === questionAnswer) {
        score++;
    }
};

const questionAnsweredScreen = () => {

}

const askQuestion = (currentQuestionIndex) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    let timeoutId;

    displayCurrentQuestion(currentQuestion);

    document.getElementById('user-pressed-next').addEventListener('click', () => {
        clearTimeout(timeoutId);  // Clear the previous timeout

        const userAnswer = document.querySelector('input[name="user-answer"]:checked');
        
        if (userAnswer) {
            const selectedAnswer = userAnswer.id;
            correctAnswer(selectedAnswer, currentQuestion.correctAnswer);
        } else {
            console.log("Please select an answer");
            return;
        }

        timeoutId = setTimeout(() => {
            if (currentQuestionIndex + 1 < quizQuestions.length) {
                askQuestion(currentQuestionIndex + 1);
            } else {
                console.log(`Quiz completed. Your score: ${score}`);
            }
        }, 0); // TODO: Adjust the delay as needed
    });
};

window.askQuestion = askQuestion;

export const startQuiz = () => {
    let questionIndex = 0;

    askQuestion(questionIndex);
};
