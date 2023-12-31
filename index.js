import { startQuiz } from './quiz.js';

let username = "";

export const hideQuiz = () => {
    document.getElementById("question").style.display="none";
    document.getElementById("quiz-options").style.display="none";
}

hideQuiz();

export const showQuiz = () => {
    document.getElementById("question").style.display = "block";
    document.getElementById("quiz-options").style.display = "block";
};

const hideHomeScreen = () => {
    document.getElementById("welcome-screen-input").style.display = "none";

    document.getElementById("home-text").innerHTML = `Hello ${username}!<br>There are 7 Questions<br>Good Luck!`;

    setTimeout(() => {
        document.getElementById("home-text").style.display = "none";
    }, 2000);
}


const checkName = (str) => {
    const regex = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    return regex.test(str);
};

const resetColor = (originalBackground, originalBorder) => {
    document.getElementById("user-entered-name").style.backgroundColor = originalBackground;
    document.getElementById("player-name").style.borderColor = originalBorder;
};

const incorrectName = () => {
    const originalBackgroundColor = document.getElementById("user-entered-name").style.backgroundColor;
    const originalBorderColor = document.getElementById("player-name").style.borderColor;

    document.getElementById("user-entered-name").style.backgroundColor = "red";
    document.getElementById("player-name").style.borderColor = "red";

    setTimeout(() => {
        resetColor(originalBackgroundColor, originalBorderColor);
    }, 800);
};

const correctName = () => {
    hideHomeScreen();

    setTimeout(() => {
        showQuiz();
    }, 2000);
};

const nameOnClick = () => {
    const enteredName = document.getElementById("player-name").value;

    if (enteredName) {
        if (checkName(enteredName)) {
            incorrectName();
            console.log("Invalid characters in the name");
        } else {
            username = enteredName;
            correctName();
            startQuiz(username);
        }
    } else {
        // TODO: Change error message
        document.getElementById("player-name").setCustomValidity('Can\'t continue without your name :\\');
    }
};

document.getElementById("welcome-screen-input").addEventListener("submit", function (event) {
    event.preventDefault();
    nameOnClick();
});
