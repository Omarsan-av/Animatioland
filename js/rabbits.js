let score = document.getElementById('score');
let puntuacion = 0;

let ptsActuales = document.createTextNode(`${puntuacion} pts`);                                    
score.appendChild(ptsActuales); 

let conejos = document.querySelector(".rabbit");

conejos.addEventListener('click', () =>
{
   puntuacion +=  50;
   score.innerHTML = puntuacion + ' pts' 
})
