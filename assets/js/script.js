const questionData = [
    {
        question: "1. Whose likenesses or image did God create man in?",
        a: "Universe",
        b: "God",
        c: "Sun",
        d: "Angel",
        correct: "b",
    },
    {
        question: "2.According to proverbs, what is the beginning of wisdom?",
        a: "Humility and meekness",
        b: "Knowledge",
        c: "Fear of the lord ",
        d: "Knowledge ",
        correct: "c",
    },
    {
        question: "3.Who did God told to build an ark?",
        a: "Moses",
        b: "David",
        c: "Abraham",
        d: "Noah",
        correct: "d",
    },
    {
        question: "4.What occupation did David had before becoming a king?",
        a: "Merchant",
        b: "Farmer",
        c: "Shepherd",
        d: "Soldier",
        correct: "c",
    },
    {
        question: "5.Where was Daniel thrown into when he prayed to God after it was not allowed?",
        a: "Into the sea",
        b: "Fire",
        c: "Pack of wolves",
        d: "Lion's den",
        correct: "d",
    },
    {
        question: "6.Which of the following are not included in fruit of the spirt",
        a: "Love and Meekness",
        b: "Peace and Joy",
        c: "Longsuffering and faith",
        d: "Envying and wrath",
        correct: "d",
    },
    {
        question: "7.What was the first miracle of Jesus on earth?",
        a: "Healing a blind man",
        b: "Calming the storms",
        c: "Turning water into wine",
        d: "Walking on water",
        correct: "c",
    },
    {
        question: "8.Who is Jesus's mother?",
        a: "Mary Magdalene",
        b: "Martha",
        c: "Elizabeth",
        d: "Mary",
        correct: "d",
    },
    {
        question: "9.What does the Bible teach about the cleansing power of Jesus' blood in relation to sin?",
        a: "Jesus' blood can only cleanse minor sins",
        b: "Jesus' blood cleanses all sin",
        c: "Jesus' blood has no effect on sin",
        d: "Jesus' blood cleanses only intentional sins",
        correct: "b",
    },
    {
        question: "10.Who betrayed Jesus to the authorities for 30 pieces of silver?",
        a: "Thomas",
        b: "Judas Iscariot",
        c: "Simon Peter",
        d: "Andrew",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.quizAnswer')
const questionEl = document.getElementById('question')
const choice_a_text = document.getElementById('choice_a_text')
const choice_b_text = document.getElementById('choice_b_text')
const choice_c_text = document.getElementById('choice_c_text')
const choice_d_text = document.getElementById('choice_d_text')
const submitBtn = document.getElementById('submit')



let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuestionData = questionData[currentQuiz]
    questionEl.innerText = currentQuestionData.question
    choice_a_text.innerText = currentQuestionData.a
    choice_b_text.innerText = currentQuestionData.b
    choice_c_text.innerText = currentQuestionData.c
    choice_d_text.innerText = currentQuestionData.d
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
submitBtn.addEventListener('click', () => {
    const quizAnswer = getSelected()
    if(quizAnswer) {
       if(quizAnswer === questionData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < questionData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${questionData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
