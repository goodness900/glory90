npm install firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// LOGIN
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
};

// REGISTER
window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").innerText = "Registration successful!";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
};

// DASHBOARD PROTECTION
onAuthStateChanged(auth, (user) => {
  if (document.getElementById("user")) {
    if (user) {
      document.getElementById("user").innerText = "Welcome " + user.email;
    } else {
      window.location.href = "index.html";
    }
  }
});

// LOGOUT
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};