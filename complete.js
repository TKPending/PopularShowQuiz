const completeDisplay = {
    "red": {
        message: '<h1 class="x-auto text-4xl text-center transition duration-500">:/<br>Are you sure you watched these shows before?</h1>',
        bgColor: 'red'
    }, 
    "orange": {
        message: '<h1 class="x-auto text-4xl text-center transition duration-500">:(<br>Not bad. Haven\'t watched these shows in a while?</h1>',
        bgColor: 'orange'
    },
    "green": {
        message: '<h1 class="x-auto text-4xl text-center transition duration-500">:)<br>TV Fanatic. Recommend some TV shows to me</h1>',
        bgColor: 'green'
    }
 }


export const quizCompletion = (finalScore) => {
    let resultDisplay;
    
    if (finalScore < 3) {
        resultDisplay = completeDisplay.red;
    } else if (finalScore >= 3 && finalScore < 5) {
        resultDisplay = completeDisplay.orange;
    } else {
        resultDisplay = completeDisplay.green;
    }

    // Display the result message and set the background color
    document.body.innerHTML = resultDisplay.message;
    document.body.style.backgroundColor = resultDisplay.bgColor;
};
