import { quizQuestions } from './questions.js';
import { quizCompletion } from './complete.js';

let score = 0;
const quizLength = quizQuestions.length;

export const hideQuiz = () => {
    document.getElementById("question").style.display="none";
    document.getElementById("quiz-options").style.display="none";
}

const displayQuestion = (question) => {
    if (question) {
        document.getElementById('question').textContent = question;
    } else {
        console.log("Error: Problem with rendering question");
    }
};

const resetButtons = () => {
    const radioButtons = document.querySelectorAll('.user-answer-radio');

    radioButtons.forEach((radio) => {
        radio.checked = false;
    });
}

const displayOptions = (options) => {
    if (options) {
        document.getElementById('question-one').textContent = options.a;
        document.getElementById('question-two').textContent = options.b;
        document.getElementById('question-three').textContent = options.c;
        document.getElementById('question-four').textContent = options.d;

        resetButtons();

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

const finishedQuiz = (username) => {
    hideQuiz()

    const completeMessage = document.getElementById('complete-message');

    completeMessage.style.display = "block";
    completeMessage.innerHTML = `Congratulations ${username} on finishing the quiz!<br>Loading Results.....`;

    setTimeout(() => {
        completeMessage.style.display="none";
    }, 2000);
}

export const startQuiz = async (username) => {
    for (let i = 0; i < quizLength; i++) {
        const currentQuestion = quizQuestions[i];
        await askQuestion(currentQuestion);
    }

    finishedQuiz(username);
    
    setTimeout(() => {
        quizCompletion(score)
    }, 2100);
    console.log(`Quiz completed. Your score: ${score}`);
};
