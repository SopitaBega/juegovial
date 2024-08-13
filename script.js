const questions =[
    "pregunta 1",
    "pregunta 2",
    "pregunta 3",
];
let currentQuestions = 0;
const sheep =
document.getElementById('sheep');
const happy =
document.getElementById('happy');
const sad =
document.getElementById('sad');
const questionArea =
document.getElementById('question');
function showQuestion(){
    if (currentQuestion < questions.length){
        
        questionText.textContent =questions[currentQuestion];
    } else {

        questionArea.innerHTML = "<p> ¡juego terminado!</p>";
    }
}
function answer (correct){
    if (correct){

sheep.style.transform = 'translatex(100px)';
happy.style.display = 'block';
sad.display = 'none';
} else{
sheep.style.transform = 'traslateX(opx)';
happy.style.display = 'none';
sad.tyle.display = 'block';
}
currentQuestion++;
setTimeout(showQuestion, 1000);
}
showQuestion();