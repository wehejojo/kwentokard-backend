import { auth } from "https://wehejojo.github.io/kwentokard-backend/firebase-config.js";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } 
    from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const googleBtn = document.querySelector(".btn-google");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert("User created successfully!");
      window.location.href = "./index.html";
    } catch (error) {
      alert(error.message);
    }
  });

  googleBtn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert("Signed in with Google successfully!");
      window.location.href = "../../index.html";
    } catch (error) {
      alert(error.message);
    }
  });
});
