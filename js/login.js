// Step-1: Add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Step-3: get password
    // 3.1: set id on the html element
    // 3.2: get the element
    // 3.3: get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: Do not check email password on the client side

    //Step-4: verify email and password and check whether valid user or not
    if(email === 'sontan@baap.com' && password === 'secret'){
        console.log('valid user')

    }
    else{
        console.log('invalid user');
    }

   
   



})