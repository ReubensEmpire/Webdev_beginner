const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "1). Which is the Largest Nebula?",
        answers: {
            a: "Horsehead Nebula",
            b: "Cat's Eye Nebula",
            c: "The Tarantula Nebula"
        },
        correctAnswer: "c"
    },
    {
        question: "2).which planet has the most number of rings given below?",
        answers: {
            a: "J1407b",
            b: "Jupiter",
            c: "Uranus"
        },
        correctAnswer: "a"
    },
    {
        question: "3).Which is the most abundant element in the universe?",
        answers: {
            a: "Helium",
            b: "Hydrogen",
            c: "Carbon"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
