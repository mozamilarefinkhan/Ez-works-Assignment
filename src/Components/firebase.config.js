import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyARKYEIGAmxqNVbIuHpGo5Jn68g7ifYhzg",
    authDomain: "ez-work-d579e.firebaseapp.com",
    projectId: "ez-work-d579e",
    storageBucket: "ez-work-d579e.appspot.com",
    messagingSenderId: "902722954761",
    appId: "1:902722954761:web:ab55e66778e2b3beac3ad8"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { app, firestore };