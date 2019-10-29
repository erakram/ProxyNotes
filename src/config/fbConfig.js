import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyDqhHd2QQadITSnUG-X94sbG2V_wLl_DJ0",
    authDomain: "reactapp-b6212.firebaseapp.com",
    databaseURL: "https://reactapp-b6212.firebaseio.com",
    projectId: "reactapp-b6212",
    storageBucket: "",
    messagingSenderId: "899483830049",
    appId: "1:899483830049:web:8c820727795969db"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;