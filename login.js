import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { auth } from "./firebase-config.js";

const btn = document.getElementById("loginBtn");
const message = document.getElementById("message");

btn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) { message.innerText = "Enter email & password"; return; }

  message.innerText = "Processing...";

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html";
  } catch (error) {
    message.innerText = error.message;
  }
});

// Prevent mobile enter refresh
document.addEventListener("keydown", e => { if (e.key === "Enter") e.preventDefault(); });