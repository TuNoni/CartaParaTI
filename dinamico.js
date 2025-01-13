const btnOpenElement = document.querySelector('#abrir')
const btnCloseElement = document.querySelector('#cerrar')

btnCloseElement.disabled= true

btnOpenElement.addEventListener('click', ()=>{
    btnOpenElement.disabled = true
    btnCloseElement.disabled = false

    const coverElement = document.querySelector('.abrir')
    coverElement.classList.add('abrir-carta')

    setTimeout(()=>{
    coverElement.style.zIndex = -1

    const PaperElement = document.querySelector('.papel')
    PaperElement.classList.add('abrir-papel')    
    PaperElement.classList.remove('cerrando-papel')

    }, 500)

    
})
btnCloseElement.addEventListener('click', ()=>{
    btnOpenElement.disabled = false
    btnCloseElement.disabled = true
    const coverElement = document.querySelector('.abrir')
    const PaperElement = document.querySelector('.papel')
    PaperElement.classList.remove('abrir-papel')
    PaperElement.classList.add('cerrando-papel')
    

    setTimeout(()=>{
        coverElement.style.zIndex = 0
        coverElement.classList.remove('abrir-carta')

        }, 500)
    
})