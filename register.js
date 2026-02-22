import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

window.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("registerForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Registered successfully!");
      })
      .catch((error) => {
        alert(error.message);
      });

  });

});