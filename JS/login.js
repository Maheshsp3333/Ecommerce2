//  ==================== Google Firebase Connection =================//
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,signInWithRedirect,getRedirectResult,signInWithPopup,signOut 
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

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
  appId: "1:996484563271:web:0b9d1f6436ed6a762a0c62",
  measurementId: "G-KGDY6QJYXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

const login = document.getElementById("login");
login.addEventListener("click", loginFunction1);

function loginFunction1() {
  var uname = document.getElementById("uname").value;
  var password = document.getElementById("psw").value;

  signInWithEmailAndPassword(auth, uname, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      window.location.href = "/index.html";

      alert("User loged in!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
}

// ==================== Sign In With Google =======================//

const signinwithgoogle = document.getElementById("signin-with-google");
signinwithgoogle.addEventListener("click", signingoogle);

function signingoogle() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    window.location.href = "/index.html";
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
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
