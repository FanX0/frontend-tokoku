<template>
  <div id="app">
    <h1>Firebase Plugin Initialization</h1>
    <p>Firebase has been initialized successfully.</p>
    <p v-if="token">Device Token: {{ token }}</p>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAQuDGUwhr692CaUN9UZAzh833LdXj-qF8",
  authDomain: "push-notification-57bbc.firebaseapp.com",
  projectId: "push-notification-57bbc",
  storageBucket: "push-notification-57bbc.appspot.com",
  messagingSenderId: "1066753359582",
  appId: "1:1066753359582:web:56de82e59dff3d0a778c4f",
  measurementId: "G-8GWNSZ1LZP"
};

const app = initializeApp(firebaseConfig);

export default {
  name: 'App',
  data() {
    return {
      token: null,
      error: null
    };
  },
  mounted() {
    if (typeof window !== 'undefined') {
      const messaging = getMessaging();

      // Request permission and get token
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          getToken(messaging, { vapidKey: ' BBPJVv8-5e9M3CggcdRBzKk-efAkWzNOZB_S98a2DLtzheeFTz5NMob_jslEMs3PbovITc870YjqLeEkw5v1R58 ' })
            .then((currentToken) => {
              if (currentToken) {
                console.log('Device token:', currentToken);
                this.token = currentToken;
                // Here you would send the token to your backend
              } else {
                console.error('No registration token available. Request permission to generate one.');
              }
            })
            .catch((err) => {
              console.error('An error occurred while retrieving token.', err);
              this.error = err;
            });
        } else {
          console.error('Unable to get permission to notify.');
        }
      });

      // Handle incoming messages
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        // Customize notification here
      });
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
