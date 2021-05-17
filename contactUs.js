//University Name: University Kuala Lumpur, Unikl Miit
    //Name: Muhammad Irfan Bin Abu Bakar , id = 52052120009
          //Muhammad Irfan Bin Mohd Noor , id = 52052120007
    //Title of Project: Old v New Games
    //Lecturer Name: Norshahiran Puteh
    //Submission Date: Thusrday Week 17

//Js data 
let nameElement = document.querySelector('#name');
let emailElement = document.querySelector('#email');
let telephoneElement = document.querySelector('#telephone');
let messageElement = document.querySelector('#message');


//When user submit the data and show the data by inspect
let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', function(e){
    e.preventDefault();

    let nameValue =nameElement.value;
    let emailValue =emailElement.value;
    let telephoneValue =telephoneElement.value;
    let messageValue =messageElement.value;

    console.log('Name: ', nameValue)
    console.log('Email: ', emailValue)
    console.log('Telephone: ', telephoneValue)
    console.log('Message: ', messageValue)

//collect data from user
    if(emailValue.includes('@') && (nameValue <8 )) {
        alert('Thank you for your respond');
    } else {
       alert('Not a valid email address');
    }
})
