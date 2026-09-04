/* Firebase Cloud Messaging service worker (web).
 *
 * `firebase_messaging` for web registers this file automatically from the web
 * root — it MUST be named exactly `firebase-messaging-sw.js` and sit next to
 * `index.html`.
 *
 * Fill the config below from the `web` block of `lib/firebase_options.dart`
 * after running `flutterfire configure`. Until the placeholders are replaced
 * `firebase.messaging()` stays inert and background web push does nothing
 * (the app still runs — see NotificationService, which swallows the failure).
 */
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDoJgC0oQ8fEEbbFrIkyLzQoWKg4706l1s",
  authDomain: "devendra-ayurveda.firebaseapp.com",
  projectId: "devendra-ayurveda",
  storageBucket: "devendra-ayurveda.firebasestorage.app",
  messagingSenderId: "83335936864",
  appId: "1:83335936864:web:76fbf1adb97e58cc42fc05",
  measurementId: "G-QX37KLSMTX"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((message) => {
  const notification = message.notification || {};
  self.registration.showNotification(notification.title || "Devendra Ayurveda", {
    body: notification.body || "",
    icon: "/icons/Icon-192.png",
    data: message.data || {},
  });
});
