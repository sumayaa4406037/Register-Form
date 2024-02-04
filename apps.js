function myCheck(){
	var pass1=document.getElementById('password');
	var pass2=document.getElementById('c_password');
	if(pass1.type=="password" || pass2.type=="password"){
		pass1.type="text";
		pass2.type="text";
	}else{
			pass1.type="password";
		pass2.type="password";
	}
}

var username=document.getElementById('username');
var icon1=document.querySelector('#icon1')
username.addEventListener('keyup',function(e){
	if(username.value.length>0){
		username.style.border='2px solid green';
		icon1.style.color='green';
	}else{
		username.style.border='2px solid red';
	    icon1.style.color='red'
	}
})

var email=document.getElementById('email');
var icon2=document.querySelector('#icon2')
email.addEventListener('keyup',function(e){
	if(email.value.length>0){
		email.style.border='2px solid green';
		icon2.style.color='green';
	}else{
		email.style.border='2px solid red';
	    icon2.style.color='red'
	}
})

var mobile=document.getElementById('mobile');
var icon3=document.querySelector('#icon3')
mobile.addEventListener('keyup',function(e){
	if(mobile.value.length>0){
		mobile.style.border='2px solid green';
		icon3.style.color='green';
	}else{
		mobile.style.border='2px solid red';
	    icon3.style.color='red'
	}
})

var password=document.getElementById('password');
var icon4=document.querySelector('#icon4')
password.addEventListener('keyup',function(e){
	if( password.value.length>0){
		password.style.border='2px solid green';
		icon4.style.color='green';
	}else{
		password.style.border='2px solid red';
	    icon4.style.color='red'
	}
})

var c_password=document.getElementById('c_password');
var icon5=document.querySelector('#icon5')
c_password.addEventListener('keyup',function(e){
	if( c_password.value.length>0){
		c_password.style.border='2px solid green';
		icon5.style.color='green';
	}else{
		c_password.style.border='2px solid red';
	    icon5.style.color='red'
	}
})

