import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgNqFqDotdh26XG6yVGYj3wZZdfV9eP1M",
  authDomain: "kwentokard.firebaseapp.com",
  projectId: "kwentokard",
  storageBucket: "kwentokard.firebasestorage.app",
  messagingSenderId: "631132555516",
  appId: "1:631132555516:web:27d2805f98e44976382f79",
  measurementId: "G-RXD1JXPW7C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);