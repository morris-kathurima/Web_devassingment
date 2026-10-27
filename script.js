// assignment - getting all elements
let form = document.getElementById('registrationForm');
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let gender = document.getElementById('gender');
let dob = document.getElementById('dob');
let country = document.getElementById('country');
let phone = document.getElementById('phone');
let bio = document.getElementById('bio');

let memberList = document.getElementById('memberList');
let memberCounter = document.getElementById('memberCounter');
let empty = document.getElementById('empty');
let successMessage = document.getElementById('successMessage');
let darkModeToggle = document.getElementById('darkModeToggle');

// for console as teacher asked
console.log(form, fullName, email, password);
console.log(gender, dob, country, phone, bio);
console.log(memberList, memberCounter, darkModeToggle, successMessage);

form.addEventListener('submit', function(e){
 e.preventDefault();
 let ok = true;

 // clear old errors
 document.querySelectorAll('.error').forEach(el => el.textContent = "");

 if(fullName.value == ""){ document.getElementById('fullNameError').textContent = "Enter name"; ok = false; }
 if(email.value == ""){ document.getElementById('emailError').textContent = "Enter email"; ok = false; }
 if(password.value == ""){ document.getElementById('passwordError').textContent = "Enter password"; ok = false; }
 if(confirmPassword.value == ""){ document.getElementById('confirmPasswordError').textContent = "Confirm it"; ok = false; }
 if(password.value != confirmPassword.value){ document.getElementById('confirmPasswordError').textContent = "Not matching"; ok = false; }
 if(gender.value == ""){ document.getElementById('genderError').textContent = "Select gender"; ok = false; }
 if(dob.value == ""){ document.getElementById('dobError').textContent = "Enter DOB"; ok = false; }
 if(country.value == ""){ document.getElementById('countryError').textContent = "Enter country"; ok = false; }
 if(phone.value == ""){ document.getElementById('phoneError').textContent = "Enter phone"; ok = false; }
 if(bio.value == ""){ document.getElementById('bioError').textContent = "Enter bio"; ok = false; }

 if(ok == false){ return; }

 // add member
 let li = document.createElement('li');
 li.innerHTML = fullName.value + " - " + email.value + " <button class='removeBtn'>Remove</button>";
 memberList.appendChild(li);
 memberCounter.textContent = memberList.children.length;
 empty.style.display = "none";

 successMessage.classList.remove('hidden');
 form.reset();

 setTimeout(function(){
   successMessage.classList.add('hidden');
 }, 2500);
});

// remove
memberList.addEventListener('click', function(e){
 if(e.target.classList.contains('removeBtn')){
   e.target.parentElement.remove();
   memberCounter.textContent = memberList.children.length;
   if(memberList.children.length == 0){
     empty.style.display = "block";
   }
 }
});

// dark mode toggle - part 10
darkModeToggle.addEventListener('click', function(){
 document.body.classList.toggle('dark');
 if(document.body.classList.contains('dark')){
   darkModeToggle.textContent = "Light Mode";
 }else{
   darkModeToggle.textContent = "Dark Mode";
 }
});
