import { showQuiz, hideQuiz } from './index.js';
import { startQuiz } from './quiz.js';
import { displayResults } from './results-logic.js';
import { quizQuestions } from './questions.js';

const tryAgainButton = document.getElementById('try-again');
const showResultsButton = document.getElementById('show-results');

const completedMessage = document.getElementById('completed-message');
const finishedSection = document.getElementById('finished-section');

const finalResults = document.getElementById("final-results");
const finalResultSection = document.getElementById("results-section");

let gUsername;
let gUserAnswerArr;

const completeDisplayText = (finalScore) => {
    if (finalScore < 3) {
        return {
            message: `<h1 class="mx-auto text-white text-xl md:text-4xl text-center transition duration-500">${finalScore} / 7<br> :/<br>Are you sure you watched these shows before?</h1>`,
            bgColor: 'red'
        };
    } else if (finalScore >= 3 && finalScore < 5) {
        return {
            message: `<h1 class="mx-auto text-white text-xl md:text-4xl text-center transition duration-500">${finalScore} / 7<br>:(<br>Not bad. Haven't watched these shows in a while?</h1>`,
            bgColor: 'orange'
        };
    } else {
        return {
            message: `<h1 class="mx-auto text-white text-xl md:text-4xl text-center transition duration-500">${finalScore} / 7<br>:)<br>TV Fanatic. Recommend some TV shows to me</h1>`,
            bgColor: 'green'
        };
    }
};

const showButtons = () => {
    finishedSection.style.display = "flex";
}

const resetButton = (buttonName) => { 
    buttonName.style.backgroundColor = "transparent";
    buttonName.style.border = "2px solid white";
}

const hideCompletePage = () => {
    finishedSection.style.display = "none";
    document.body.style.backgroundColor = "white";
    completedMessage.style.display = "none";

    resetButton(tryAgainButton);
    resetButton(showResultsButton);

    showQuiz();
}
 
const restartQuiz = () => {
    hideCompletePage();
    
    console.log("Restarting Quiz...")
    startQuiz(gUsername);
}

const showResults = () => {
    hideQuiz();

    finalResults.style.display = "block";
    finalResultSection.display = "flex";
    document.getElementById("show-result-text").style.display = "block";

    displayResults(gUserAnswerArr, quizQuestions );
}

const showFinalResults = () => {
    hideCompletePage();

    console.log("Showing Results...");
    showResults();
}

export const quizCompletion = (finalScore, username, userAnswerArr) => {
    gUsername = username;
    gUserAnswerArr = userAnswerArr;
    const completeDisplay = completeDisplayText(finalScore);

    completedMessage.style.display = "block";
    completedMessage.innerHTML = completeDisplay.message;
    document.body.style.backgroundColor = completeDisplay.bgColor;

    setTimeout(() => {
        showButtons();
    }, 3000);
}; 

// Show Results
document.addEventListener("DOMContentLoaded", () => {
    showResultsButton.addEventListener("click", () => {
        showResultsButton.style.backgroundColor = "blue";
        showFinalResults(gUserAnswerArr);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    tryAgainButton.addEventListener("click", () => {
        tryAgainButton.style.backgroundColor = "blue";
        restartQuiz();
    });
});
