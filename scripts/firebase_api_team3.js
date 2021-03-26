//---------------------------------------------------
// replace the lines below with your own "firebaseConfig"
// key value pairs
//--------------------------------------------------- 

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDw0Upqtie2ArrCTtMBYO3mpXUIcMz9Y-w",
  authDomain: "avs-app-e7a9b.firebaseapp.com",
  projectId: "avs-app-e7a9b",
  storageBucket: "avs-app-e7a9b.appspot.com",
  messagingSenderId: "770568831730",
  appId: "1:770568831730:web:42a111d229f1d5dc47466b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
