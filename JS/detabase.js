

const config = {
  apiKey: "AIzaSyBiYr1gT11NgVT9-OHHf0j1JQbdH5MgYIM",
  authDomain: "ecommerce-signup-a9cf9.firebaseapp.com",
  databaseURL: "https://ecommerce-signup-a9cf9-default-rtdb.firebaseio.com",
  projectId: "ecommerce-signup-a9cf9",
  storageBucket: "ecommerce-signup-a9cf9.appspot.com",
  messagingSenderId: "996484563271",
  appId: "1:996484563271:web:d05989d4d61d702c2a0c62",
  measurementId: "G-2T5M5J66JC"
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('signup');

// Listen for form submit
document.getElementById('signupForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var uname = getInputVal('uname');
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var password = getInputVal('psw');
  var re_password = getInputVal('psw-r');
  

  // Save message
  saveMessage(uname, fname, lname, password, re_password);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('signupForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(uname, fname, lname, password, re_password){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    uname: uname,
    fname:fname,
    lname:lname,
    password:password,
    re_password:re_password
  });
}



