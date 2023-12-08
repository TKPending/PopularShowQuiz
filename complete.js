const completeDisplayText = (finalScore) => {
    if (finalScore < 3) {
        return {
            message: `<h1 class="x-auto text-4xl text-center transition duration-500">${finalScore} / 7<br> :/<br>Are you sure you watched these shows before?</h1>`,
            bgColor: 'red'
        };
    } else if (finalScore >= 3 && finalScore < 5) {
        return {
            message: `<h1 class="x-auto text-4xl text-center transition duration-500">${finalScore} / 7<br>:(<br>Not bad. Haven't watched these shows in a while?</h1>`,
            bgColor: 'orange'
        };
    } else {
        return {
            message: `<h1 class="x-auto text-4xl text-center transition duration-500">${finalScore} / 7<br>:)<br>TV Fanatic. Recommend some TV shows to me</h1>`,
            bgColor: 'green'
        };
    }
};



export const quizCompletion = (finalScore) => {
    const completeDisplay = completeDisplayText(finalScore);

    // Display the result message and set the background color
    document.body.innerHTML = completeDisplay.message;
    document.body.style.backgroundColor = completeDisplay.bgColor;
};
