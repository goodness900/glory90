import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

document.getElementById("registerForm").addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").innerText = "Registered successfully! Redirecting...";
      setTimeout(() => window.location.href = "login.html", 1500);
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
});