let play = document.getElementById('play');
let wrap = document.getElementById('wrap');
let scoreText = document.getElementById('score-text');
let instruction = document.querySelector('.instruction');

play.addEventListener('click', () =>
{
   wrap.style.filter = 'none';
   play.style.display = 'none';
   scoreText.style.display = 'block';
   instruction.style.display = 'none';
})

let score = document.getElementById('score');
let puntuacion = 0;
let evaluar;

let ptsActuales = document.createTextNode(`${puntuacion} pts`);                                    
score.appendChild(ptsActuales); 

let conejos = document.querySelectorAll('.rabbit_head');

for (let i = 0; i < conejos.length; i++) 
{
   conejos[i].addEventListener('click', () =>
   {
      puntuacion +=  50;
      score.innerHTML = puntuacion + ' pts' ;
   })
}

