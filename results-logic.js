const userAnswersId = [
    "user-answer-one", "user-answer-two", "user-answer-three",
    "user-answer-four", "user-answer-five", "user-answer-six",
    "user-answer-seven"
]
const correctAnswersId = [
    "correct-answer-one", "correct-answer-two", "correct-answer-three",
    "correct-answer-four", "correct-answer-five", "correct-answer-six",
    "correct-answer-seven"
]


const answerColour = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer ? "green" : 'red';
}

export const displayResults = (userAnswersArr, quizQuestions) => {
    let i = 0;

    for (const obj of quizQuestions) {
        const userAnswerLetter = userAnswersArr[i];
        const userAnswerText = obj.options[userAnswerLetter];

        const correctAnswerLetter = obj.correctAnswer;
        const correctAnswerText = obj.options[correctAnswerLetter];

        // Change background color
        const bgColor = answerColour(userAnswerLetter, correctAnswerLetter)
        document.getElementById(userAnswersId[i]).style.backgroundColor = bgColor;
        document.getElementById(correctAnswersId[i]).style.backgroundColor = bgColor;

        document.getElementById(userAnswersId[i]).textContent = userAnswerText;
        document.getElementById(correctAnswersId[i]).textContent = correctAnswerText;

        i++;
    }
}