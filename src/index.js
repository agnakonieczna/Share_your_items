import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/main.scss';
import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';

// var firebaseConfig = {
//   apiKey: "AIzaSyCZu6VkQ-TsZ2F71UlEANsUuphrYVoyvRo",
//   authDomain: "oddaj-rzeczy-b3036.firebaseapp.com",
//   databaseURL: "https://oddaj-rzeczy-b3036.firebaseio.com",
//   projectId: "oddaj-rzeczy-b3036",
//   storageBucket: "oddaj-rzeczy-b3036.appspot.com",
// };

// var database = firebase.database()

// firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
