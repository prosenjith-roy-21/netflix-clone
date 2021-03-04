import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBxF7w17xSZ1uAXklwN01IVwJUiqpl9E74",
  authDomain: "netflix-clone-4e027.firebaseapp.com",
  projectId: "netflix-clone-4e027",
  storageBucket: "netflix-clone-4e027.appspot.com",
  messagingSenderId: "271419325716",
  appId: "1:271419325716:web:176f301abbf8d9872fd601"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth };
export default db