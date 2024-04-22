const btnEmail = document.getElementById('nome')
.addEventListener('focus', (event) => {
    console.log("focou no elemento")
})

document.getElementById('nome').addEventListener('blur', (event) => {
    console.log("tirou o foco no elemento")
})

const btnEndereco = document.getElementById('endereco')
.addEventListener('focus', (event) => {
    console.log("focou no elemento")
})

document.getElementById('endereco').addEventListener('blur', (event) => {
    console.log("tirou o foco no elemento")
})

const nome = document.getElementById('testeEmail')
console.log("testeEmail")