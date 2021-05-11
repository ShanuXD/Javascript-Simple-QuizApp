const alertTitle = document.querySelector("#alert");
const overlay = document.querySelector("#overlay");
const questionItems = document.querySelectorAll(".question-item");
const quizForm = document.querySelector("#quiz-form");

const checkQuizForm = () => {
  let count = 0;
  questionItems.forEach((question) => {
    const answerItems = question.querySelectorAll(".answer-item");
    let isRight = false;
    answerItems.forEach((answer) => {
      // console.log(answer.querySelector(".answer").checked==true);
      // console.log(answer.querySelector(".answer").value=="true");
      checkAnswer = answer.querySelector(".answer");
      // Right answer
      if (checkAnswer.checked==true && checkAnswer.value=="true") {
        isRight = true;
        count++;
      }
    });
    question.style.color = isRight ? "green" : "red";
  });

  return count == 3;
};

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(checkQuizForm())

  if (checkQuizForm()) {
    alertTitle.classList.add("active");
    overlay.classList.add("active");
  }

});
