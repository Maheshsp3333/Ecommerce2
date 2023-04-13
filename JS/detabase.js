
//  ==================== Google Firebase Connection =================//
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBiYr1gT11NgVT9-OHHf0j1JQbdH5MgYIM",
    authDomain: "ecommerce-signup-a9cf9.firebaseapp.com",
    databaseURL: "https://ecommerce-signup-a9cf9-default-rtdb.firebaseio.com",
    projectId: "ecommerce-signup-a9cf9",
    storageBucket: "ecommerce-signup-a9cf9.appspot.com",
    messagingSenderId: "996484563271",
    appId: "1:996484563271:web:2149b7e2f57747822a0c62",
    measurementId: "G-ZP1D45ENLG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
const auth = getAuth();


// ========== Signup Code Here =================================================
const signup = document.getElementById("signupForm");
signup.addEventListener("click", signupFunction);

function signupFunction() {

var uname = document.getElementById('uname').value;
var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
var password = document.getElementById('psw').value;
var re_password = document.getElementById('psw-r').value;

createUserWithEmailAndPassword(auth, uname, password)
  .then((userCredential) => {
   // Signed in 
    const user = userCredential.user;

    set(ref(database, 'signup/' + user.uid),{
        uname: uname,
        fname: fname,
        lname:lname,
        password:password,
        re_password:re_password
    })

    alert('user created!');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
  // ..
  });

};

// ================ Password Visible or Not Validation =============================//
const password_show = document.getElementById("password-show");
password_show.addEventListener("click", myFunctionps1);

function myFunctionps1() {
  var x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

const password_show2 = document.getElementById("password-show2");
password_show2.addEventListener("click", myFunctionps2);
function myFunctionps2() {
  var y = document.getElementById("psw-r");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}


//======== Re type password validation ===================== 
var password = document.getElementById("psw")
  , confirm_password = document.getElementById("psw-r");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


// =================================== Strong Password Validation ===================


var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

// ================= Firebase Login Page Open ===============//

// ====================== terms And Conditions Accept =====================

const termandcondition = document.getElementById("terms-condition");
termandcondition.addEventListener("click", termconditions);
function termconditions() {
  if(!termandcondition.terms.checked) {
    alert("Please indicate that you accept the Terms and Conditions");
    termandcondition.terms.focus();
    return false;
  }
  return true;
};
