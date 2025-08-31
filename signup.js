import { auth } from "../config/firebase-config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const googleBtn = document.querySelector(".btn-google");
  const provider = new GoogleAuthProvider();

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
      console.log("✅ User created:", userCredential.user);

      alert("User created successfully!");
      window.location.href = "../../index.html";
    } catch (error) {
      console.error("❌ Signup error:", error.message);
      alert(error.message);
    }
  });

  googleBtn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("✅ Google user:", result.user);

      alert("Signed in with Google successfully!");
      window.location.href = "../../index.html";
    } catch (error) {
      console.error("❌ Google sign-in error:", error.message);
      alert(error.message);
    }
  });
});
