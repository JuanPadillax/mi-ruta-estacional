// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // IMPORTANTE: Importamos la autenticación

const firebaseConfig = {
  apiKey: "AIzaSyBHIWh8bPpoPTjgesqw2_M3oFsUzcm8YVE",
  authDomain: "mi-ruta-estacional.firebaseapp.com",
  projectId: "mi-ruta-estacional",
  storageBucket: "mi-ruta-estacional.firebasestorage.app",
  messagingSenderId: "740049235839",
  appId: "1:740049235839:web:90ceb57b53a80cbb4d344a",
  measurementId: "G-Q6QHHJJF15"
};

// 1. Inicializamos la app con tus llaves hardcodeadas
const app = initializeApp(firebaseConfig);

// 2. EXTRAEMOS Y EXPORTAMOS 'auth' PARA QUE EL LOGIN LO PUEDA USAR
export const auth = getAuth(app);