// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyA5x1Bj9Jnua275jxgdDziiRAvN6LVvobw',
    authDomain: 'netflixgpt-18f8e.firebaseapp.com',
    projectId: 'netflixgpt-18f8e',
    storageBucket: 'netflixgpt-18f8e.appspot.com',
    messagingSenderId: '462790422036',
    appId: '1:462790422036:web:aa0c9e8d10322d7a050101',
    measurementId: 'G-12RJY8S9CW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
