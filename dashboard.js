import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");
const userEmail = document.getElementById("userEmail");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmail.innerText = "Logged in as: " + user.email;
  } else {
    window.location.href = "index.html";
  }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});