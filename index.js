// Main Tasks:
//     - "Changing page" after pressing submit
//     - Keep track of correct answers
//     - Use JS to change text
//     - Use JS to display elements


// Aim of the intro screen:
//     Hide question section
//     Keep track of name
//     Move to question when next is pressed

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
    document.getElementById("home-text").style.display="none";
    document.getElementById("welcome-screen-input").style.display="none";
}

const checkName = (str) => {
    const regex = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    return regex.test(str);
}


function nameOnClick() {
    document.getElementById("welcome-screen-input").addEventListener("submit", function (event) {
        event.preventDefault(); 

        username = document.getElementById("player-name").value;
        
        if (checkName(username)) {
            console.log("Invalid characters in the name");
        } else {
            hideHomeScreen();
            showQuiz();
        }
    });
}


nameOnClick()
