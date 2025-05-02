import { initializeApp, getApps, getApp } from "firebase/app";
const firebaseConfig =  {
    apiKey: "AIzaSyCqmQAXNSQ5wFpy_3n_WKQJonewHIPBc-s",
    authDomain: "mealstogo-ceda6.firebaseapp.com",
    databaseURL: "https://mealstogo-ceda6-default-rtdb.firebaseio.com",
    projectId: "mealstogo-ceda6",
    storageBucket: "mealstogo-ceda6.firebasestorage.app",
    messagingSenderId: "958420741955",
    appId: "1:958420741955:web:1be2928fe2113e6ca649f6"
  };
  let firebaseApp;
  
  if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
    } else {
    firebaseApp = getApp();
    }

export default firebaseApp;