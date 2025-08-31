// login.js
import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } 
    from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const googleBtn = document.querySelector(".btn-google");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      window.location.href = "./index.html";
    } catch (error) {
      alert(error.message);
    }
  });

  googleBtn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert("Logged in with Google successfully!");
      window.location.href = "./index.html";
    } catch (error) {
      alert(error.message);
    }
  });
});
