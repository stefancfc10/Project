let form = document.getElementById('form');
let username = document.getElementById('name');
let companyname = document.getElementById('company');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputUser();
    checkInputCompany();
    checkInputEmail();
    checkInputPhone();
});

function checkInputUser() {
  let usernameValue = username.value.trim();

   
   if(usernameValue === '') {
    
    setErrorFor(username, 'Ве молиме внесете ваше Име и Презиме.');
   }else if(!validUser(usernameValue)) {
    
    setErrorFor(username, 'Ве молиме внесете валидно Име и Презиме.');
   } else {
    
    setSuccessFor(username);
   }


}



function checkInputCompany() {
    let comapnyValue = companyname.value.trim();


    if(comapnyValue === '') {
   
        setErrorFor(companyname, 'Ве молиме внесете име на вашата Компанија.');
       } else {
        
        setSuccessFor(companyname);
       }
}




function checkInputEmail() {
    let emailValue = email.value.trim();


    if(emailValue === '') {

        setErrorFor(email, 'Ве молиме внесете ваша е-маил адреса.');
       }else if(!validEmail(emailValue)) {
    
        setErrorFor(email, 'Ве молиме внесете валидна е-маил адреса.');
       } else {
    
        setSuccessFor(email);
       }
}


function checkInputPhone() {
    let phoneValue = phone.value.trim(); 

    if(phoneValue === '') {
        setErrorFor(phone, 'Ве молиме внесете ваш телефонски број.');
       }else if(!validPhone(phoneValue)){
        setErrorFor(phone, 'Ве молиме внесете валиден телефонски број.');
       }
        else {
        setSuccessFor(phone);
       }


}




function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');


    small.innerText = message;
    formControl.className = 'col-12 col-sm-6 form-group error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'col-12 col-sm-6 form-group success';
}

function validUser (username) {
    return /^[A-Za-z]+$/.test(username);
}

function validEmail (email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validPhone (phone) {
    return /^\(?([0-9]{3})\)?[-/ ]?([0-9]{3})[-/ ]?([0-9]{3})$/.test(phone);
}


form.addEventListener('input', function (event) {
    switch (event.target.id) {
        case 'name':
            checkInputUser();
            break;
            case 'company':
                checkInputCompany();
                break;
        case 'email':
            checkInputEmail();
            break;
        case 'phone':
            checkInputPhone();
    }
});