var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var button = document.getElementById('btn');
var output = document.getElementById('output')

button.addEventListener('click',calc)


function calc(){
var sumofvalues = calcsum(Number(input1.value),Number(input2.value))
var res = (sumofvalues)/2;
output.innerHTML = 'The area of triangle is' + " " + res + " " + 'cm';
}

function calcsum(a,b){
    var result = a * b;
    return result;
}