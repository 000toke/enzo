//University Name: University Kuala Lumpur, Unikl Miit
    //Name: Muhammad Irfan Bin Abu Bakar , id = 52052120009
          //Muhammad Irfan Bin Mohd Noor , id = 52052120007
    //Title of Project: Old v New Games
    //Lecturer Name: Norshahiran Puteh
    //Submission Date: Thusrday Week 17

// js for button to go up
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}