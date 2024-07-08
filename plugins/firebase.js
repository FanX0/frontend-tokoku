import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {

  apiKey: "AIzaSyAQuDGUwhr692CaUN9UZAzh833LdXj-qF8",

  authDomain: "push-notification-57bbc.firebaseapp.com",

  projectId: "push-notification-57bbc",

  storageBucket: "push-notification-57bbc.appspot.com",

  messagingSenderId: "1066753359582",

  appId: "1:1066753359582:web:56de82e59dff3d0a778c4f",

  measurementId: "G-8GWNSZ1LZP"

};


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

