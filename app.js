const angle = document.querySelectorAll('.angles');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click',istriangle)


function istriangle(){
 const sumofangles = calcofangles(Number(angle[0].value),Number(angle[1].value),Number(angle[2].value)) 
 if(sumofangles === 180){
     output.innerText = 'Yay,It forms a triangle'
 }else{
    output.innerText = 'No,It is not a triangle'
 }
}

function calcofangles(angle1,angle2,angle3){
    const sumofangles = angle1 + angle2 + angle3;
    return sumofangles;
}
