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
    document.getElementById("finished-section").style.display = "flex";
}


export const quizCompletion = (finalScore) => {
    const completeDisplay = completeDisplayText(finalScore);

    document.getElementById("completed-message").style.display = "block";
    document.getElementById("completed-message").innerHTML = completeDisplay.message;
    document.body.style.backgroundColor = completeDisplay.bgColor;

    setTimeout(() => {
        showButtons();
    }, 3000);
}; 