const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
var format = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const confirmValue = confirm.value.trim();

   if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(confirmValue === '') {
		setErrorFor(confirm, 'Password2 cannot be blank');
	} else if(passwordValue !== confirmValue) {
		setErrorFor(confirm, 'Passwords do not match');
	} else{
		setSuccessFor(confirm);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccessFor(input){
    	const formControl = input.parentElement;
    	formControl.className = "form-control success";
    }
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




	/*if (username.value.length != "") {
	    username.style.borderColor = "green";
	}
	else{
		username.style.borderColor = "red";
	}


  if (email.value.length === 0){
    	email.style.borderColor ="red";
    }
    else if(format.test(email.value) !== true){
    	email.style.borderColor ="red";
    }
    else{
    	email.style.borderColor ="green";
    }


   if (password.value.length === 0){
    	password.style.borderColor ="red";
    }
    else{
    	password.style.borderColor ="green";
    }

    if (confirm.value.length === 0){
    	confirm.style.borderColor ="red";
    }
    else if(password.value !== confirm.value){
    	confirm.style.borderColor ="red";
    }
    else{
    	confirm.style.borderColor ="green";
    }}*/
    
    /*function setErrorFor(input, message){
    	const formControl = input.parentElement;
    	const small = formControl.querySelector('small');
    	formControl.className = "form-control error";
    	small.innerText = message;
    }

    

    function isEmail(email) {
    return 
    }*/
    






