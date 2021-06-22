let play = document.getElementById('play');
let phone = document.getElementById('phone');
let scoreText = document.getElementById('score-text');
let instruction = document.querySelector('.instruction');

play.addEventListener('click', () =>
{
   phone.style.filter = 'none';
   play.style.display = 'none';
   scoreText.style.display = 'block';
   instruction.style.display = 'none';
})

let score = document.getElementById('score');
let puntuacion = 0;
let evaluar;

let ptsActuales = document.createTextNode(`${puntuacion} pts`);                                    
score.appendChild(ptsActuales); 

let conejos = document.querySelectorAll('.head');

for (let i = 0; i < conejos.length; i++) 
{
   conejos[i].addEventListener('click', () =>
   {
      puntuacion +=  50;
      score.innerHTML = puntuacion + ' pts' ;
   })
 }

let layer = document.querySelectorAll('.layer-3, .layer-5, .layer-7, .layer-9');

for (let j = 0; j < layer.length; j++) 
{
   layer[j].addEventListener('click', () =>
   {
      puntuacion =  0;
      score.innerHTML = puntuacion + ' pts' ;
   })
}

let hand = document.querySelectorAll('.hand.left, .hand.right');

for (let k = 0; k < hand.length; k++) 
{
   hand[k].addEventListener('click', () =>
   {
      puntuacion =  0;
      score.innerHTML = puntuacion + ' pts' ;
   })
}





 


