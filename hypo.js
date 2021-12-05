var input = document.querySelectorAll('.input');
var submit = document.getElementById('submit');
var output = document.getElementById('output');

submit.addEventListener('click',clacsum)

function clacsum(){
    const sumofsquares = calcsumeofsquares(Number(input[0].value),Number(input[1].value));
    const lengthofhypotnese = Math.sqrt(sumofsquares);
    output.innerHTML = 'The length of hypotense is ' + lengthofhypotnese;
}

function calcsumeofsquares(a,b){
    var sumofsquares = a*a + b*b;
    return sumofsquares;
}
