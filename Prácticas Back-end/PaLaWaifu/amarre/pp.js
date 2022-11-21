function moverPositionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px' ;
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px' ;
}

let btnSi = document.getElementById("btn_si")
let btnNo = document.getElementById("btn_no")
let divModoSetso = document.getElementsByClassName("modo_setso")[0]

btnNo.addEventListener('mouseenter', function(e) {moverPositionRandom(e.target)})

btnSi.addEventListener('click', function(e) {
    alert('Siempre lo supe');
    divModoSetso.style.display = 'block';
    const cancion = new Audio('multimedia\\img_modo_hot.mp3');
    cancion.play();
});