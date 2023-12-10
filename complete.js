import { showQuiz } from './index.js';
import { startQuiz } from './quiz.js';

const tryAgain = document.getElementById('try-again');
const showResults = document.getElementById('show-results');

const completedMessage = document.getElementById('completed-message');
const finishedSection = document.getElementById('finished-section');
let gUsername;

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

const hideCompletePage = () => {
    finishedSection.style.display = "none";
    document.body.style.backgroundColor = "white";
    completedMessage.style.display = "none";
    tryAgain.style.backgroundColor = "white";

    showQuiz();
}
 
const restartQuiz = () => {
    console.log(`Restarting Quiz\nName: ${gUsername}`);
    hideCompletePage();
    
    console.log("Restarting Quiz...")
    startQuiz(gUsername);
}

export const quizCompletion = (finalScore, username) => {
    gUsername = username;
    const completeDisplay = completeDisplayText(finalScore);

    completedMessage.style.display = "block";
    completedMessage.innerHTML = completeDisplay.message;
    document.body.style.backgroundColor = completeDisplay.bgColor;

    setTimeout(() => {
        showButtons();
    }, 3000);
}; 

document.addEventListener("DOMContentLoaded", () => {
    tryAgain.addEventListener("click", () => {
        tryAgain.style.backgroundColor = "blue";
        restartQuiz();
    });
});
