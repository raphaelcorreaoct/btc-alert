const { initializeApp } = require("firebase/app");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8qKyAbtDXIjjmTMl80Sj7kNgydo8fLYY",
  authDomain: "btc-alert-de381.firebaseapp.com",
  projectId: "btc-alert-de381",
  storageBucket: "btc-alert-de381.appspot.com",
  messagingSenderId: "515916230488",
  appId: "1:515916230488:web:b21730201b6b280a7eff2d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

module.exports = {
  firebaseApp,
};
