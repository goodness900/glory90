import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // VERY IMPORTANT

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration successful!");
    })
    .catch((error) => {
      alert(error.message);
    });
});