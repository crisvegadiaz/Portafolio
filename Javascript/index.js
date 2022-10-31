const botonMenu = document.querySelector('.hamburger'),
    menu = document.querySelector('.cabecera__menu'),
    body=document.querySelector('body')



// botonMenu hamburger
botonMenu.addEventListener('click', (e) => {
    botonMenu.classList.toggle('is-active')
    menu.classList.toggle('menuDesativado')
})

body.addEventListener('click',(e)=>{
    if(e.target.classList.contains('menu__enlace')){
        menu.classList.toggle('menuDesativado')
    }
})





