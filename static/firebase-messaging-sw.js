importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');


firebase.initializeApp({
  apiKey: "AIzaSyAQuDGUwhr692CaUN9UZAzh833LdXj-qF8",
  authDomain: "push-notification-57bbc.firebaseapp.com",
  projectId: "push-notification-57bbc",
  storageBucket: "push-notification-57bbc.appspot.com",
  messagingSenderId: "1066753359582",
  appId: "1:1066753359582:web:56de82e59dff3d0a778c4f",
  measurementId: "G-8GWNSZ1LZP"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = 'payload.notification.title';
  const notificationOptions = {
    body: 'payload.notification.body',
    icon: '/images/ayam.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
