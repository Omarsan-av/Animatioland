let score = document.getElementById('score');
let puntuacion = 0;

let ptsActuales = document.createTextNode(`${puntuacion} pts`);                                    
score.appendChild(ptsActuales); 

let conejos = document.querySelectorAll('.rabbit');

for (let i = 0; i < conejos.length; i++) 
{
   conejos[i].addEventListener('click', () =>
   {
      puntuacion +=  50;
      score.innerHTML = puntuacion + ' pts' ;
   })
 }


