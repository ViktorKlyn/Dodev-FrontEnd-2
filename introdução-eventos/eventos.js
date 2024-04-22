const btn = document.getElementById('teste')
btn.addEventListener('click', executarAcao)

function executarAcao(event){
    console.log('Olá')
    console.log(event)
}

document.getElementById('form').addEventListener('reset', (event) => {
    event.preventDefault()
    console.log(event)
    alert('Recebi o evento')
})
const btnEmail = document.getElementById("testeEmail")

btnEmail.addEventListener('focus', (event) => {
  console.log('Focou no elemento')
})

btnEmail.addEventListener('blur', (event) => {
    console.log('Tirou o foco no elemento')
  })

  window.addEventListener('resize', (event) => {
    console.log(window.scrollY)
    console.log('Scroll')
    console.log(event)
  })