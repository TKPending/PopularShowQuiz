import { displayQuestion } from './quiz.js';

let username = "";

const hideQuiz = () => {
    document.getElementById("question").style.display="none";
    document.getElementById("quiz-options").style.display="none";
}

hideQuiz()

const showQuiz = () => {
    document.getElementById("question").style.display = "block";
    document.getElementById("quiz-options").style.display = "block";
}

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
}

const resetColor = (originalBackground, originalBorder) => {
    document.getElementById("user-entered-name").style.backgroundColor = originalBackground;
    document.getElementById("player-name").style.borderColor = originalBorder;
}

const incorrectName = () => {
    const originalBackgroundColor = document.getElementById("user-entered-name").style.backgroundColor;
    const originalBorderColor = document.getElementById("player-name").style.borderColor;

    document.getElementById("user-entered-name").style.backgroundColor = "red";
    document.getElementById("player-name").style.borderColor = "red";

    setTimeout(() => {resetColor(originalBackgroundColor, originalBorderColor)}, 800)
}

const correctName = () => {
    hideHomeScreen()

    setTimeout(() => {
        showQuiz();
    }, 2000)
}

const nameOnClick = () => {
    document.getElementById("welcome-screen-input").addEventListener("submit", function (event) {
        event.preventDefault(); 

        username = document.getElementById("player-name").value;
        
        if (checkName(username)) {
            incorrectName();
            console.log("Invalid characters in the name");
        } else {
            correctName();
            displayQuestion("New Question");
        }
    });
}


nameOnClick()
