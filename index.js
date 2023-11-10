if (document.getElementById('Index')){
    
    // Logic to Reveal and Hide Navigation 
    document.addEventListener('DOMContentLoaded', function(){
        let baseNavigation = document.querySelector('.Base')
        let navigation = document.querySelector('.Navigation svg')
        let cancelNav0 = document.querySelector('.Navigation_Cancel')

    navigation.addEventListener('click', function(){
        baseNavigation.classList.toggle('Activate')

        cancelNav0.addEventListener('click', function(){
            baseNavigation.classList.remove('Activate')
        })
        
    })
    })

    // Logic to switch between Login and Register Panels
    document.addEventListener('DOMContentLoaded', function(){
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

    })

    // Logic to  Hide and Reveal  Password * Registartion and Login Sectipon *
    document.addEventListener('DOMContentLoaded', function(){
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
    })

    // Logic for Making Passwords *Registration Section *
    document.addEventListener('DOMContentLoaded', function(){
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

    //Password Checking Refrences
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

    // making the Checkpassword chekcers function generally avaialbe using variables

    let checkEightCharacter, checkUppercaseCharacter, checkLowercaseCharacter, checkSpecialCharacter, checkNumberCharacter, checkEntirelyNotNumeric;
    let passwordInput = document.querySelector('.password')

    function checkPassword(passwordValue){
    checkEightCharacter = new RegExp('(?=.{8,})')
    checkUppercaseCharacter = new RegExp('(?=.*[A-Z])')
    checkLowercaseCharacter = new RegExp('(?=.*[a-z])')
    checkSpecialCharacter = new RegExp('(?=.*[!@#\$%\^&\\*+\\-=_()!~`])')
    checkNumberCharacter = new RegExp('(?=.*[0-9])')
    checkEntirelyNotNumeric = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).+$')

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

    // Listens to the password inputs for making passwords
        passwordInput.addEventListener('input', function(){
        let passwordValue = passwordInput.value
        checkPassword(passwordValue)
    })


    })


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

    // Input Checking Logic * Registration  Section *
    document.addEventListener('DOMContentLoaded', function(){

    // Input Validation References
    const form = document.getElementById('Registration_Form')
    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const password2 = document.getElementById('password2')

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

    // Function to get Fileds Name
    function fieldName(input){
    return input.className.charAt(0).toUpperCase() + input.className.slice(1)
    } 


    // Function to Check Password Fields
    function checkPasswordCharacter(password1, password2){
        if (password1.value !== password2.value ){
            displayError(password2, 'Passwords do not match!')
        }
    }

    form.addEventListener('submit', function(e){
        //  Event To prevent form from submiting when they are Errors
            e.preventDefault()
            
    // Check Password Requirements
            let allChecksPassed = true

    // Check Other input Fields
            checkInputFields([username, email, password, password2,])

    // Integrate input checks with allchecksPassed
        const inputArray = [username, email, password, password2]
            inputArray.forEach(function(input){
                if(input.value.trim() === ''){
                    displayError(input, `${fieldName(input)} is required!`)
                    allChecksPassed = false;
                }
                else{
                    if (input === username) {
                        checkInputCharacter(username, 5, 15);
                    } else if (input === email){
                        validateEmail(email);
                    } else if (input === password) {
                        checkInputCharacter(password, 8, 25);
                        checkPasswordCharacter(password, password2);
                    }
                }
            })

            //   If all checks passed, submit the form
                if (allChecksPassed) {
                    form.submit()
                    window.location.reload();
                }
            
        })
    })

    // Logic for Login Input
    document.addEventListener('DOMContentLoaded', function(){
    let    login_form  = document.getElementById('Login_Form')
    let   login_Username = document.getElementById('Login_Username')
    let   login_password = document.getElementById('Login_Password')


    // Function to get Fileds Name
    function loginfieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
    } 

    // function to Check Input Character
    function checkLoginInputCharacter(input, min, max){
    if(input.value.length < min){
        displayError(input, `${loginfieldName(input)} must be more than ${min} Characters!`)
    }
    else if(input.value.length > max){
        displayError(input, `${loginfieldName(input)} Must be less than ${max} Characters!`)
    }
    else{
        displayChecked(input )
    }
    }


    // Function to Check Input Fields
    function checkLoginInputFields(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim() === ''){
            displayError(input, `${loginfieldName(input)} is required!`)
        }
        else{
            displayChecked(input)
        }
    })
    }

    login_form.addEventListener('submit', function(e){
        //  Event To prevent form from submiting when they are Errors
        e.preventDefault()
            
        // Check Password Requirements
                let allChecksPassed = true
    
        // Check Other input Fields
        checkLoginInputFields([login_Username, login_password])
    
        // Integrate input checks with allchecksPassed
            const inputArray = [login_Username, login_password]
                inputArray.forEach(function(input){
                    if(input.value.trim() === ''){
                        displayError(input, `${loginfieldName(input)} is required!`)
                        allChecksPassed = false;
                    }
                    else{
                        if (input === login_Username) {
                            checkLoginInputCharacter(login_Username, 5, 15);
                        } 
                        else if (input === login_password) {
                            checkLoginInputCharacter(login_password, 8, 25);
                        }
                    }
                })
    
                //   If all checks passed, submit the form
                    if (allChecksPassed) {
                        login_form.submit()
                    }
                
    })

    })
}

if (document.getElementById('Index2')){
   let redirectToHome = document.querySelector('.HOME')

   redirectToHome.addEventListener('click', function(){
        window.location.href = 'index.html'
   })

       
   let emailForm = document.getElementById('Email_Form')
   let email = document.getElementById('email')
   
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

           // Function to Validate Email
   function validateEmail(email){
       let checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          return checkMail.test(email)
   }

       emailForm.addEventListener('submit', function(e){
           e.preventDefault()

           if(email.value === ''){
               displayError(email, 'Email is required!')
           }
           else if(!validateEmail(email.value)){
           displayError(email, 'Email is not Valid!')
           }
           else{
               displayChecked(email)
            //    emailForm.submit()
                let verifiedEmail = document.getElementById('Verified')
                    verifiedEmail.addEventListener('click', function(){
                    window.location.href = 'Password_Reset_Confirm.html'
           })
           }
   
       }) 
}

if(document.getElementById('Index3')){
    let redirectToHome = document.querySelector('.HOME')

    redirectToHome.addEventListener('click', function(){
         window.location.href = 'index.html'
    })
}
