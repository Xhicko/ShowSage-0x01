let login = document.querySelector('.Login')
let loginSvg = document.querySelector('.Login svg')
let loginPar = document.querySelector('.Login p')
let register = document.querySelector('.Register')
let registerSvg = document.querySelector('.Register svg')
let registerPar = document.querySelector('.Register p')
let cancelNav = document.querySelector('.Navigation_Cancel')

login.addEventListener('click', function(){
    login.style.backgroundColor = '#eeac05'
    loginSvg.style.color = '#1a1302'
    loginPar.style.color = '#1a1302'
    register.style.backgroundColor = '#000000'
    registerSvg.style.color = '#eeac05'
    registerPar.style.color = '#eeac05'
    cancelNav.style.color = '#eeac05'
})

register.addEventListener('click', function(){
    register.style.backgroundColor = '#eeac05'
    registerSvg.style.color = '#1a1302'
    registerPar.style.color = '#1a1302'
    login.style.backgroundColor = '#000000'
    loginSvg.style.color = '#eeac05'
    loginPar.style.color = '#eeac05'
    cancelNav.style.color = '#000000'
})

