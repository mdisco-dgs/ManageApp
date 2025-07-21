// Importa la libreria Firebase compatibile con Expo
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// ⚠️ Inserisci qui le tue credenziali Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCjOxceFDy2oIETnCMpEbYcDtpxLjLBhDk",
  projectId: "monicadintino",
  storageBucket: "monicadintino.firebasestorage.app",
  messagingSenderId: "563226001571",
  appId: "monicadintino"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);

// Esporta il modulo auth per usarlo in LoginScreen
export const auth = getAuth(app);
