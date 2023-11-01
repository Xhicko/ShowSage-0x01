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

// Input and Password  Logic
document.addEventListener('DOMContentLoaded', function(){

// Password Hide and Reveal References
    let passwordListenerButton = document.querySelectorAll('.PasswordListener')

// Password Hide and Reveal Logic
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
    

//  Passwod Requirements Wrapper References
    let focusListener = document.querySelector('.Focus')
    let focusContent = document.querySelector('.Password_Instruction')

// Logic to Open Passwod Requirements Wrapper
    focusListener.addEventListener('click', function(event){
        focusContent.style.display = 'flex'
        event.stopPropagation();

        document.addEventListener('click', function() {
            focusContent.style.display = 'none';
        })
    })

// Input Validation References
    const form = document.getElementById('form')
    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const password2 = document.getElementById('password2')

// Function to Display input Error
    function displayError(input, message){
        let formGroup = input.parentElement
        formGroup.className = 'Form_Group Error'
        let errorMessage = formGroup.querySelector('p')
        errorMessage.innerText = message
    } 

// Function to Clear input Error
    function displayChecked(input){
        formGroup = input.parentElement
        formGroup.className = 'Form_Group Checked' 
    }

 
// Function to get Fileds Name
    function fieldName(input){
        return input.className.charAt(0).toUpperCase() + input.className.slice(1)
    } 

// function to Check Input Character
    function checkInputCharacter(input, min, max){
        if(input.value.length < min){
            displayError(input, `${fieldName(input)} must be more than ${min} Characters!`)
        }
        else if(input.value.length > max){
            displayError(input, `${fieldName(input)} Must be less than ${max} Characters!`)
        }
        else{
            displayChecked(input )
        }
    }


// Function to Check Input Fields
    function checkInputFields(inputArray){
        inputArray.forEach(function(input){
            if(input.value.trim() === ''){
                displayError(input, `${fieldName(input)} is required!`)
            }
            else{
                displayChecked(input)
            }
        })
    }


// Function to Validate Email
    function validateEmail(input){
        let checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(checkMail.test(input.value.trim())){
            displayChecked(input)
        }
        else{
            displayError(input, 'Email is not valid!')
        }
    }


// Function to Check Password Fields
    function checkPasswordCharacter(password1, password2){
        if (password1.value !== password2.value ){
            displayError(password2, 'Passwords do not match!')
        }
    }

//  Event To prevent form from submiting wehn not field
    form.addEventListener('submit', function(e){
        e.preventDefault()
    
        checkInputFields([username, email, password, password2])

        checkInputCharacter(username, 5, 15)

        checkInputCharacter(password, 8, 25)
        
        validateEmail(email)

        checkPasswordCharacter(password, password2)
    })


// Password Checking Refrences
   let  passwordInput = document.querySelector('#password')
   let  passwordWrapper = document.querySelector('.Password_Instruction')

  function passwordRequirementStatus(requirementElement, isMet) {
    
    if (isMet) {
      requirementElement.classList.remove('bi-x');
      requirementElement.classList.add('bi-check');
    } 
    else {
      requirementElement.classList.remove('bi-check');
      requirementElement.classList.add('bi-x');
    }
  }





// Function for password Requirement 
   function passwordRequirementChecker(password){
            let passwordRequirement = [
            { element: document.querySelector('.Eight_Character'), regex: /(?=.{8,})/ },
            { element: document.querySelector('.Uppercase_Character'), regex: /(?=.*[A-Z])/ },
            { element: document.querySelector('.Lowercase_Character'), regex: /(?=.*[a-z])/ },
            // { element: document.querySelector('.Special_Character'), regex: /('(?=.*[!@#\$%\^&\\*+\\-=()!~`])')/ },
            { element: document.querySelector('.Number_Character'), regex: /(?=.*[0-9])/ },
            { element: document.querySelector('.Entirely_Not_Numeric'), regex: /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/ } 
        ]

    let allPasswordRequirement = true

    for(let passwordCheckingRequirement of passwordRequirement){
            let isMet = passwordCheckingRequirement.regex.test(password)
            passwordRequirementStatus(passwordCheckingRequirement.element, isMet)
            if(!isMet){
                allPasswordRequirement = false
            }
    }

        if(allPasswordRequirement){
                passwordWrapper.style.display = 'none'
            }
         else{
                passwordWrapper.style.display = 'flex'
            }
   }

// Logic for Listening to the input Caharacter
   passwordInput.addEventListener('input', function(){
            let password = passwordInput.value
            passwordRequirementChecker(password) 
       })
})