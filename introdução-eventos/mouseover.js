const bnt = document.getElementById('Robo');
const img = document.getElementById('robo')
img.addEventListener('mouseover', diminuirRobo)
img.addEventListener("mouseout", aumentarRobo)

function diminuirRobo(event){
    event.target.style.height = "40%"
}

function aumentarRobo(event){
    event.target.style.height = "20%"
}