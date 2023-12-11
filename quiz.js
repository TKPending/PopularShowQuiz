import { quizQuestions } from './questions.js';
import { quizCompletion } from './complete.js';
import { hideQuiz } from './index.js';

const quizLength = quizQuestions.length;
let userAnswer;

const displayQuestion = (question) => {
    if (question) {
        document.getElementById('question').textContent = question;
    } else {
        console.log("Error: Problem with rendering question");
    }
};

const resetButtons = () => {
    const options = ["option-one", "option-two", "option-three", "option-four"];

    for (const item of options) {
        document.getElementById(item).style.backgroundColor = "white";
    }

    // TODO: Transition smoother
    // document.getElementById('user-pressed-next').style.backgroundColor = "white";
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

const askQuestion = async (currentQuestion, score, userAnswerArr) => {
    displayCurrentQuestion(currentQuestion);

    return new Promise((resolve) => {
        const handleAnswer = (event) => {
            event.preventDefault();

            if (userAnswer) {
                userAnswerArr.push(userAnswer);

                const isCorrect = checkAnswer(userAnswer, currentQuestion.correctAnswer);
                score += isCorrect ? 1 : 0;

                document.getElementById('quiz-options').removeEventListener("submit", handleAnswer);
                resolve(score);
            } else {
                console.log('Please select an answer');
            }
        };

        document.getElementById('quiz-options').addEventListener("submit", handleAnswer);
    });
};


const finishedQuiz = (username) => {
    hideQuiz()

    const completeMessage = document.getElementById('completed-message');

    completeMessage.style.display = "block";
    completeMessage.innerHTML = `Congratulations ${username} on finishing the quiz!<br>Loading Results.....`;

    setTimeout(() => {
        completeMessage.style.display="none";
    }, 2000);
}

export const startQuiz = async (username) => {
    let score = 0;
    const userAnswerArr = [];
    console.log(`Starting Quiz\nScore: ${score}`);

    for (let i = 0; i < quizLength; i++) {
        const currentQuestion = quizQuestions[i];
        score = await askQuestion(currentQuestion, score, userAnswerArr);
    }

    finishedQuiz(username);
    
    setTimeout(() => {
        quizCompletion(score, username, userAnswerArr)
    }, 2100);
    console.log(`Quiz completed. Your score: ${score}`);
};

export const optionBgColor = (selectedOption) => {
    const options = {
        a: "option-one",
        b: "option-two",
        c: "option-three",
        d: "option-four",
    };

    for (const optionId in options) {
        const quizOption = document.getElementById(options[optionId]);
        quizOption.style.backgroundColor = optionId === selectedOption ? "blue" : "";
    }
};

// TODO: Find an efficient way of doing this. DRY
document.getElementById("option-one").addEventListener("click", () => {
    optionBgColor('a');
    userAnswer = 'a';
})

document.getElementById("option-two").addEventListener("click", () => {
    optionBgColor('b');
    userAnswer = 'b';

});

document.getElementById("option-three").addEventListener("click", () => {
    optionBgColor('c');
    userAnswer = 'c';
});

document.getElementById("option-four").addEventListener("click", () => {
    optionBgColor('d');
    userAnswer = 'd';
});
