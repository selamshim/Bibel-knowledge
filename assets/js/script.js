//Variables
// Intrroduction part

const introduction = document.getElementById("introduction");
const nameInput = document.getElementById("name");
const instruction = document.getElementById("instruction");
const submitButton = document.getElementById("name-submit");
const startQuiz = document.getElementById("start-quiz-btn");
const formInput = document.querySelector(".form-input");
const questionsArea = document.getElementById("questions-area");

//quiz part
const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.quizAnswer');
const questionEl = document.getElementById('question');
const choice_a_text = document.getElementById('choice_a_text');
const choice_b_text = document.getElementById('choice_b_text');
const choice_c_text = document.getElementById('choice_c_text');
const choice_d_text = document.getElementById('choice_d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let userName= null

// introduction part
function UserNameValue() {
    let nameValue = document.getElementById("name");
    userName = nameValue.value.trim();
    let instructionText = document.getElementById("instruction-text");
    let errorMsg = document.getElementById("error-msg");

    // enable/disable buttons, tutorial : https://stackdiary.com/enable-disable-button-javascript/

  if (userName === "" || userName.length < 2 || userName.length > 10 || /\d/.test(userName)) {
    nameValue.value = "";
    submitButton.disabled = true;
    errorMsg.textContent = "Please enter a valid name (3-10 letters and no numbers)";
    errorMsg.style.display = "block";
    return;
  } else {
    errorMsg.style.display = "none";
  };

  instructionText.innerText = `The quiz contains 10 multiple choice questions and you need to select one option among the four options provided.
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


// Function to handle enabling/disabling submit button based on input
function setButtonState() {
    const formInputValue = document.querySelector(".form-input").value;
    submitButton.disabled = formInputValue === "" ? true : false;
  }  

// Event listener for the start quiz button to load the quiz interface
startQuiz.addEventListener("click", () => {
  instruction.classList.add("visibel");
  questionsArea.classList.remove("visibel");
});  


// Questions Interface

/*this function load the quize i have used the 
youtube tutorial https://www.youtube.com/watch?v=CqddbIrEM5I&t=73s to get the concept */


// Function to load the quiz
function quizLoad() {
    deselectAnswers(); // Deselect any selected answers
    const currentQuestionData = questionData[currentQuiz]; // Get data for the current question
    // Display question and answer choices on the UI
    questionEl.innerText = currentQuestionData.question;
    choice_a_text.innerText = currentQuestionData.a;
    choice_b_text.innerText = currentQuestionData.b;
    choice_c_text.innerText = currentQuestionData.c;
    choice_d_text.innerText = currentQuestionData.d;
  }
  
  // Function to deselect all answer choices
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
  }
  
  // Function to get the selected answer
  function getSelected() {
    let quizAnswer;
    // Check which answer is selected by the user
    answerEls.forEach(answerEl => {
      if(answerEl.checked) {
        quizAnswer = answerEl.id; // Record the ID of the selected answer
      }
    });
    return quizAnswer; // Return the ID of the selected answer
  }
  
  // Event listener for handling quiz submission
  submitBtn.addEventListener('click', () => {
    const quizAnswer = getSelected(); // Get the selected answer
    if(quizAnswer) { // If an answer is selected
      if(quizAnswer === questionData[currentQuiz].correct) { // If the selected answer is correct
        score++; // Increment the score
      }
      currentQuiz++; // Move to the next question
      if(currentQuiz < questionData.length) { // If there are more questions remaining
        quizLoad(); // Load the next question
      } else { // If all questions are answered
        // Display the final score and a reload button
        quiz.innerHTML = `
          <h2>You scored ${score}/${questionData.length}. Enjoy Reading Bibel.</h2>
          <button onclick="location.reload()">Reload</button>
        `;
      }
    }
  });
  
  // Initialize the quiz by loading the first question
  quizLoad();
  