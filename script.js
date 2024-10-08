let currentQuestion = 0;
const sheep = 
document.getElementById('sheep');
const happy =
document.getElementById('happy');
const angry =
document.getElementById('angry');
const questionArea =
document.getElementById('question');
const mensaje=document.querySelector('#resp-correcta');
const mensaje2=document.querySelector('#resp-incorrecta');
const cambio=document.querySelector("#cambio");

function answer(e) {
  //  const isCorrect=e.dataset.correct;
  const isCorrect = e.dataset.correct==='true';
       
    if (isCorrect) {
        sheep.style.display='none';
        //sheep.style.transform = 'translateX(100px)';
        happy.style.display = 'block';
        angry.style.display = 'none';
        mensaje.style.display='block';
        mensaje2.style.display='none';
        currentQuestion++;
        cambio.style.display="block";
     
    } else {
        sheep.style.display='none';
        //sheep.style.transform = 'translateX(0px)';
        happy.style.display = 'none';
        angry.style.display = 'block';
        mensaje.style.display='none';
        mensaje2.style.display='block';
        setTimeout(()=>{
            window.location="index.html"
        }, 1000);
        

    }
    

}
function cambioimg()
{
    sheep.style.display="block";
    angry.style.display = 'none';
    happy.style.display = 'none';
}
