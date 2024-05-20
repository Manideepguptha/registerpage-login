const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
 
/*let inputelement=document.getElementById("inputusername");
let signintext=document.getElementById("sign-in-text");*/

/*function signin{
  let username=document.getElementById('Username').value;
  let verifytext = "Hi"+ username+ ",verifying your account...";
  signintext.textContent=verifytext;
}*/

document.getElementById('loginform').addEventListener('submit',function(event){

  event.preventDefault();

  var username=document.getElementById('Username').value;
  var Password=document.getElementById('password1').value;
  
  if (username ==="") {
    alert("Username is required.");
    return false; // Stop execution and show error message
}
  else if(Password ===""){
    alert("Please fill password.");
    return false;
  }
  else{
    /*alert("sucessfully login\n");*/
    document.getElementById('signin').innerText=" Hi  "+ username + " verifying your account...";
    document.getElementById('signin').style.color='blue';
    console.log("sucessfully login");

  }
  
  
  
});
document.getElementById('sigup').addEventListener('submit',function(event){
  event.preventDefault();

  var username3=document.getElementById("Username1").value;
  var Email=document.getElementById("email").value;
  var Password3=document.getElementById("Password2").value;
  var Confirmpassword=document.getElementById("confirmpassword").value;

  if(username3 ===""){
    alert("username required.");
    return false;
  }
  if (Email ===""){
    alert("Please fill Email");
    return false;
  }
  if(Password3 ===""){
    alert("Please fill password.");
    return false;

  }
  if(Password3  !== Confirmpassword){
    alert("password do not matching");
    return false;

  }
  else{
    document.getElementById('signup').innerText= username3 +" sucessfull signin ";
    document.getElementById('signup').style.color="red"
    
  }

});





