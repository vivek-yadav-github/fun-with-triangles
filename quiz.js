const quizForm = document.querySelector('.quiz-form');
const submitanswers = document.getElementById('submit-answer');
const outputEl = document.getElementById('output');

submitanswers.addEventListener('click',calculatescore);

const correctanswers = ["90°","right angled"];

function calculatescore(){
    let index = 0;
    let score = 0;
    const formresults = new FormData(quizForm);
    for(let value of formresults.values()){
        if( value === correctanswers[index]){
            score++;
        }
        index++;
    }
    outputEl.innerText = `The score is  ${score}`
}