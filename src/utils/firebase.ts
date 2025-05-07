// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDUmu-hlEmlzAPvGktJcoRDZ9qjoFDuI_E',
    authDomain: 'netflix-gpt-dfdaa.firebaseapp.com',
    projectId: 'netflix-gpt-dfdaa',
    storageBucket: 'netflix-gpt-dfdaa.firebasestorage.app',
    messagingSenderId: '653871971007',
    appId: '1:653871971007:web:a08d7460183c7b8da0e40a',
    measurementId: 'G-YSBWE29F24',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
