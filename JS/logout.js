import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
    getAuth,signOut 
  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

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
//   const database = getDatabase(app);
  const auth = getAuth(app);

const signout = document.getElementById("logout-btn");
  signout.addEventListener("click", signout1);

function signout1() {
  signOut(auth).then(() => {
    window.location.href = "/HTML/login.html";
  }).catch((error) => {
    console.log(error);
  });
}