import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHAedOuTKPkpAl0fiEE0kc7sGplen3Vm4",
  authDomain: "imessage-2eeea.firebaseapp.com",
  databaseURL: "https://imessage-2eeea.firebaseio.com",
  projectId: "imessage-2eeea",
  storageBucket: "imessage-2eeea.appspot.com",
  messagingSenderId: "655822446030",
  appId: "1:655822446030:web:2250f6df8af32583969f9f",
  measurementId: "G-0GYFL8J0JN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
