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


document.addEventListener('DOMContentLoaded', function(){
    let passwordInput = document.querySelector('.PasswordInput')
    passwordInput.addEventListener('input', function(){
        let passwordValue = passwordInput.value
        checkPassword(passwordValue)
    })

    
let eightCharacter = document.querySelector('.Eight_Character')
let uppercaseCharacter = document.querySelector('.Uppercase_Character')
let lowercaseCharacter = document.querySelector('.Lowercase_Character')
let specialCharacter = document.querySelector('.Special_Character')
let numberCharacter = document.querySelector('.Number_Character')
let entirelyNotNumeric = document.querySelector('.Entirely_Not_Numeric')
let eightCharacterTwo = document.querySelector('.Eight_Character2')
let uppercaseCharacterTwo = document.querySelector('.Uppercase_Character2')
let lowercaseCharacterTwo = document.querySelector('.Lowercase_Character2')
let specialCharacterTwo = document.querySelector('.Special_Character2')
let numberCharacterTwo = document.querySelector('.Number_Character2')
let entirelyNotNumericTwo = document.querySelector('.Entirely_Not_Numeric2')

function checkPassword(passwordValue){
    let checkEightCharacter = new RegExp('(?=.{8,})')
    let checkUppercaseCharacter = new RegExp('(?=.*[A-Z])')
    let checkLowercaseCharacter = new RegExp('(?=.*[a-z])')
    let checkSpecialCharacter = new RegExp('(?=.*[!@#\$%\^&\\*+\\-=_()!~`])')
    let checkNumberCharacter = new RegExp('(?=.*[0-9])')
    let checkEntirelyNotNumeric = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).+$')

    if(checkLowercaseCharacter.test(passwordValue)){
        lowercaseCharacter.style.display = 'none'
        lowercaseCharacterTwo.style.display = 'flex'
    }
    else{
        lowercaseCharacter.style.display = 'flex'
        lowercaseCharacterTwo.style.display = 'none'
    }

    if(checkUppercaseCharacter.test(passwordValue)){
        uppercaseCharacter.style.display = 'none'
        uppercaseCharacterTwo.style.display = 'flex'
    }
    else{
        uppercaseCharacter.style.display = 'flex'
        uppercaseCharacterTwo.style.display = 'none'
    }

    if(checkEightCharacter.test(passwordValue)){
        eightCharacter.style.display = 'none'
        eightCharacterTwo.style.display = 'flex'
    }
    else{
        eightCharacter.style.display = 'flex'
        eightCharacterTwo.style.display = 'none'
    }

    if(checkEntirelyNotNumeric.test(passwordValue)){
        entirelyNotNumeric.style.display = 'none'
        entirelyNotNumericTwo.style.display = 'flex'
    }
    else{
        entirelyNotNumeric.style.display = 'flex'
        entirelyNotNumericTwo.style.display = 'none'
    }

    if(checkNumberCharacter.test(passwordValue)){
        numberCharacter.style.display = 'none'
        numberCharacterTwo.style.display = 'flex'
    }
    else{
        numberCharacter.style.display = 'flex'
        numberCharacterTwo.style.display = 'none'
    }

    if(checkSpecialCharacter.test(passwordValue)){
        specialCharacter.style.display = 'none'
        specialCharacterTwo.style.display = 'flex'
    }
    else{
        specialCharacter.style.display = 'flex'
        specialCharacterTwo.style.display = 'none'
    }

    if(checkEightCharacter.test(passwordValue) && checkLowercaseCharacter.test(passwordValue) && checkUppercaseCharacter.test(passwordValue) && checkNumberCharacter.test(passwordValue) && checkSpecialCharacter.test(passwordValue) && checkEntirelyNotNumeric.test(passwordValue)){
        focusContent.style.display = 'none'
    }
    else{
        focusContent.style.display = 'flex'
    }

}
 
})


// document.addEventListener('DOMContentLoaded', function(){
//    let  passwordInput = document.querySelector('.PasswordInput')
//    let  passwordWrapper = document.querySelector('.Password_Instruction')

// function passwordRequirementStatus(parentElement, isMet) {
//     const svg = parentElement.querySelector('svg');
//     const paths = svg.querySelectorAll('path');

//     if (isMet) {
//         paths[1].style.display = 'block';  // Check icon
//         paths[0].style.display = 'none';   // X icon
//     } else {
//         paths[1].style.display = 'none';   // Check icon
//         paths[0].style.display = 'block';  // X icon
//     }
// }
//    function passwordRequirementChecker(password){
//             let passwordRequirement = [
//             { element: document.querySelector('.Eight_Character'), regex: /(?=.{8,})/ },
//             { element: document.querySelector('.Uppercase_Character'), regex: /(?=.*[A-Z])/ },
//             { element: document.querySelector('.Lowercase_Character'), regex: /(?=.*[a-z])/ },
//             // { element: document.querySelector('.Special_Character'), regex: /('(?=.*[!@#\$%\^&\\*+\\-=()!~`])')/ },
//             { element: document.querySelector('.Number_Character'), regex: /(?=.*[0-9])/ },
//             { element: document.querySelector('.Entirely_Not_Numeric'), regex: /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/ } 
//         ]
//         let allPasswordRequirement = true
//             for(let passwordCheckingRequirement of passwordRequirement){
//                 let isMet = passwordCheckingRequirement.regex.test(password)
//                 passwordRequirementStatus(passwordCheckingRequirement.element, isMet)
//                 if(!isMet){
//                     allPasswordRequirement = false
//                 }
//             }

//             if(allPasswordRequirement){
//                 passwordWrapper.style.display = 'none'
//             }
//             else{
//                 passwordWrapper.style.display = 'flex'
//             }
//    }
//    passwordInput.addEventListener('input', function(){
//         let password = passwordInput.value
//         passwordRequirementChecker(password) 
//    })


// })
