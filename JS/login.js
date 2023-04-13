//  ==================== Google Firebase Connection =================//
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
  import { getAuth,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
 
  
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
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

const login = document.getElementById("login");
login.addEventListener("click", loginFunction);
    
       function loginFunction(){
    var uname = document.getElementById('uname').value;
    var password = document.getElementById('psw').value;
 
       signInWithEmailAndPassword(auth, uname, password)
       .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
 
         window.location.href = "/index.html";
 
          alert('User loged in!');
         // ...
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
 
         alert(errorMessage);
   });
 
  };

// ==================== Sign In With Google =======================//

const signinwithgoogle = document.getElementById("signin-with-google");
signinwithgoogle.addEventListener("click", signingoogle);
    
       function signingoogle(){
       const googleprovider = new firebaseConfig.auth.GoogleAuthProvider();
       auth.signInwithPopup(googleprovider)
       .then(()=>{
        window.location.assign('/index.html');
       })
       .catch(error => {
        console.error(error);
       })

     
       }



  const password_show2 = document.getElementById("password-show");
password_show2.addEventListener("click", myFunctionps2);
function myFunctionps2() {
  var y = document.getElementById("psw-r");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}