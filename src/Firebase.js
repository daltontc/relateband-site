// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDDnYOjrVnVxKK31n48HkBG7yClqs4gPns',
	authDomain: 'relate-site.firebaseapp.com',
	projectId: 'relate-site',
	storageBucket: 'relate-site.appspot.com',
	messagingSenderId: '311881386944',
	appId: '1:311881386944:web:4eb3689c5c9e6b1c319625',
	measurementId: 'G-JBJE9YX8TG'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
