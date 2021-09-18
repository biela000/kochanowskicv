const pages = document.querySelectorAll('.biog');
const quizscreen = document.getElementById('quizscreen');
const questiondiv = document.getElementById('question');
const answerdivs = document.getElementsByClassName('answer');
const possibleanswers = document.getElementsByClassName('panswers');
const questions = [ 'Data urodzenia Jana Kochanowskiego szacowana jest na rok:',
                    'Gdzie urodził się Jan Kochanowski?',
                    'Na jakim wydziale Akademii Krakowskiej Jan Kochanowski studiował od 1544 roku?',
                    'Zaznacz zdanie prawdziwe.',
                    'Kogo podkanclerzem w 1563 roku został Jan Kochanowski?',
                    '22 lutego 1566 roku Jan Kochanowski objął probostwo w:',
                    'Wydane w 1584 pod tytułem "Elegarium libri IV" utwory są napisane w języku:',
                    'Zaznacz zdanie prawdziwe.',
                    'Do jakiego gatunku literackiego należy "Odprawa posłów greckich"?',
                    'Z ilu utworów składają się "Treny"?'
                  ];
const answers = [ [ '1340', '1350', '1360' ],
                  [ 'W Sycynie Północnej', 'W Sycynie Południowej', 'W Sycowie Północnym' ],
                  [ 'Wydział teologii', 'Wydział prawa', 'Wydział sztuk wyzwolonych' ],
                  [ 'Jan Kochanowski wyjechał na studia do Florencji w roku 1552.', 'Jan Kochanowski nie uzyskał żadnego stopnia akademickiego w Akademii Krakowskiej.', 'Jan Kochanowski w latach 1552-1555 został mianowany na konsyliarza nacji polskiej na uniwersytecie we Florencji.' ],
                  [ 'Piotra Myszkowskiego', 'Jana Sylwiusza z Sieciechowa', 'Filipa Padniewskiego' ],
                  [ 'Zwoleniu', 'Poznaniu', 'Lublinie' ],
                  [ 'Greckim', 'Łacińskim', 'Polskim' ],
                  [ 'Hymn "Czego chcesz od nas Panie za twe hojne dary" był jednym z najwcześniejszych polskojęzycznych utworów Kochanowskiego.', '"Czego chcesz od nas Panie za twe hojne dary" przedstawia Boga jako surowego ojca wymagającego czegoś w zamian za swoją troskę.', 'Pieśni "Satyr" i "Zgoda" były najważniejszymi poematami z okresu dworskiego Jana Kochanowskiego.' ],
                  [ 'Opera', 'Komedia', 'Tragedia antyczna' ],
                  [ '18', '19', '17' ]
                ];
const correct_answers = [ 1, 0, 2, 1, 0, 0, 1, 0, 2, 1 ];
function changePage(n) {
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    pages[n].style.display = 'block';
}
let question_number = 1;
function ChangeQuestion() {
    document.getElementById('qnr').innerHTML = 'Pytanie nr ' + question_number;
    document.getElementById('q').innerHTML = questions[question_number - 1];
    possibleanswers[0].innerHTML = 'A. ' + answers[question_number - 1][0];
    possibleanswers[1].innerHTML = 'B. ' + answers[question_number - 1][1];
    possibleanswers[2].innerHTML = 'C. ' + answers[question_number - 1][2];
}
for (let i = 0; i < answerdivs.length; i++) {
    answerdivs[i].addEventListener('click', () => {
        if (question_number >= questions.length) {
            quizscreen.style.display = 'none';
            document.getElementById('winscreen').style.display = 'block';
        }
        else if (i === correct_answers[question_number - 1]) {
            question_number++;
            ChangeQuestion();
        }
        else if (i != correct_answers[question_number - 1]) {
            quizscreen.style.display = 'none';
            document.getElementById('failscreen').style.display = 'block';
        }
    });
}
function StartGame() {
    question_number = 1;
    document.getElementById('failscreen').style.display = 'none';
    document.getElementById('winscreen').style.display = 'none';
    document.getElementById('welcomescreen').style.display = 'none';
    ChangeQuestion();
    quizscreen.style.display = 'flex';
}