let baseNavigation = document.querySelector('.Base')
let navigation = document.querySelector('.Navigation svg')
let cancelNav0 = document.querySelector('.Navigation_Cancel')

navigation.addEventListener('click', function(){
    baseNavigation.classList.toggle('Activate')

    cancelNav0.addEventListener('click', function(){
        baseNavigation.classList.remove('Activate')
    })
    
})



let login = document.querySelector('.Login')
let loginSvg = document.querySelector('.Login svg')
let loginPar = document.querySelector('.Login p')
let register = document.querySelector('.Register')
let registerSvg = document.querySelector('.Register svg')
let registerPar = document.querySelector('.Register p')
let cancelNav = document.querySelector('.Navigation_Cancel')
let loginDetails = document.querySelector('.Login_Details')
let registerDetails = document.querySelector('.Register_Details')

login.addEventListener('click', function(){
    login.style.backgroundColor = '#eeac05'
    loginSvg.style.color = '#1a1302'
    loginPar.style.color = '#1a1302'
    register.style.backgroundColor = '#000000'
    registerSvg.style.color = '#eeac05'
    registerPar.style.color = '#eeac05'
    cancelNav.style.color = '#eeac05'
    loginDetails.style.display = 'flex'
    registerDetails.style.display = 'none'
})

register.addEventListener('click', function(){
    register.style.backgroundColor = '#eeac05'
    registerSvg.style.color = '#1a1302'
    registerPar.style.color = '#1a1302'
    login.style.backgroundColor = '#000000'
    loginSvg.style.color = '#eeac05'
    loginPar.style.color = '#eeac05'
    cancelNav.style.color = '#000000'
    registerDetails.style.display = 'flex'
    loginDetails.style.display = 'none'
})

document.addEventListener('DOMContentLoaded', function(){
    let passwordListenerButton = document.querySelectorAll('.PasswordListener')
    passwordListenerButton.forEach(function (button){
        let passwordField = button.parentElement.querySelector('input[type="password"]');
        button.addEventListener('click', function(){
            if(passwordField.type === 'password'){
                passwordField.type = 'text'
                button.innerHTML =`
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                </svg>
                `
            }
            else{
                passwordField.type = 'password'
                button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
                `
            }
        })
    })
})


let focusListener = document.querySelector('.PasswordFocus')
let focusContent = document.querySelector('.Password_Instruction')

focusListener.addEventListener('focus', function(){
    focusContent.style.display = 'flex'
})

focusListener.addEventListener('blur', function(){
    focusContent.style.display = 'none'
})