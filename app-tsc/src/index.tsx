import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'Firebase';

ReactDOM.render(<App />, document.getElementById('root'));

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
