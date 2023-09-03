//Variables
const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.quizAnswer');
const questionEl = document.getElementById('question');
const choice_a_text = document.getElementById('choice_a_text');
const choice_b_text = document.getElementById('choice_b_text');
const choice_c_text = document.getElementById('choice_c_text');
const choice_d_text = document.getElementById('choice_d_text');
const submitBtn = document.getElementById('submit');

//question load area

let currentQuiz = 0;
let score = 0;
/*this function load the quize i have used the 
youtube tutorial https://www.youtube.com/watch?v=CqddbIrEM5I&t=73s to get the concept */

quizLoad()
function quizLoad() {
    deselectAnswers()
    const currentQuestionData = questionData[currentQuiz]
    questionEl.innerText = currentQuestionData.question
    choice_a_text.innerText = currentQuestionData.a;
    choice_b_text.innerText = currentQuestionData.b;
    choice_c_text.innerText = currentQuestionData.c;
    choice_d_text.innerText = currentQuestionData.d;
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let quizAnswer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            quizAnswer = answerEl.id
        }
    })
    return quizAnswer
}
//this will count the right answers
submitBtn.addEventListener('click', () => {
    const quizAnswer = getSelected()
    if(quizAnswer) {
       if(quizAnswer === questionData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       //this statement check if the question is finished
       if(currentQuiz < questionData.length) {
        quizLoad()
       } 
       //if the question is finished the score is displayed
       else {
           quiz.innerHTML = `
           <h2>You scored ${score}/${questionData.length} . Enjoy Reading Bibel</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
