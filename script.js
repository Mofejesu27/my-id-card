let regForm = document.getElementById('registerform');
regForm.addEventListener('submit', function(e){
    e.preventDefault();
let name = regForm['name'].value;
let phone = regForm['phone'].value;
let age = regForm['age'].value;
let email = regForm['mail'].value;

let fullname = document.getElementById('name');
fullname.innerHTML = name;

let mynumber = document.getElementById('number');
if (phone.startsWith('070') || phone.startsWith('080') || phone.startsWith('081') || phone.startsWith('090') || phone.startsWith('091') ){
    if (phone.length == 11){
        valid = phone
    }
    else{
        valid = "invalid"
    }
    }
    else{
        valid = "invalid"
    }
    mynumber.innerHTML = valid;

let myAge = document.getElementById('age');
if (age >= 18){
    valid = age
}
else{
    valid = "you must be" + 18
}
myAge.innerHTML = valid;

let mail = document.getElementById('email');
mail.innerHTML = email;

})
