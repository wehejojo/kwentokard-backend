import { auth } from "../config/firebase-config";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const googleBtn = document.querySelector(".btn-google");
  const provider = new GoogleAuthProvider();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Logged in:", userCredential.user);

      alert("Login successful!");
      window.location.href = "../../index.html";
    } catch (error) {
      console.error("❌ Login error:", error.message);
      alert(error.message);
    }
  });

  googleBtn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("✅ Google user logged in:", result.user);

      alert("Logged in with Google successfully!");
      window.location.href = "../../index.html";
    } catch (error) {
      console.error("❌ Google login error:", error.message);
      alert(error.message);
    }
  });
});
