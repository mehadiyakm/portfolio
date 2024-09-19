var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName(){
  var name= document.getElementById('contact-name').value;

  if(name.length == 0){
    nameError.innerHTML = 'name is required';
  }
  if (!name.match(/^[A-Za-z]+\s+[A-Za-z]+$/)) {
    nameError.innerHTML = 'Write full name (first and last name)';
    return false;
}
  nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}


function validateEmail() {
  var email = document.getElementById('contact-email').value;

  if (email.length == 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }


  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = 'Write a valid email';
    return false;
  }

  emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}



function validateName(){
  var name= document.getElementById('contact-name').value;

  if(name.length == 0){
    nameError.innerHTML = 'name is required';
  }
  if (!name.match(/^[A-Za-z]+\s+[A-Za-z]+$/)) {
    nameError.innerHTML = 'Write full name (first and last name)';
    return false;
}
  nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}


function validateSubject() {
  var subject = document.getElementById('contact-subject').value;
  var required = 20;
  var left = required - subject.length;

  if(left>0){
    subjectError.innerHTML = left+'more characters required';
    return false;
  }

  subjectError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;

}

function validateMessage() {
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if(left>0){
    messageError.innerHTML = left+'more characters required';
    return false;
  }

  messageError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;

}