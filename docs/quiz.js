const questions = [
    "Jan Kochanowski urodził się w roku:",
    "Gdzie urodził się Jan Kochanowski?",
    "Na jakim wydziale Akademii Krakowskiej Jan Kochanowski studiował od 1544 roku?",
    "Zaznacz zdanie prawdziwe.",
    "Kogo podkanclerzem w 1563 roku został Jan Kochanowski?",
    "22 lutego 1566 roku Jan Kochanowski objął probostwo w:",
    'Wydane w 1584 pod tytułem "Elegarium libri IV" utwory są napisane w języku:',
    "Zaznacz zdanie prawdziwe.",
    'Do jakiego gatunku literackiego należy "Odprawa posłów greckich"?',
    'Z ilu utworów składają się "Treny"?',
];
const answers = [
    ["1540", "1530", "1560"],
    ["W Sycynie Północnej", "W Lublinie", "W Sycowie Północnym"],
    ["Wydział teologii", "Wydział prawa", "Wydział sztuk wyzwolonych"],
    [
        "Jan Kochanowski wyjechał na studia do Florencji w roku 1552.",
        "Jan Kochanowski nie uzyskał żadnego stopnia akademickiego w Akademii Krakowskiej.",
        "Jan Kochanowski w latach 1552-1555 został mianowany na konsyliarza nacji polskiej na uniwersytecie we Florencji.",
    ],
    [
        "Piotra Myszkowskiego",
        "Jana Sylwiusza z Sieciechowa",
        "Filipa Padniewskiego",
    ],
    ["Zwoleniu", "Poznaniu", "Lublinie"],
    ["Greckim", "Łacińskim", "Polskim"],
    [
        'Hymn "Czego chcesz od nas Panie za twe hojne dary" był jednym z najwcześniejszych polskojęzycznych utworów Kochanowskiego.',
        '"Czego chcesz od nas Panie za twe hojne dary" przedstawia Boga jako surowego ojca wymagającego czegoś w zamian za swoją troskę.',
        'Pieśni "Satyr" i "Zgoda" były najważniejszymi poematami z okresu dworskiego Jana Kochanowskiego.',
    ],
    ["Opera", "Komedia", "Tragedia antyczna"],
    ["18", "19", "17"],
];
const correct_answers = [1, 0, 2, 1, 0, 0, 1, 0, 2, 1];

const startButton = document.querySelector(".quiz-start-button");
const answerBoxes = document.querySelectorAll(".quiz-answers--answer");
const questionBox = document.querySelector(".quiz-question");
const scoreBox = document.querySelector(".score");

let pointSum = 0;

let currentQuestionIndex = 0;
function startGame() {
    currentQuestionIndex = 0;
    pointSum = 0;
    startButton.classList.add("disabled");
    startButton.classList.add("button-disabled");
    answerBoxes.forEach((answerBox, index) => {
        answerBox.innerText = answers[currentQuestionIndex][index];
        answerBox.classList.remove("disabled");
        answerBox.classList.remove("button-disabled");
    });
    questionBox.innerText = questions[currentQuestionIndex];
    scoreBox.innerText = `${pointSum}/${currentQuestionIndex}`;
}

function checkAnswer(answerIndex) {
    if (answerIndex === correct_answers[currentQuestionIndex]) {
        pointSum++;
        answerBoxes[answerIndex].classList.add("correct");
    } else {
        answerBoxes[answerIndex].classList.add("incorrect");
        answerBoxes[correct_answers[currentQuestionIndex]].classList.add(
            "correct"
        );
    }
}

answerBoxes.forEach((answerBox, index) => {
    answerBox.addEventListener("click", () => {
        checkAnswer(index);
        answerBoxes.forEach((element) => {
            element.classList.add("disabled");
        });
        setTimeout(() => {
            if (
                answerBoxes[
                    correct_answers[currentQuestionIndex]
                ].classList.contains("correct")
            ) {
                answerBoxes[
                    correct_answers[currentQuestionIndex]
                ].classList.remove("correct");
            }
            if (answerBox.classList.contains("incorrect")) {
                answerBox.classList.remove("incorrect");
            }
            currentQuestionIndex++;
            scoreBox.innerText = `${pointSum}/${currentQuestionIndex}`;
            if (currentQuestionIndex === questions.length) {
                answerBoxes.forEach((element) => {
                    element.classList.add("button-disabled");
                    element.innerText = "Odpowiedź";
                });
                questionBox.innerText = `Gratulacje! Zdobyłxś ${pointSum} / ${questions.length} punkty/ów!`;
                startButton.classList.remove("disabled");
                startButton.classList.remove("button-disabled");
                return;
            }
            questionBox.innerText = questions[currentQuestionIndex];
            answerBoxes.forEach((element, index) => {
                element.classList.remove("disabled");
                element.innerText = answers[currentQuestionIndex][index];
            });
        }, 1000);
    });
});

startButton.addEventListener("click", startGame);
