import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import firebaseApp from '../../../firebaseConfig';

// Initialize the auth instance
const auth = getAuth(firebaseApp);

// Login function
export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Registration function
export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Logout function
export const logoutRequest = () => {
  return signOut(auth);
};

// Listener for authentication state changes
export const authStateChangeListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};