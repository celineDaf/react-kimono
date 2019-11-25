import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyALZ7pEzpjAnHh2-8B1tVQrNfIqNn9acXs",
    authDomain: "react-kimono.firebaseapp.com",
    databaseURL: "https://react-kimono.firebaseio.com",
    projectId: "react-kimono",
    storageBucket: "react-kimono.appspot.com",
    messagingSenderId: "681912576727",
    appId: "1:681912576727:web:79852fef334b80c4161e92",
    measurementId: "G-PM2X0Y2EH3"
  };

    firebase.initializeApp(firebaseConfig);

    export default firebase 
