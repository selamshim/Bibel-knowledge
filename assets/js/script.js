//Variables
//js first area

const introduction = document.getElementById("introduction");
const nameInput = document.getElementById("name");
const instruction = document.getElementById("instruction");
const submitButton = document.getElementById("name-submit");
const startQuiz = document.getElementById("start-quiz-btn");
const formInput = document.querySelector(".form-input");
const questionsArea = document.getElementById("questions-area");

//js second area
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
let userName= null
/*this function load the quize i have used the 
youtube tutorial https://www.youtube.com/watch?v=CqddbIrEM5I&t=73s to get the concept */

function UserNameValue() {
    let userNameInput = document.getElementById("name");
    userName = userNameInput.value.trim();
    let rulesText = document.getElementById("rules-text");
    let errorMsg = document.getElementById("error-msg");

    // enable/disable buttons, tutorial : https://stackdiary.com/enable-disable-button-javascript/

  if (userName === "" || userName.length < 3 || userName.length > 10 || /\d/.test(userName)) {
    userNameInput.value = "";
    submitButton.disabled = true;
    errorMsg.textContent = "Please enter a valid name (3-10 letters and no numbers)";
    errorMsg.style.display = "block";
    return;
  } else {
    errorMsg.style.display = "none";
  };

  rulesText.innerText = `The quiz contains 10 multiple choice questions and you need to select one option among the four options provided.
   when you are done, you will see your score. good luck ${userName}`;

  submitButton.disabled = false;
  errorMsg.style.display = "none";
};


// Submit button to load rules interface
submitButton.addEventListener("click", () => {
    introduction.classList.add("visibel");
    instruction.classList.remove("visibel");
  });
  
  submitButton.disabled = true; 
  formInput.addEventListener("keyup", setButtonState);

/**
 * This function prevents the user to continue the game without filling in the input field.
 * When the user clicks without filling in the input field, an alert message shows up.
 */
function setButtonState() {
    if (document.querySelector(".form-input").value === "") {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    };
};

/**
 * This function resets the user name input to default state.
 */

// Rules Interface

// Start quiz button to load quiz interface
startQuiz.addEventListener("click", () => {
  instruction.classList.add("visibel");
  questionsArea.classList.remove("visibel");
});  


// Questions Interface
quizLoad();
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
           <h2>You scored ${score}/${questionData.length} . Enjoy Reading Bibel.</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
