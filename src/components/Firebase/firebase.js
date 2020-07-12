import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyCZu6VkQ-TsZ2F71UlEANsUuphrYVoyvRo",
  authDomain: "oddaj-rzeczy-b3036.firebaseapp.com",
  databaseURL: "https://oddaj-rzeczy-b3036.firebaseio.com",
  projectId: "oddaj-rzeczy-b3036",
  storageBucket: "oddaj-rzeczy-b3036.appspot.com",
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) => 
      this.auth.createUserWithEmailAndPassword(email, password);
    

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
}





export default Firebase;

// var database = firebase.database(app)